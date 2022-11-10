function Register() {

return (
  <div className="App">
    <div className='row'>
      <div className='col vw-50 my-auto'>
        <img src="../images/logo.png" alt="logo"/>
      </div>

      <div className='col vw-50 my-auto'>
        <div className='card shadow' style={{width:'25rem'}}>
          <input type="text" placeholder="Nom d'utilisateur" className="form-control mt-2"/>
          <input type="email" placeholder="Email" className="form-control mt-2"/>
          <input type="password" placeholder="Mot de passe" className="form-control mt-2"/>
          <input type="password" placeholder="Confirmez le mot de passe" className="form-control mt-2"/>
          <div className='card-footer mt-3' style={{background :'white'}}>
           <button className="btn btn-info">S'enregistrer</button>
          </div>
          <p>Retour à la <a href="./">page de connexion</a></p>
        </div>
      </div>
    </div>
  </div>
)
}

export default Register