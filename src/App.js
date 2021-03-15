import React,{useState} from 'react';
import './App.css';
import Board from './Board';
import UserPick from './UserPick';

function App() {

  const [user,setUser] = useState('');
  const [userDone,setUserDone] = useState(false);
  const [value,setValue] = useState('');

  return (
    <div className="App">
      {userDone && <Board user={user}/>}
      {!userDone && <UserPick setUserDone={setUserDone} user={user} setUser={setUser} value={value} setValue={setValue}/>}
    </div>
  );
}

export default App;
