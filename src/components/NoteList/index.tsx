import React from 'react';
import { List, Empty } from 'antd';
import { Note } from '@/utils/const';
import { history } from 'umi';
import NoteItem from '@/components/NoteItem';
import styles from './style.less';

const { Item } = List;

interface NoteListProps {
  list: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ list = [] }) => {
  if (list.length === 0) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  const toPage = (index: number) => {
    history.push(`/note/${index}`);
  };

  return (
    <List
      className={styles['note-list']}
      split
      dataSource={list}
      renderItem={(item, index) => (
        <Item onClick={() => toPage(index)}>
          <NoteItem data={item} />
        </Item>
      )}
    />
  );
};

export default NoteList;
