import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-hot-toast';

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
                toast.success("logout done, please login to get all functions")
            }
            else{
                toast.error("You clicked on the cancel btn")
            }
        })
    }
    return (
        <div
        className='w-full h-fit p-3'
        onClick={() => handleLogOut()}>
            {children}
        </div>
    );
};

export default LogoutBtn;