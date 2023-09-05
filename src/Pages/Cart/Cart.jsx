import Fixedwidth from "../../Layouts/Fixedwidth";
import Button from "../../shared/sharedComponents/Button";
import useCart from "../../Hooks/useCart";
import {MdDeleteForever} from "react-icons/md"
import { handleDelete } from "../../Hooks/useFackDb";
import { useState } from "react";
import { useEffect } from "react";
const Cart = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const cart = useCart()
    useEffect(() => {
        cart.then(res => {
            setData(res.getData);
            setTotalPrice(res.totalPrice)
        })
    }, [loading]);

    const handleDeleteBtn = async (id) => {
        setLoading(true);
        handleDelete(id).then(res => {
            if(res){
                setLoading(false)
        }
        });
    }
    return (
        <div>
            <Fixedwidth>
                <div className="border bg-[#F9F9F9] p-5">
                    {
                        loading ? "Loading..." : <>
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data?.map((item, index) =>
                                            <tr key={item._id}>
                                                <td>{index + 1}</td>
                                                <th>{item.name}</th>
                                                <td>{item.category}</td>
                                                <td>$ {item.sellPrice}</td>
                                                <td className="btn btn-sm bg-red-600 pb-7 text-white"
                                                    onClick={() => handleDeleteBtn(item._id)}
                                                ><MdDeleteForever/></td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                            <div className="text-4xl text-left font-bold flex justify-between mt-10">
                                <h3>Total Price</h3>
                                <h3>$ {totalPrice}</h3>
                            </div>

                            <div className="flex justify-end w-full mt-10">
                                <Button to="/check-out">Payment Now</Button>
                            </div>
                        </>
                    }
                </div>
            </Fixedwidth>
        </div>
    );
};

export default Cart;