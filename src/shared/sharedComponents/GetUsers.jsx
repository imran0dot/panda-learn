import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "../../Hooks/useAuth";

const GetUsers = () => {
    const { user } = useAuth();
    const { isLoading, data, refetch } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {      
          try {
            const response = await axios(`/users`);
                  return response.data;
          } catch (error) {
            console.error('Error:', error);
            throw error;
          }
        }
      });

    return { isLoading, data, refetch }
};

export default GetUsers;

