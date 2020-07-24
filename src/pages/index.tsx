import React from 'react';
import { connect } from 'dva';
import { NoteState } from '@/models/note';
import HeadToolbar from '@/components/HeadToolbar';
import NoteList from '@/components/NoteList';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';

const IndexPage: React.FC<NoteState> = ({ noteList }) => {
  return (
    <div>
      <HeadToolbar>
        <PlusOutlined
          onClick={() => {
            console.log(111);
          }}
        />
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
