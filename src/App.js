import './App.css';
import React ,{useState, useEffect} from "react";
import Button from '@mui/material/Button';
import Form from "./comp/form"
import Login from "./comp/landingpage/landing.jsx"

function App() 
{
  const [name, setname] = useState("Home")
  const [age, setage] = useState(12)
  
  const arjad = () => {
    setname("expensive")
  }
  const anas = () => {
    setname("cheap")
  }  
  const ali = () => {
    setname("2nd hand")
  }

  useEffect(()=>{
    console.log("use effect");

  },[name])
  return (
    <div className="App">
     
      <div className="body container pt-5">
     
      <br/>
      <Login />
      <nav className="container">
      <ul>
      <li><Button className="Nav_btn"  variant="contained" onClick={arjad}>Home</Button></li>
      <li><Button className="Nav_btn" variant="contained" onClick={anas}>About</Button></li>
      <li><Button className="Nav_btn" variant="contained" onClick={ali}>Contact</Button></li>
      </ul>
      <h2>selected item = {name}</h2>
      <br/>
      <br/>
    </nav>
      <p>
        I have used useeffect hooks basics in this project. I have also used material ui to enhance its beauty.
      </p>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <br/>
      <br/>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <br/>
      <br/>
      sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      
      <br/>
    
      <Form />
      <br/><br/>
      </div>
    </div>
  );
}

export default App;
