import axios from "axios";
import { toast } from "react-hot-toast";

export const setRole = async (user, address) => {
    try {
        const setData = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
            address,
            role: "student",
        }

        axios.put(`/user-role?email=${user?.email}`, setData, {
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
    return new Promise((resolve, reject) => {
        axios.get(`/users/${user?.email}`)
            .then(res => resolve(res.data.role))
            .catch((err) => reject(err.message))
    })
}