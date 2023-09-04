import Fixedwidth from "../../Layouts/Fixedwidth";
import Button from "../../shared/sharedComponents/Button";
import useCart from "../../Hooks/useCart";
import { handleDelete } from "../../Hooks/useFackDb";
const Cart = () => {
    const { data, totalPrice } = useCart();

    return (
        <div>
            <Fixedwidth>
                <div className="border bg-[#F9F9F9] p-5">
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
                            {/* row 1 */}
                            {
                                data?.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <th>{item.name}</th>
                                        <td>{item.category}</td>
                                        <td>$ {item.price}</td>
                                        <td className="btn btn-sm text-sm" 
                                        onClick={() => handleDelete(item._id)}
                                        >Remove</td>
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
                </div>
            </Fixedwidth>
        </div>
    );
};

export default Cart;