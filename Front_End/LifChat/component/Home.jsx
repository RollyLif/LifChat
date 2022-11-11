import axios from 'axios';
import React,{ useState }  from 'react';
// import {useNavigate} from "react-router-dom"

function home() {

  // const navigate = useNavigate();
  const [nom,setNom] = useState('');
  const [motPasse, setMotPasse] = useState('');

  const connect = () => {
    axios.post('http://localhost:2015/person/login',{
      username : nom,
      password : motPasse
    })
    .then(()=>{
      console.log("connected successfully");
    })
    .catch((error)=>console.log(error))
    
  }

  
  return (
    <div className="App">
      <div className='row'>
        <div className='col vw-50 my-auto'>
          <img src="../images/logo.png" alt="logo"/>
        </div>

        <div className='col vw-50 my-auto'>
          <div className='card shadow' style={{width:'25rem'}}>
            <p className='text-danger'>Paire Identifiant/Mot de passe incorrect</p>
            <input type="text" placeholder="Email ou nom d'utilisateur" className="form-control" value={nom}
            onChange={(e) => setNom(e.target.value)}/>
            <input type="password" placeholder="Mot de passe" className="form-control mt-2" value={motPasse}
            onChange={(e) => setMotPasse(e.target.value)}/>
            <button className="btn btn-primary mt-3" onClick={connect}>Se connecter</button>
            <div className='card-footer mt-3' style={{background :'white'}}>
             <button className="btn btn-info">Créer un nouveau compte</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home