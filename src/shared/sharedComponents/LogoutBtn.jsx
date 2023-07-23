import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const LogoutBtn = ({ children }) => {
    const { logOut } = useAuth();
    const handleLogOut = () => {
        Swal.fire({
            title: 'Want you Log out?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#00988A',
            cancelButtonColor: '#34947D',
            confirmButtonText: 'Log Out'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                Swal.fire(
                    'Log Out Done!',
                    'success'
                )
            }
        })
    }
    return (
        <span onClick={() => handleLogOut()}>
            {children}
        </span>
    );
};

export default LogoutBtn;