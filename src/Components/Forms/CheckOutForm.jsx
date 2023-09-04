import CheckoutSidebar from "../Sidebars/CheckoutSidebar";

const CheckOutForm = ({ cartData, user }) => {
    return (
        <div className="w-6/12 mx-auto">
            <CheckoutSidebar cartData={cartData} />
        </div>
    );
};

export default CheckOutForm;