import React from "react";
import { RxAvatar } from "react-icons/rx";

const bcg="https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"
const Chat = () => {
  return (
    <div style={{ flex: "0.65" }}>
      <div
        className="d-flex flex-column bg-primary border border-white"
        
      >
        <div className="d-flex align-items-center">
          <RxAvatar
            className="m-1"
            style={{ "fontSize": "30px" }}
          />
          <h3>Nom</h3>
        </div>
      </div>
      <div className="p-3 h-100 border border-white" style={{'backgroundSize':'cover', 'backgroundRepeat':'repeat', 'backgroundImage':"url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')"}}>

      </div>
    </div>
  );
};

export default Chat;
