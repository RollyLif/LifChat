import React from "react";
import './message.css';
import {BsSearch} from 'react-icons/bs';
import {TbSend} from 'react-icons/tb'
import Dialogue from './Dialogue'

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
                          data-mdb-perfect-scrollbar="true"
                          style={{ 'position': 'relative', 'height': '400px' }}
                        >
                          <ul className="list-unstyled mb-0">
                            <Dialogue/>
                            
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-7 col-xl-8">
                      <div
                        className="pt-3 pe-3"
                        data-mdb-perfect-scrollbar="true"
                        style={{ 'position': 'relative', 'height': '400px' }}
                      >
                        <div className="d-flex flex-row justify-content-start">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 1"
                            style={{ 'width': '45px', 'height': '100%' }}
                          />
                          <div>
                            <p
                              className="small p-2 ms-3 mb-1 rounded-3"
                              style={{'backgroundColor': '#f5f6f7'}}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                              12:00 PM | Aug 13
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                          <div>
                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat.
                            </p>
                            <p className="small me-3 mb-3 rounded-3 text-muted">
                              12:00 PM | Aug 13
                            </p>
                          </div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar 1"
                            style={{ 'width': '45px', 'height': '100%' }}
                          />
                        </div>

                        <div className="d-flex flex-row justify-content-start">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 1"
                            style={{ 'width': '5px', 'height': '100%' }}
                          />
                          <div>
                            <p
                              className="small p-2 ms-3 mb-1 rounded-3"
                              style={{'backgroundColor': '#f5f6f7'}}
                            >
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur.
                            </p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                              12:00 PM | Aug 13
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                          <div>
                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                              Excepteur sint occaecat cupidatat non proident,
                              sunt in culpa qui officia deserunt mollit anim id
                              est laborum.
                            </p>
                            <p className="small me-3 mb-3 rounded-3 text-muted">
                              12:00 PM | Aug 13
                            </p>
                          </div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar 1"
                            style={{ 'width': '45px', 'height': '100%' }}
                          />
                        </div>

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
