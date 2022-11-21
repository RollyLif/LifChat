import React, {useState, useEffect} from "react";
import axios from 'axios';
import './message.css';
import {BsSearch} from 'react-icons/bs';
import {TbSend} from 'react-icons/tb'
import Dialogue from './Dialogue'
import MessageOut from "./MessageOut";
import MessageIn from "./MessageIn";

function Message(){

const [name, setName] = useState('');
const [contact, setContact] = useState([]);
const [msg, setMsg]= useState([]);
const [temp, setTemp]= useState('');
const id = localStorage.getItem("Id")

useEffect(() => {
  async function fetchData() {
    const req = await axios.get('http://localhost:2015/private/messages/'+id);
    setMsg(req.data)
  }
    fetchData()
}, []);


  return (
    <div>
      <section className="bg-primary">
      <div className="text-white d-flex justify-content-between mx-2">
        <div className="d-flex align-items-center">
          <img src='../images/small_logo.png' className="bg-white mt-2 mx-2" alt="logo" style={{ 'width' : '30px', 'height':'30px'}} />
          <span><em><strong>LifChat</strong></em></span>
        </div>
        <div>
          <span className="font-weight-bolder mx-3"><strong>Rolly Lifungula</strong></span>
          <button type="button" className="btn btn-outline-light my-2">Deconnexion</button>
        </div>
      </div>
      
        <div className="container py-2">
          <div className="row">
            <div className="col-md-12">
              <div
                className="card"
                id="chat3"
                style={{ 'borderRadius': '15px'}}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                      <div className="p-3">
                        <div className="input-group rounded mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                          />
                          <span
                            className="input-group-text border-1"
                            id="search-addon"
                          >
                            <BsSearch/>
                          </span>
                        </div>

                        <div
                          style={{ 'position': 'relative', 'height': '400px' }}
                          className="overflow-auto"
                        >
                          <ul className="list-unstyled mb-0">
                            <Dialogue/>
                            
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-7 col-xl-8">
                      <div
                        className="pt-3 pe-3 overflow-auto"
                        style={{ 'position': 'relative', 'height': '400px' }}
                      >
                      {msg.map((message) => (
                          message.idSender == id ? (<MessageOut 
                            text={message.textMessage} 
                            temps={message.temps.substring(11,16)+" | "+message.temps.substring(0,10)}
                          />) : (<MessageIn
                            text={message.textMessage} 
                            temps={message.temps.substring(11,16)+" | "+message.temps.substring(0,10)}
                          />)
                        
                      ))}

                      </div>

                      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2 input-group-prepend">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 3"
                          style={{ 'width': '40px', 'height': '100%' }}
                        />
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleFormControlInput2"
                          placeholder="Type message"
                        />
                        <a className="ms-1 text-muted" href="#!">
                          <i className="fas fa-paperclip"></i>
                        </a>
                        <a className="ms-3 text-muted" href="#!">
                          <i className="fas fa-smile"></i>
                        </a>
                        <button className="ms-3" href="#!">
                          <TbSend/>
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
};

export default Message;
