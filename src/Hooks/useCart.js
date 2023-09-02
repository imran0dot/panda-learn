import axios from 'axios';
import { getDataFromStore } from './useFackDb';
import { useState } from 'react';
import { useEffect } from 'react';


const useCart = () => {
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const cartItems = getDataFromStore();
    useEffect(() => {
        axios('/cart-items', { params: { items: cartItems } })
            .then(req => {
                const getData = req.data;
                const totalPrice = getData.reduce((prevPrice, singleData) => prevPrice + +singleData.sellPrice, 0)

                setData(getData)
                setTotalPrice(totalPrice)
            }).catch(err => console.log(err))
    }, [])

    return { data, totalPrice };
};



export default useCart;