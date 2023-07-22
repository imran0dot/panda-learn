import { useState } from 'react';
import Login from '../../Components/Forms/Login';
import Registration from '../../Components/Forms/Registration';

const User = () => {
    const [passwordType, setPasswordType] = useState(false);
    return (
        <div>
            <Login passwordType={passwordType} setPasswordType={setPasswordType}/>
            
            <Registration passwordType={passwordType} setPasswordType={setPasswordType}/>
        </div>
    );
};

export default User;