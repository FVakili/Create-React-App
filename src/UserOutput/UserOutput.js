import React from 'react';
import UserInput from '../UserInput/UserInput';
import './UserOutput.css';

const UserOutput=(props)=> {
        return(
            <div className="pra">
                <p> UserName: {props.userName}  </p>
                <p> Second Paragraph  </p>
            </div>
        );
};

export default UserOutput;
    