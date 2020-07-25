import React from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { NoteState } from '@/models/note';
import HeadToolbar from '@/components/HeadToolbar';
import NoteList from '@/components/NoteList';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';

const IndexPage: React.FC<NoteState> = ({ noteList }) => {
  const newNote = () => {
    history.push('/note/new');
  };

  return (
    <div>
      <HeadToolbar>
        <PlusOutlined onClick={newNote} />
        <ReloadOutlined
          onClick={() => {
            console.log(111);
          }}
        />
      </HeadToolbar>
      <NoteList list={noteList} />
    </div>
  );
};

const mapStateToProps = ({ note }: { note: NoteState }) => {
  return { ...note };
};

export default connect(mapStateToProps)(IndexPage);
