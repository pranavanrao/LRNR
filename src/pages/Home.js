import React from 'react';
import TextEditor from './../components/editor/Editor'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
function Home() {
  return (
    <div className='home'>
      <TextEditor/>
    </div>
  );
}

export default Home;