import './App.css';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text = 'nasif'/>
      <Todo text = 'ahmed'/>
      <Todo text = 'oney'/>
      
    </div>

  );
}

export default App;
