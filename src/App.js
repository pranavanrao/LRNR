import './App.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Sidebar from './components/sidebar/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar></Sidebar>
        <Editor
          // editorState={editorState}
          // toolbarClassName="toolbarClassName"
          // wrapperClassName="wrapperClassName"
          // editorClassName="editorClassName"
          // onEditorStateChange={this.onEditorStateChange}
        />
      </header>
    </div>
  );
}

export default App;
