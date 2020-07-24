import React, { useState } from 'react';
import { connect } from 'dva';
import { LeftOutlined, SaveOutlined, ReloadOutlined } from '@ant-design/icons';
import { NoteState } from '@/models/note';
import { Note } from '@/utils/const';
import HeadToolbar from '@/components/HeadToolbar';
import ContentEdictor from '@/components/ContentEdictor';

interface NoteEdictProps {
  location: { query: { index: string } };
  noteList: Note[];
}

// 存储更改历史，允许撤销更改
const timeBackup: Note[] = [];
const MAX_RECORD_LENGTH = 10;

const NoteEdict: React.FC<NoteEdictProps> = ({ location, noteList }) => {
  const { query } = location;
  const { index } = query;
  const originNote = noteList[parseInt(index)];
  const [note, setNote] = useState(originNote);

  const recordNote = (newNote: Note) => {
    if (timeBackup.length > MAX_RECORD_LENGTH) {
      timeBackup.shift();
    }
    timeBackup.push(newNote);
    setNote(newNote);
  };

  const undoNote = () => {
    const historyNote = timeBackup.pop() || originNote;
    setNote(historyNote);
  };

  const handleNoteChange = (value: Note) => recordNote(value);

  return (
    <div>
      <HeadToolbar>
        <LeftOutlined />
        <SaveOutlined
          onClick={() => {
            console.log(111);
          }}
        />
        <ReloadOutlined onClick={() => undoNote()} />
      </HeadToolbar>

      <ContentEdictor data={note} onNoteChange={handleNoteChange} />
    </div>
  );
};

const mapStateToProps = ({ note }: { note: NoteState }) => {
  return { ...note };
};

export default connect(mapStateToProps)(NoteEdict);
