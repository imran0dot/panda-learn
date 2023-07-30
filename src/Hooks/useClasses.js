import axios from "axios";

const useClasses = async () => {
    try{
           return new Promise ((resolve, reject) => {
            axios("/all-course").then(res => resolve(res.data))
           })
           
    }
    catch(err){
        console.log(err)
    }
    
}

export default useClasses;
