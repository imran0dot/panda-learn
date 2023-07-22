import MenuSwap from '../../Components/MenuSwap';
import Fixedwidth from '../../Layouts/Fixedwidth';
import Logo from '../sharedComponents/Logo';
const Header = () => {
    console.log(import.meta.env.VITE_APIKEY)
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