import { useState } from "react";
import { getDataFromStore, useFackDb, handleDelete,existItem } from "../../Hooks/useFackDb";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const AddToCartBtn = ({ data, children }) => {
    const [cartbtn, setCartbtn] = useState(true);
    const getExistItem = existItem(data._id);


    useEffect(() => {
        if (getExistItem) {
            setCartbtn(false);
        }
    }, [])

    const handleAddToCart = (id) => {
        if (!getExistItem) {
            useFackDb(id);
            setCartbtn(false);
        } else {
            return
        }
    }


    const handleRemoveCart = (id) => {
        handleDelete(id);
        setCartbtn(true);
    }

    return (
        <div>
            {
                cartbtn ? <button
                    onClick={() => handleAddToCart(data._id)}
                    className='btn bg-[#00988A] hover:bg-[#2E836F] text-white duration-300'>
                    {children}
                </button> : <button
                    onClick={() => handleRemoveCart(data._id)}
                    className='btn bg-[#00988A] hover:bg-[#2E836F] text-white duration-300'>
                    Remove From Cart
                </button>
            }


        </div>
    );
};

export default AddToCartBtn;