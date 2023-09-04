import { toast } from "react-hot-toast";

// get previous data 
const getDataFromStore = () => {
    let items = [];
    const prevItems = localStorage.getItem("cartItems");
    if (prevItems) {
        items = JSON.parse(prevItems)
    }
    return items;
}

//get exist item
const existItem = (id) => {
    let storedItems = getDataFromStore();
    const existItems = storedItems.find(singleItems => singleItems === id);
    if (existItems) {
        return existItems
    } return
}

// insert data 
const useFackDb = (id) => {
    let storedItems = getDataFromStore();
    const existItems = storedItems.find(singleItems => singleItems === id);
    if (!existItems) {
        storedItems.push(id);
        toast.success("Items added to the cart")
    } else {
        toast.error("Items already in a cart")
    }
    existItem(id);
    localStorage.setItem("cartItems", JSON.stringify(storedItems))
}

const handleDelete = async (id) => {
    let storedItems = getDataFromStore();
    let newArray = [];

    try {
        return new Promise ((resolve, reject) => {
            const getItem = storedItems.find(item => item === id);
            if(getItem){
                for(const id of storedItems){
                    if(id !== getItem){
                        newArray.push(id);
                    }
                }
                localStorage.setItem("cartItems", JSON.stringify(newArray));
                toast("Removed From the cart");
                resolve(true);
            }
        })

    } catch(err) {
        toast.error("somthing went wrong")
    }

}




export { useFackDb, existItem, getDataFromStore, handleDelete }
