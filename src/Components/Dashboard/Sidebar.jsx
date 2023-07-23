import Swal from "sweetalert2";
import StudentMenu from "./StudentMenu";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
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
        <div className="fixed top-0 bottom-0 w-[400px] bg-[#00988A]">
            <div>
                <StudentMenu />
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <ul
                    onClick={() => handleLogOut(logOut)}
                    className="menu m-3 rounded-md cursor-pointer bg-[#F0F9F5] font-bold text-3xl text-center text-[#34947D] ">
                    <li>Log Out</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;