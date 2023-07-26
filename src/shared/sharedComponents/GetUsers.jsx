import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "../../Hooks/useAuth";

const GetUsers = () => {
    const { user } = useAuth();

    const { isLoading, data, refetch } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
          const token = 'your_bearer_token_here';
      
          try {
            const response = await axios(`${import.meta.env.VITE_SERVERLINK}/users`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
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

