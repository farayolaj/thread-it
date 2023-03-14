import crypto from 'crypto';
import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

import createEntityAdapter from '../utils/entityAdapter';
import { INoteData } from '../types';
import FireStorage from '../datasource';
import { useUser } from './AuthHooks';

const ThreadContext = React.createContext<IThreadContext | null>(null);

type NoteId = INoteData['id'];

export interface IThreadContext {
  state: {
    threadIds: NoteId[];
    threadEntities: {
      [id: string]: INoteData
    };
    tags: string[];
    selectedTag: string;
  };
  editNote: (id: NoteId, content: string) => void;
  newNote: () => void;
  deleteNote: (id: NoteId) => void;
  addTag: (id: NoteId, tag: string) => void;
  removeTag: (id: NoteId, tag: string) => void;
  deleteTag: (tag: string) => void;
  selectTag: (tag: string) => void;
}

export function ThreadProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [threadIds, setThreadIds] = useState<string[]>([]);
  const [threadEntities, setThreadEntities] = useState<{ [id: string]: INoteData }>({});
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState('all');
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      FireStorage.getFirstPage(selectedTag)
        .then(({ notes, tags }) => {
          const { ids, entities } = createEntityAdapter<INoteData>(notes);
          /* setThreadEntities called first because of lack of batching in promises
              setting ids first will cause an error since it refers to entities which are not yet set
          */
          ReactDOM.unstable_batchedUpdates(() => {
            setTags(tags);
            setThreadEntities(entities);
            setThreadIds(ids);
          });
        });
    }
  }, [selectedTag, user]);

  const value: IThreadContext = useMemo(() => ({
    state: { threadIds, threadEntities, tags, selectedTag },
    editNote: (id, content) => {
      setThreadEntities(prev => {
        const note = prev[id];
        return {
          ...prev,
          [id]: {
            ...note,
            content
          }
        };
      });
      FireStorage.editNote(id, content);
    },
    newNote: () => {
      const id = crypto.randomBytes(16).toString('hex');
      setThreadIds(prev => [...prev, id]);
      const note: INoteData = {
        id,
        content: '',
        tags: selectedTag && selectedTag !== 'all' ? ['all', selectedTag] : ['all'],
        time: Date.now(),
      };
      setThreadEntities(prev => ({ ...prev, [id]: note }));
      FireStorage.addNewNote(note);
    },
    addTag: (id, tag) => {
      if (!tags.includes(tag)) setTags(oldTags => [...oldTags, tag]);

      setThreadEntities(prev => {
        const note = prev[id];
        return {
          ...prev,
          [id]: {
            ...note,
            tags: [...note.tags, tag]
          }
        };
      });

      FireStorage.addTag(id, tag);
    },
    deleteNote: id => {
      setThreadIds(prev => {
        return prev.filter(cid => cid !== id);
      });
      setThreadEntities(prev => {
        delete prev[id];
        return { ...prev };
      });

      FireStorage.deleteNote(id);
    },
    removeTag: (id, tag) => {
      setThreadEntities(prev => {
        const note = prev[id];
        return {
          ...prev,
          [id]: {
            ...note,
            tags: note.tags.filter(ctag => ctag !== tag)
          }
        };
      });

      FireStorage.removeTag(id, tag);
    },
    // Test before use
    deleteTag: tag => {
      if (selectedTag === tag) {
        const nextSelectedTag = tags.find(otherTag => tag !== otherTag) || 'all';
        setSelectedTag(nextSelectedTag);
      }
      setThreadEntities(prev => {
        Object.keys(prev).forEach(id => {
          const note = prev[id];
          return {
            ...note,
            tags: note.tags.filter(otherTag => tag !== otherTag)
          };
        });
        return { ...prev };
      });

      FireStorage.deleteTag(tag);
    },
    selectTag: tag => setSelectedTag(tag)
  }), [
    threadIds,
    threadEntities,
    tags,
    selectedTag,
    setThreadEntities,
    setThreadIds,
    setTags,
    setSelectedTag]);

  return (
    <ThreadContext.Provider value={value} >
      {children}
    </ThreadContext.Provider>
  );
}

export default ThreadContext;