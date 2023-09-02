import SubmitBtn from "../../shared/sharedComponents/SubmitBtn";

const CheckoutSidebar = () => {
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
                        {/* row 1 */}
                        <tr>
                            <td>Item Name</td>
                            <td>Price</td>
                        </tr>
                        <tr>
                            <td>Item Name</td>
                            <td>Price</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="p-3 mt-5">
                <p>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
            </div>
            <div className="flex items-center justify-center [&>*:nth-child(n)]:w-full mt-10">
                <SubmitBtn>Place Order</SubmitBtn>
            </div>
        </div>
    );
};

export default CheckoutSidebar;