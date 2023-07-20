import { Children } from "react";
import { NavLink } from "react-router-dom";

const AciveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : "" }>
            {children}
        </NavLink>
    );
};

export default AciveLink;