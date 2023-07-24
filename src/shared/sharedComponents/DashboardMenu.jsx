import { Link } from "react-router-dom";

const DashboardMenu = ({ children }) => {
    return (
        <div>
            <ul className="menu rounded-box w-full capitalize font-thin text-2xl [&>*:nth-child(n)]:border-b">
                {
                    children.map((items, index) => {
                        return (
                            <li key={index}  >
                                <Link to={items.url} >{items.name}</Link>
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    );
};

export default DashboardMenu;