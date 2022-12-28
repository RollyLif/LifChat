import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validName, validPWD } from "../models/Regex.js";
import Message from "./message.jsx";

function home() {
  const log = localStorage.getItem("log");
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [motPasse, setMotPasse] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const newAccount = () => {
    navigate("/Register");
  };

  const discuss = () => {
    navigate("/Message");
  }

  const connect = () => {
    if (validName.test(nom)) {
      setNameErr(true);
    }

    if (validPWD.test(motPasse)) {
      setPasswordErr(true);
    }

    if (nameErr && passwordErr) {
      axios
        .post("https://lifchat-5puo.onrender.com/person/login", {
          username: nom,
          password: motPasse,
        })
        .then((reponse) => {
          localStorage.setItem("token", reponse.data.token);
          localStorage.setItem("Id", reponse.data.personId);
          localStorage.setItem("log", "true");
          discuss;
        })
        .catch((error) => {
          showToastMessage;
        });
    } else {
      console.log("Remplissez l'identifiant et le mot de passe");
    }
  };

  return (
    <div className="App">
      {
      log == "true" ? (
        <Message/>
      ) : (
        <div className="row">
          <div className="col vw-50 my-auto">
            <img src="../images/logo.png" alt="logo" />
          </div>

          <div className="col vw-50 my-auto">
            <div className="card shadow" style={{ width: "25rem" }}>
              <input
                type="text"
                placeholder="Email ou nom d'utilisateur"
                className="form-control"
                onChange={(e) => setNom(e.target.value)}
              />
              <input
                type="password"
                placeholder="Mot de passe"
                className="form-control mt-2"
                onChange={(e) => setMotPasse(e.target.value)}
              />
              <button className="btn btn-primary mt-3" onClick={connect}>Se connecter</button>
              <div className="card-footer mt-3" style={{ background: "white" }}>
                <button className="btn btn-info" onClick={newAccount}>
                  Créer un nouveau compte
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default home;
