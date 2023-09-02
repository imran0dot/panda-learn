import Fixedwidth from "../../Layouts/Fixedwidth";
import Button from "../../shared/sharedComponents/Button";

import useCart from "../../Hooks/useCart";
const Cart = () => {
    const { data, totalPrice } = useCart();

    return (
        <div>
            <Fixedwidth>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
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
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className="text-4xl text-left font-bold">
                        <h3>Total Price</h3>
                        <h3>{totalPrice}</h3>
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <Button to="/check-out">Payment Now</Button>
                </div>
            </Fixedwidth>
        </div>
    );
};

export default Cart;