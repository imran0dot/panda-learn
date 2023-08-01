import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../shared/sharedComponents/Loading";
import { toast } from "react-hot-toast";

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [loding, setLoading] = useState(true);
    useEffect(() => {
        axios("/payment-history")
        .then(res => {
            setPaymentHistory(res.data)
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            toast.error(err.message);
        });
    }, [])
    return (
        loding ? <Loading /> : <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Transaction ID</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {paymentHistory.map((payment, index) => {
                            return (
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.name}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;