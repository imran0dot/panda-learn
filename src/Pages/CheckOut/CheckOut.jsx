import CheckOutForm from "../../Components/Forms/CheckOutForm";
import useAuth from "../../Hooks/useAuth";

const CheckOut = () => {
    //get user data
    const { user } = useAuth();

    return (
            <div className="p-10 border">
                <CheckOutForm user={user} />
            </div>
    );
};

export default CheckOut;