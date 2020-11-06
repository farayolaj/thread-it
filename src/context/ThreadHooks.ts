import { useContext } from 'react';
import ThreadContext, { IThreadContext } from './ThreadContext';

export const useSelectedTag = () => {
  const threadState = useContext(ThreadContext) as IThreadContext;
  return {
    selectedTag: threadState.state.selectedTag,
    selectTag: threadState.selectTag
  };
};

export const useThreadEntities = () => {
  const { state } = useContext(ThreadContext) as IThreadContext;
  return state.threadEntities || {};
};

export const useNote = (id: string) => {
  const { state, deleteNote, editNote, removeTag, addTag } = useContext(ThreadContext) as IThreadContext;
  return {
    note: state.threadEntities[id],
    deleteNote: () => deleteNote(id),
    editNote: (content: string) => editNote(id, content),
    removeTag: (tag: string) => removeTag(id, tag),
    addTag: (tag: string) => addTag(id, tag)
  };
};

export const useTags = () => {
  const { state } = useContext(ThreadContext) as IThreadContext;
  return state.tags;
};

export const useThreadIds = () => {
  const { state } = useContext(ThreadContext) as IThreadContext;
  return state.threadIds;
};

export const useAddNote = () => {
  const { newNote } = useContext(ThreadContext) as IThreadContext;
  return newNote;
};