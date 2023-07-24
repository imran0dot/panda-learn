import axios from "axios";
import { toast } from "react-hot-toast";

export const setRole = (user, role) => {
    const uri = `${import.meta.env.VITE_SERVERLINK}/user-role?email=${user?.email}`
    const setData = {
        name: user?.displayName,
        email: user?.email,
        role: role || "student",
    }

    axios.put(uri, setData, {
        headers: {
            "Content-Type": "application/json",
        }
    }).then(() => {
        toast.success("user has been added on DB")
    })

}


export const getRole = (user) => {
    const uri = `${import.meta.env.VITE_SERVERLINK}/users?email=${user?.email}`;

    axios.get(uri).then(res => console.log(res));
}