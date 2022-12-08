import React from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';

const Discussion = () => {
    return (
        <div >
            <div className="d-flex shadow rounded p-3">
                <Sidebar/>
                <Chat />
            </div>
        </div>
    );
}

export default Discussion;
