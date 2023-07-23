const StudentMenu = () => {
    return (
        <ul className="menu rounded-box w-full uppercase text-2xl [&>*:nth-child(n)]:border-b">
            <li>
                <a>

                    Dashboard
                </a>
            </li>
            <li>
                <a>
                    My Classes
                </a>
            </li>
            <li>
                <a>
                    Item 3
                </a>
            </li>
        </ul>
    );
};

export default StudentMenu;