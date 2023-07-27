import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "../../Hooks/useAuth";

const GetUsers = () => {
    const { user } = useAuth();
    const { isLoading, data, refetch } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
          const token = localStorage.getItem("verify_token");
      
          try {
            const response = await axios(`/users`, {
              headers: {
                'Authorization': `Bearer ${token}`
              },
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

