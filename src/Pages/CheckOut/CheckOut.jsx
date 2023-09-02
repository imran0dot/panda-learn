import CheckOutForm from "../../Components/Forms/CheckOutForm";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const CheckOut = () => {
    //get user data
    const { user } = useAuth();
    const cartData = useCart();

    return (
            <div className="p-10 border">
                <CheckOutForm cartData={cartData} user={user} />
            </div>
    );
};

export default CheckOut;