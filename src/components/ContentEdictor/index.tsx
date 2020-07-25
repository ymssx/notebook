import React from 'react';
import { Input } from 'antd';
import { Note } from '@/utils/const';
import styles from './style.less';

interface ContentEdictorProps {
  data: Note;
  onNoteChange: Function;
}

const ContentEdictor: React.FC<ContentEdictorProps> = ({
  data,
  onNoteChange,
}) => {
  const { title, content } = data;

  const handleChangeData = (key: string, value: string) => {
    const newData = {
      ...data,
      [key]: value,
      time: new Date().toLocaleString(),
    };
    onNoteChange(newData);
  };

  return (
    <div className={styles['content-edict']}>
      <Input
        placeholder="请输入标题"
        value={title}
        onChange={e => handleChangeData('title', e.target.value)}
      />
      <Input.TextArea
        autoSize
        placeholder="写下你的想法"
        value={content}
        onChange={e => handleChangeData('content', e.target.value)}
      />
    </div>
  );
};

export default ContentEdictor;
