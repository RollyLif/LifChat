import React,{ useState }  from 'react';
import {validEmail, validName,validPWD} from '../models/Regex.js'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [pwd, setPwd] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const validate = () => {
    if (validName.test(name)){
      console.log('nom valid');
    }
    if (validEmail.test(email)) {
       setEmailErr(true);
       console.log('email avec succès');
    }
    if(validPWD.test(mdp)){
      if(mdp === pwd){
        setPasswordErr(true);
        console.log('Mot de passe avec succès');
      }
    }else{
      console.log('Mot de passe trop court');
    }
    

    if(emailErr && passwordErr){
      console.log('avec succès');
    }
 };

return (
  <div className="App">
    <div className='row'>
      <div className='col vw-50 my-auto'>
        <img src="../images/logo.png" alt="logo"/>
      </div>

      <div className='col vw-50 my-auto'>
        <div className='card shadow' style={{width:'25rem'}}>
          <input type="text" placeholder="Nom d'utilisateur" className="form-control mt-2" value={name}
            onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder="Email" className="form-control mt-2" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Mot de passe" className="form-control mt-2" value={mdp}
            onChange={(e) => setMdp(e.target.value)}/>
          <input type="password" placeholder="Confirmez le mot de passe" className="form-control mt-2" value={pwd}
            onChange={(e) => setPwd(e.target.value)}/>
          <div className='card-footer mt-3' style={{background :'white'}}>
           <button className="btn btn-info" onClick={validate}>S'enregistrer</button>
          </div>
          <p>Retour à la <a href="./">page de connexion</a></p>
        </div>
      </div>
    </div>
  </div>
)
}

export default Register