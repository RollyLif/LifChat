import React from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';

const Discussion = () => {
    return (
        <div >
            <div className="d-flex shadow rounded w-75 p-3 m-auto">
                <Sidebar/>
                <Chat />
            </div>
        </div>
    );
}

export default Discussion;
