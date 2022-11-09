function home() {

  return (
    <div className="App">
      <div className='row'>
        <div className='col vw-50 my-auto'>
          <img src="../images/logo.png" alt="logo"/>
        </div>

        <div className='col vw-50 my-auto'>
          <div className='card shadow' style={{width:'25rem'}}>
            <input type="text" placeholder="Email ou nom d'utilisateur" className="form-control"/>
            <input type="password" placeholder="Mot de passe" className="form-control mt-2"/>
            <button className="btn btn-primary mt-3">Se connecter</button>
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