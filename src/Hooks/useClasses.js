import axios from "axios";

const useClasses = async (keys) => {
    try{
           return new Promise ((resolve, reject) => {
            axios(`/all-course/${keys? `?keys=${keys}`: ""}`).then(res => resolve(res.data))
           })
           
    }
    catch(err){
        console.log(err)
    }
    
}

export default useClasses;
