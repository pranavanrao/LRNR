import './App.css';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Navbar from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/reports' component={Reports} />
            <Route path='/products' component={Products} />
          </Switch>
        </Router>
        {/* <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        /> */}
      </header>
    </div>
  );
}

export default App;
