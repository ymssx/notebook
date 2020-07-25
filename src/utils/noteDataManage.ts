import { Note } from './const';

export const saveNote = (note: Note, index: number) => {
  const noteJson = JSON.stringify(note);
  localStorage.setItem(`note-item-${index}`, noteJson);
};

export const getNote = (index: number) => {
  return localStorage.getItem(`note-item-${index}`);
};
