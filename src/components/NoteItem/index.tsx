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
      <h1>{title}</h1>
      <article>{content}</article>
    </div>
  );
};

export default NoteItem;
