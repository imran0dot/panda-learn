import StudentMenu from "./StudentMenu";
import useAuth from "../../Hooks/useAuth";
import LogoutBtn from "../../shared/sharedComponents/LogoutBtn";
import AdminMenu from "./AdminMenu";
import InstractorMenu from "./InstractorMenu";
import Logo from "../../shared/sharedComponents/Logo";

const Sidebar = () => {
    const { user, userRole } = useAuth();
    return (
        <div className="fixed top-0 bottom-0 w-[400px] bg-[#F0F9F5]">
            <div className="flex flex-col justify-center items-center overflow-hidden my-5">
                <Logo />
                {/* <img src={user.photoURL} className="w-36 h-36 rounded-full object-cover" alt="" />
                <h4 className="capitalize text-left text-3xl py-2">{user.displayName} ({userRole})</h4> */}
            </div>

            <div>
                {userRole === "Admin" && <AdminMenu />}
                {userRole === "Instractor" && <InstractorMenu />}
                {userRole === "Student" && <StudentMenu />}
            </div>

            <div className="absolute bottom-0 left-0 w-full">
                <ul
                    className="menu m-3 rounded-md cursor-pointer bg-[#00988A] text-2xl text-center text-white p-0">
                    <LogoutBtn>Log Out</LogoutBtn>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;