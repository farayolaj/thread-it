import { firestore as store, auth } from '../firebase';
import { INoteData } from '../types';

function getCurrentUserId() {
  const currentUser = auth.currentUser;
  if (currentUser) return currentUser.uid;
  else return undefined;
}

class FireStorage {
  // static getInitialState()

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
      store
        .collection('users').doc(uid)
        .collection('notes').doc(id)
        .update({
          tags: tag//add tag
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
          tags: tag//remove tag
        });
    }
  }
}

export default FireStorage;