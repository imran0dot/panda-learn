import Logo from '../../Components/Logo';
import Fixedwidth from '../../Layouts/Fixedwidth';
import Menu from './HeaderComponents/menu';
const Header = () => {
    return (
        <div className='shadow-sm w-full p-2 h-16 flex flex-col justify-center items-center'>
            <Fixedwidth>
                <div className='flex justify-between items-center'>
                    <Logo />
                    <Menu />
                </div>
            </Fixedwidth>
        </div>
    );
};

export default Header;