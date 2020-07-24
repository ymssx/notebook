import React from 'react';
import { Note } from '@/utils/const';

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
    <div>
      <input
        value={title}
        onChange={e => handleChangeData('title', e.target.value)}
      />
      <textarea
        value={content}
        onChange={e => handleChangeData('content', e.target.value)}
      />
    </div>
  );
};

export default ContentEdictor;
