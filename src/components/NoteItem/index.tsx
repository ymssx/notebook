import React from 'react';
import { Note } from '@/utils/const';
import styles from './style.less';

interface NodeItemProps {
  data: Note;
}

const NoteItem: React.FC<NodeItemProps> = ({ data }) => {
  const { id, title, content } = data;

  return (
    <div className={styles['note-item']}>
      <h1>{title || '无标题'}</h1>
      <article>{content || '[还没有内容]'}</article>
    </div>
  );
};

export default NoteItem;
