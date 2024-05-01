import { NavLink } from "react-router-dom";

const AciveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "capitalize text-lg font-semibold text-slate-500 border-b-4  border-[#00988A] py-4 px-3" : "capitalize text-lg font-semibold text-slate-500 py-3" } >
            {children}
        </NavLink>
    );
};

export default AciveLink;