import { Link } from 'react-router-dom';
import logoPng from '../../assets/imgs/logo.png'

const Logo = () => {
    return (
        <Link to="/">
            <img src={logoPng} alt="logo" width="200" />
        </Link>
    );
};

export default Logo;