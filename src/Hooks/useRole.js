import axios from "axios";
import { toast } from "react-hot-toast";

export const setRole = async (user, address) => {
    try {
        const uri = `${import.meta.env.VITE_SERVERLINK}/user-role?email=${user?.email}`
        const setData = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
            address,
            role: "student",
        }

        axios.put(uri, setData, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => {
            toast.success("user has been added on DB")
        })
    } catch (error) {
        console.log(error);
    }

}


export const getRole = async (user) => {
    const uri = `${import.meta.env.VITE_SERVERLINK}/users/${user?.email}`;
    return new Promise((resolve, reject) => {
        axios.get(uri)
            .then(res => resolve(res.data))
            .catch((err) => reject(err.message))
    })
}