import { firestore } from 'firebase';

import { firestore as store, auth } from '../firebase';
import { INoteData } from '../types';

function getCurrentUserId() {
  const currentUser = auth.currentUser;
  if (currentUser) return currentUser.uid;
  else return undefined;
}

class FireStorage {
  private static earliestDoc: firestore.DocumentSnapshot | undefined = undefined;

  static async getFirstPage(tag: string): Promise<{
    notes: INoteData[];
    tags: string[];
  }> {
    const uid = getCurrentUserId();
    if (uid) {
      try {
        const threadRes = await store
          .collection('users').doc(uid)
          .collection('notes').where('tags', 'array-contains', tag)
          .orderBy('time').limitToLast(50).get();

        const tagRes = await store
          .collection('users').doc(uid)
          .get();

        let tags = tagRes.get('tags') as string[];
        tags = tags ? tags.sort() : [];

        FireStorage.earliestDoc = threadRes.docs[threadRes.docs.length - 1];

        const notes = threadRes.docs.map(doc => doc.data()) as unknown as INoteData[];
        return { notes, tags };
      } catch (error) {
        console.error(error);
        return { notes: [], tags: [] };
      }
    } else return { notes: [], tags: [] };
  }

  static async nextPage(tag: string): Promise<INoteData[]> {
    const uid = getCurrentUserId();
    if (uid) {
      try {
        const res = await store
          .collection('users').doc(uid)
          .collection('notes').where('tags', 'array-contains', tag)
          // note the endBefore call; compare to impl in getInitialState above
          .orderBy('time').endBefore(FireStorage.earliestDoc)
          .limitToLast(50).get();

        FireStorage.earliestDoc = res.docs[res.docs.length - 1];

        return res.docs.map(doc => doc.data()) as unknown as INoteData[];
      } catch (error) {
        console.error(error);
        return [];
      }
    } else return [];
  }

  static addNewNote(newNote: INoteData): void {
    const uid = getCurrentUserId();
    if (uid) {
      store
        .collection('users').doc(uid)
        .collection('notes').doc(newNote.id)
        .set(newNote);
    }
  }

  static deleteNote(id: string): void {
    const uid = getCurrentUserId();
    if (uid) {
      store
        .collection('users').doc(uid)
        .collection('notes').doc(id)
        .delete();
    }
  }

  static editNote(id: string, newContent: string): void {
    const uid = getCurrentUserId();
    if (uid) {
      store
        .collection('users').doc(uid)
        .collection('notes').doc(id)
        .update({
          content: newContent
        });
    }
  }

  static addTag(id: string, tag: string): void {
    const uid = getCurrentUserId();
    if (uid) {
      const userRef = store.collection('users').doc(uid);
      userRef
        .collection('notes').doc(id)
        .update({
          tags: firestore.FieldValue.arrayUnion(tag)
        });
      store.collection('users').doc(uid).set({ tags: [] }, { merge: true });
      store.collection('users').doc(uid).update({
        tags: firestore.FieldValue.arrayUnion(tag)
      });
    }
  }

  static removeTag(id: string, tag: string): void {
    const uid = getCurrentUserId();
    if (uid) {
      store
        .collection('users').doc(uid)
        .collection('notes').doc(id)
        .update({
          tags: firestore.FieldValue.arrayRemove(tag)
        });
    }
  }
}

export default FireStorage;