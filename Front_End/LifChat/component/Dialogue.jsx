import React,{useState, useEffect} from "react";

const Dialogue = (props) => {

  return (
    <li className="p-2">
      <a href="#!" className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
              alt="avatar"
              className="d-flex align-self-center me-3"
              width="30"
            />
            <span className="badge bg-success badge-dot"></span>
          </div>
          <div className="pt-1">
            <p className="fw-bold mb-0">{props.name}</p>
            <p className="small text-muted">{props.message}</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-muted mb-1">00:00</p>
        </div>
      </a>
    </li>
  );
};

export default Dialogue;
