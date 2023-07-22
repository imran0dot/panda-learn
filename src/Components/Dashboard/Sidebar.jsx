import StudentMenu from "./StudentMenu";

const Sidebar = () => {
    return (
        <div className="fixed top-0 bottom-0 w-[400px] bg-[#00988A]">
            <div>
                <StudentMenu />
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <ul className="menu m-3 rounded-md cursor-pointer bg-[#F0F9F5] font-bold text-3xl text-center text-[#34947D] ">
                    <li>Log Out</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;