import React from "react";

const Dialogue = () => {
  return (
    <li className="p-2">
      <a href="#!" className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
              alt="avatar"
              className="d-flex align-self-center me-3"
              width="60"
            />
            <span className="badge bg-success badge-dot"></span>
          </div>
          <div className="pt-1">
            <p className="fw-bold mb-0">Ben Smith</p>
            <p className="small text-muted">Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-muted mb-1">Yesterday</p>
        </div>
      </a>
    </li>
  );
};

export default Dialogue;
