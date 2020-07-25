import { Note } from '@/utils/const';

export interface NoteState {
  noteList: Note[];
}

const mockList = [
  { id: '232', title: 'test', content: 'hello word' },
  { id: '123', title: 'test', content: 'hello word' },
  { id: '435', title: 'test', content: 'hello word' },
  { id: '14', title: 'test', content: 'hello word' },
];

export default {
  namespace: 'note',
  state: {
    noteList: mockList,
  },
  reducers: {
    'set-notes'(
      state: NoteState,
      { payload: newNoteList }: { payload: Note[] },
    ) {
      return { ...state, noteList: newNoteList };
    },
    'set-note'(
      state: NoteState,
      { payload: noteData }: { payload: { index: number; data: Note } },
    ) {
      const { index, data } = noteData;
      const copyList = [...state.noteList];
      copyList[index] = data;
      return { ...state, noteList: copyList };
    },
    'add-note'(state: NoteState, { payload: newNote }: { payload: Note }) {
      const newList = [...state.noteList, newNote];
      return { ...state, noteList: newList };
    },
    'del-note'(state: NoteState, { payload: index }: { payload: number }) {
      const copyList = [...state.noteList];
      copyList.splice(index, 1);
      return { ...state, noteList: copyList };
    },
  },
  subscriptions: {
    localStorageChange() {},
  },
};
