import './App.css';
import React,{useState} from 'react'
import Profile from './Profile';
import Login from './Login';
import User from './User';
import DidMount from './DidMount';

function App() {
  const [status, setStatus]=useState(true)
  const [name,setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [anime,setAnime]= useState("");

  function getFormData(e){
    console.log(name,tnc,anime)
    e.preventDefault()    
  }

  function getData(){
    alert('Data from app component.')
  }

  return (
    <div className="App">
      {status?
      <h2>HEllo</h2>:
      null}
      {/* <button onClick={()=>setStatus(false)} >hide/show</button>
      <button onClick={()=>setStatus(true)} >show</button> */}

      <button onClick={()=>setStatus(!status)}>Toggle</button>

      <h2>Handle Form</h2>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='enter user name' onChange={(e)=>setName(e.target.value)}/> <br /><br />
        <select onChange={(e)=> setAnime(e.target.value)} defaultValue="Naruto">
          <option>Select Anime</option>
          <option>Naruto</option>
          <option>One Piece</option>
          <option>Dragon Ball Z</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e)=>{setTnc(e.target.checked)}}/><span>Accept terms and conditions</span><br /><br />
        <button type='submit'>Submit</button>
      </form>
      <Profile/>
      <Login/>
      <User data={getData}/>
      <DidMount/>
    </div>
  );
}

export default App;
