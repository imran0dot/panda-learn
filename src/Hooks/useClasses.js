import axios from "axios";
import { toast } from "react-hot-toast";

const useClasses = async (keys) => {
    try{
           return new Promise ((resolve, reject) => {
            axios(`/all-course/${keys? `?keys=${keys}`: ""}`).then(res => resolve(res.data))
           })
           
    }
    catch(err){
       toast.error(err.message)
    }
    
}

export default useClasses;
