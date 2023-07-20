import { Link } from 'react-router-dom';
import AciveLink from './AciveLink';

const Menu = () => {
    const menuItems = [
        { "Home": "/" },
        { "Service": "/service" },
        { "We Are": "/team" },
        { "who we are": "/about us" },
    ]

    return (
            <nav className='flex gap-4'>
                {menuItems.map((x, i) => {
                    console.log(Object.keys(x).toString())
                    return (
                        <AciveLink key={i} to={Object.values(x).toString()}>
                            {Object.keys(x).toString()}
                        </AciveLink>
                    )
                })}
            </nav>
    );
};

export default Menu;