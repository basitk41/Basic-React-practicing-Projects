import './App.css';
import {Route} from 'react-router-dom';
import Teacher from './pagination/teacher';
import AddNew from './pagination/addNewTeacher';

function App() {
  return (
    <div className="container">
        <Route path="/teacher/new" component={AddNew} />
        <Route path="/" exact component={Teacher} />
      
    </div>
  );
}

export default App;
