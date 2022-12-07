import React from 'react';
import {RxAvatar} from 'react-icons/rx'

const Siderbarchat = () => {
    return (
        <div className='d-flex text-black align-items-center border border-info' style={{padding :"5px"}}>
            <RxAvatar className='m-1 align-self-center' style={{'font-size' :"30px"}}/>
            <div className='d-flex flex-column'>
                <h2 className='m-0 text-info' style={{'font-size' :"16px"}}>Nom</h2>
                <p className='m-0' style={{'font-size' :"10px"}}>Last message...</p>
            </div>
        </div>
        
    );
}

export default Siderbarchat;
