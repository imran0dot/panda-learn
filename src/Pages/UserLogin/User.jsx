import { useState } from 'react';
import Login from '../../Components/Forms/Login';
import Registration from '../../Components/Forms/Registration';
import Fixedwidth from '../../Layouts/Fixedwidth';
import Title from '../../shared/sharedComponents/Title';
import image from '../../assets/imgs/Image1.png'

const User = () => {
    const [formControl, setFormControl] = useState(true);
    const [passwordType, setPasswordType] = useState(false);
    return (
        <div className='py-20'>
            <Fixedwidth>
                <div className='shadow-2xl p-10 w-10/12 mx-auto'>
                    <Title title="Welcome" subTitle="Enter your details and join with us" align="center" />
                    <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                            {
                                formControl ? <Login
                                    setFormControl={setFormControl}
                                    passwordType={passwordType}
                                    setPasswordType={setPasswordType} />
                                    :
                                    <Registration
                                        setFormControl={setFormControl}
                                        passwordType={passwordType}
                                        setPasswordType={setPasswordType} />
                            }
                        <div className='hidden md:flex justify-center p-3 items-center'>
                            <img width="70%" src={image} alt="" />
                        </div>
                    </div>
                </div>
            </Fixedwidth>
        </div>
    );
};

export default User;