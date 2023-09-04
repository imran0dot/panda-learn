import axios from 'axios';
import { getDataFromStore } from './useFackDb';

const useCart = async () => {
    const cartItems = getDataFromStore();
    try {
        return new Promise((resolve, reject) => {
            axios('/cart-items', { params: { items: cartItems } })
                .then(req => {
                    const getData = req.data;
                    const totalPrice = getData.reduce((prevPrice, singleData) => prevPrice + +singleData.sellPrice, 0)
                    resolve ({getData, totalPrice})
                }).catch(err => reject(err))
        })
    }catch{
        return;
    }
};



export default useCart;