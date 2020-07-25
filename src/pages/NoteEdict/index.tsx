import React, { useState } from 'react';
import { connect } from 'dva';
import { message, Modal } from 'antd';
import { history } from 'umi';
import {
  LeftOutlined,
  SaveOutlined,
  ReloadOutlined,
  RollbackOutlined,
} from '@ant-design/icons';
import { NoteState } from '@/models/note';
import { Note } from '@/utils/const';
import HeadToolbar from '@/components/HeadToolbar';
import ContentEdictor from '@/components/ContentEdictor';
import styles from './style.less';

interface NoteEdictProps {
  match: { params: { index: string } };
  noteList: Note[];
  dispatch: Function;
}

// 存储更改历史，允许撤销更改
const timeBackup: Note[] = [];
const MAX_RECORD_LENGTH = 10;

const NoteEdict: React.FC<NoteEdictProps> = ({ match, noteList, dispatch }) => {
  const { params } = match;
  const { index } = params;
  const originNote = noteList[parseInt(index)] || { title: '', content: '' };
  const [saveTipVisible, setSaveTipVisible] = useState(false);
  const [note, setNote] = useState(originNote);
  // 用于标识是否保存
  const [isSaved, setIsSaved] = useState(true);

  const recordNote = (newNote: Note) => {
    if (timeBackup.length > MAX_RECORD_LENGTH) {
      timeBackup.shift();
    }
    timeBackup.push(note);
    setNote(newNote);
    setIsSaved(false);
  };

  const undoNote = () => {
    const historyNote = timeBackup.pop() || originNote;
    setNote(historyNote);
  };

  // 撤销所有更改
  const handleResetNote = () => {
    setNote(originNote);
  };

  const handleNoteChange = (value: Note) => recordNote(value);

  const handleSaveNote = () => {
    if (!note.title && !note.content) {
      message.error('内容不能为空！');
      return;
    } else if (isSaved) {
      return;
    }

    if (index === 'new') {
      dispatch({
        type: 'note/add-note',
        payload: note,
      });
    } else {
      dispatch({
        type: 'note/set-note',
        payload: {
          index,
          data: note,
        },
      });
    }

    message.success('保存成功');
    setIsSaved(true);
  };

  const getSaveStatus = () => {
    // 如果有未保存内容，则显示小黄点
    return isSaved ? null : styles.saved;
  };

  const backToList = () => {
    if (!isSaved) {
      setSaveTipVisible(true);
    } else {
      history.push('/');
    }
  };

  const comfirmBack = () => {
    history.push('/');
  };

  return (
    <div>
      <HeadToolbar>
        <LeftOutlined onClick={backToList} />
        <SaveOutlined onClick={handleSaveNote} className={getSaveStatus()} />
        <RollbackOutlined onClick={undoNote} />
        <ReloadOutlined onClick={handleResetNote} />
      </HeadToolbar>

      <ContentEdictor data={note} onNoteChange={handleNoteChange} />

      <Modal
        title="内容未保存"
        okText="确定离开"
        cancelText="取消"
        visible={saveTipVisible}
        onOk={comfirmBack}
        onCancel={() => setSaveTipVisible(false)}
      >
        直接离开会丢失更改，确定要离开吗？
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ note }: { note: NoteState }) => {
  return { ...note };
};

export default connect(mapStateToProps)(NoteEdict);
