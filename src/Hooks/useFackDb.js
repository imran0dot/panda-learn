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
        return true
    } else {
        return false
    }
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




export { useFackDb, existItem, getDataFromStore }
