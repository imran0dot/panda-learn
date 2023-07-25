import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "../../Hooks/useAuth";

const GetUsers = () => {
    const {user} = useAuth();
    const { isLoading, data, refetch } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: () => {
            const userData = axios(`${import.meta.env.VITE_SERVERLINK}/users`);
            return userData;
        }
    })
    return { isLoading, data, refetch }
};

export default GetUsers;

