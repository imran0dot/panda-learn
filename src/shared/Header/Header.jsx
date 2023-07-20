import { useState } from 'react';
import Logo from '../../Components/Logo';
import MenuSwap from '../../Components/MenuSwap';
import Fixedwidth from '../../Layouts/Fixedwidth';
const Header = () => {
    return (
        <div className='shadow-sm w-full p-2 h-16 flex flex-col justify-center items-center'>
            <Fixedwidth>
                <div className='flex justify-between items-center'>
                    <Logo />
                    <MenuSwap />
                </div>
            </Fixedwidth>
        </div>
    );
};

export default Header;