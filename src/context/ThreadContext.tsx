import crypto from 'crypto';
import React, { useState } from 'react';

import createEntityAdapter from '../utils/entityAdapter';
import data from '../assets/fake/data.json';
import { INoteData } from '../types';
import FireStorage from '../dao';

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
  selectTag: (tag: string) => void;
}

export function ThreadProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { ids, entities } = createEntityAdapter<INoteData>(data.thread);
  const [threadIds, setThreadIds] = useState(ids);
  const [threadEntities, setThreadEntities] = useState(entities);
  const [tags, setTags] = useState(data.tags);
  const [selectedTag, setSelectedTag] = useState('all');

  const value: IThreadContext = {
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
      const id = crypto.randomBytes(64).toString('hex');
      setThreadIds(prev => [...prev, id]);
      const note: INoteData = {
        id,
        content: '',
        tags: selectedTag && selectedTag !== 'all' ? [ 'all', selectedTag ] : [ 'all' ],
        time: Date.now(),
      };
      setThreadEntities(prev => ({ ...prev, [id]: note }));
      FireStorage.addNewNote(note);
    },
    addTag: (id, tag) => {
      if (!tags.includes(tag)) setTags(oldTags => [ ...oldTags, tag ]);

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
    selectTag: tag => setSelectedTag(tag)
  };

  return (
    <ThreadContext.Provider value={value} >
      {children}
    </ThreadContext.Provider>
  );
}

export default ThreadContext;