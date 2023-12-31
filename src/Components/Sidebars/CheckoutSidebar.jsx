import SubmitBtn from "../../shared/sharedComponents/SubmitBtn";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePayment from "../Forms/StripePayment";
import { useState } from "react";
import { useEffect } from "react";


const PUBLIC_KEY = "pk_test_51NZWNUA7FZKxjKWi3jGwfEKCf9c43E2NEFByf8CHeLMsCuDYrjKs2GAcStU6JZeFiFFoUEzv7W6sWWpdtT8eCmwE00Fx9aKmj0";
const stripePromise = loadStripe(PUBLIC_KEY);


const CheckoutSidebar = ({ cartData }) => {
    const [data, setData] = useState({});
    useEffect(() => {
        cartData.then(res => setData(res))
    },  [])
    return (
        <div className="border bg-[#F9F9F9] p-4">
            <h3 className="text-3xl font-bold mb-4">Payment Details</h3>
            <div>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data?.getData?.map((item) => {
                            return (
                                <tr key={item._id}>
                                    <td>{item?.name}</td>
                                    <td>{item?.sellPrice}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>

                <div className="text-2xl font-bold flex justify-between mt-7">
                    <span>Subtotal</span>
                    <span>{data?.totalPrice}</span>
                </div>

                <div>
                    <Elements stripe={stripePromise}>
                        <StripePayment data={data} />
                    </Elements>
                </div>


            </div>
        </div>
    );
};

export default CheckoutSidebar;