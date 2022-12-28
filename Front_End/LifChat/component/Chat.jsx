import React from "react";
import { RxAvatar } from "react-icons/rx";
import { TbSend } from "react-icons/tb";

const bcg =
  "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";
const Chat = () => {
  return (
    <div style={{ flex: "0.65" }}>
      <div className="d-flex flex-column bg-primary border border-white">
        <div className="d-flex align-items-center">
          <RxAvatar className="m-1" style={{ fontSize: "30px" }} />
          <h3>Nom</h3>
        </div>
      </div>
      <div
        className="p-3 border border-white overflow-scroll"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundImage:
            "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
        }}
      >
        <p
          className="d-flex justify-content-start rounded-1 mb-3 bg-white"
          style={{ width: "fit-content", maxWidth: "75%" }}
        >
          <div className="small fst-italic position-relative d-flex flex-column align-items-start">
            <span
              className="position-absolute fw-bold fst-normal text-primary fs-6"
              style={{ top: "-20px" }}
            >
              {" "}
              Rolly
            </span>
            this a message
            <span className="text-info fst-normal" style={{ fontSize: "8px" }}>
              {new Date().toUTCString()}
            </span>
          </div>
        </p>
        <p
          className="d-flex justify-content-start rounded-1 bg-white mb-3 ms-auto"
          style={{ width: "fit-content", maxWidth: "75%" }}
        >
          <div className="small fst-italic position-relative d-flex flex-column align-items-start">
            <span
              className="position-absolute fw-bold fst-normal text-primary fs-6"
              style={{ top: "-20px" }}
            >
              {" "}
              Rolly
            </span>
            this a message
            <span className="text-info fst-normal" style={{ fontSize: "8px" }}>
              {new Date().toUTCString()}
            </span>
          </div>
        </p>
      </div>
      <div className="d-flex justify-content-center bg-info">
        <form className="d-flex align-items-center">
          <input className="p-1 rounded-4 border-0 m-2" type="text" placeholder="entrer le message" />
            <TbSend className="p-1 fs-3" style={{color :'gray', 'outlineWidth':'0'}}/>
        </form>
      </div>
    </div>
  );
};

export default Chat;
