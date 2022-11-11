import React from 'react';
import {useNavigate} from "react-router-dom"

function home() {

  const navigate = useNavigate();
  
  return (
    <div className="App">
      <div className='row'>
        <div className='col vw-50 my-auto'>
          <img src="../images/logo.png" alt="logo"/>
        </div>

        <div className='col vw-50 my-auto'>
          <div className='card shadow' style={{width:'25rem'}}>
            <p className='text-danger'>Paire Identifiant/Mot de passe incorrect</p>
            <input type="text" placeholder="Email ou nom d'utilisateur" className="form-control"/>
            <input type="password" placeholder="Mot de passe" className="form-control mt-2"/>
            <button className="btn btn-primary mt-3" onClick={()=>navigate("/Chat")}>Se connecter</button>
            <div className='card-footer mt-3' style={{background :'white'}}>
             <button className="btn btn-info" onClick={()=>navigate("/Register")}>Créer un nouveau compte</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home