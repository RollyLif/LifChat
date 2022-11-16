import React from "react";
import './message.css';
import {BsSearch} from 'react-icons/bs';
import {TbSend} from 'react-icons/tb'
import Dialogue from './Dialogue'
import MessageIn from "./MessageIn";
import MessageOut from "./MessageOut";

const Message = () => {
  return (
    <div>
      <section style={{ 'backgroundColor': '#CDC4F9' }}>
        <div className="container py-5">
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
                        <MessageIn/>
                        <MessageOut/>
                      </div>

                      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
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
                        <a className="ms-3" href="#!">
                          <TbSend/>
                        </a>
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
