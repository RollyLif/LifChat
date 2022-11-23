import React, { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import Dialogue from "./Dialogue";
import MessageOut from "./MessageOut";
import MessageIn from "./MessageIn";

function Message() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contact, setContact] = useState([]);
  const [friend, setFriend] = useState("");
  const [msg, setMsg] = useState([]);
  const [temp, setTemp] = useState("");
  const [text, setText] = useState("");
  const id = localStorage.getItem("Id");

  useEffect(() => {
    async function getConnected() {
      const req = await axios.get("http://localhost:2015/person/" + id);
      setName(req.data.name);
    }

    async function getFriend() {
      const req = await axios.get(
        "http://localhost:2015/private/message/conversation/" + id
      );
      setContact(req.data);
    }
    getConnected();
    getFriend();
  }, []);

  async function fetchData(friend) {
    const req = await axios.post(
      "http://localhost:2015/private/messages/" + id,
      { friend: friend }
    );
    setFriend(friend);
    setMsg(req.data);
  }

  const envoie = async function sendMessage(){
    console.log(id+" "+friend+" "+text);
    if(text !== ""){
      
    const req = await axios.post(
    "http://localhost:2015/private/message/",
      { idSender : id,
        idReceiver : friend,
        textMessage : text}
    );
  }
  }

  const deconnexion = () => {
    localStorage.removeItem('log');
    navigate("/")
  }

  return (
    <div>
      <section className="bg-primary">
        <div className="text-white d-flex justify-content-between mx-2">
          <div className="d-flex align-items-center">
            <img
              src="../images/small_logo.png"
              className="bg-white mt-2 mx-2"
              alt="logo"
              style={{ width: "30px", height: "30px" }}
            />
            <span>
              <em>
                <strong>LifChat</strong>
              </em>
            </span>
          </div>
          <div>
            <span className="font-weight-bolder mx-3">
              <strong>{name}</strong>
            </span>
            <button type="button" className="btn btn-outline-light my-2" onClick={deconnexion}>
              Deconnexion
            </button>
          </div>
        </div>

        <div className="container py-2">
          <div className="row">
            <div className="col-md-12">
              <div className="card" id="chat3" style={{ borderRadius: "15px" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                      <div className="p-3 shadow">
                        <div className="input-group rounded mb-3 bg-info">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recherche"
                            aria-label="Search"
                            aria-describedby="search-addon"
                          />
                          <span
                            className="input-group-text border-1"
                            id="search-addon"
                          >
                            <BsSearch />
                          </span>
                        </div>

                        <div
                          style={{ position: "relative", height: "400px" }}
                          className="overflow-auto"
                        >
                          <ul className="list-unstyled mb-0">
                            {contact.map((elt) => {
                              const nom =
                                elt.idSender._id === id
                                  ? elt.idReceiver.name
                                  : elt.idSender.name;

                              const idFriend =
                                elt.idSender._id === id
                                  ? elt.idReceiver._id
                                  : elt.idSender._id;

                              return (
                                <div
                                  key={elt._id}
                                  onClick={() => fetchData(idFriend)}
                                >
                                  <Dialogue
                                    name={nom}
                                    message={elt.textMessage}
                                  />
                                </div>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-7 col-xl-8">
                      <div
                        className="pt-3 pe-3 overflow-auto"
                        style={{ position: "relative", height: "400px" }}
                      >
                        {msg.map((message) =>
                        
                          message.idSender == id ? (
                            <MessageOut key ={message._id}
                              text={message.textMessage}
                              temps={
                                message.temps.substring(11, 16) +
                                " | " +
                                message.temps.substring(0, 10)
                              }
                            />
                          ) : (
                            <MessageIn key ={message._id}
                              text={message.textMessage}
                              temps={
                                message.temps.substring(11, 16) +
                                " | " +
                                message.temps.substring(0, 10)
                              }
                            />
                          )
                        )}
                      </div>

                      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2 input-group-prepend">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 3"
                          style={{ width: "40px", height: "100%" }}
                        />
                        <input
                          type="text"
                          className="form-control form-control-lg shadow"
                          id="exampleFormControlInput2"
                          placeholder="Taper votre message"
                          onChange={(e) => setText(e.target.value)}
                        />
                        <a className="ms-1 text-muted" href="#!">
                          <i className="fas fa-paperclip"></i>
                        </a>
                        <a className="ms-3 text-muted" href="#!">
                          <i className="fas fa-smile"></i>
                        </a>
                        <button className="ms-3" onClick={envoie}>
                          <TbSend />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Message;
