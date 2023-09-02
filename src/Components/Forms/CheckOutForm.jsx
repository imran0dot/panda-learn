import { useForm } from "react-hook-form";
import SubmitBtn from "../../shared/sharedComponents/SubmitBtn";
import CheckoutSidebar from "../Sidebars/CheckoutSidebar";

const CheckOutForm = ({cartData, user }) => {
    //get cartData
    
    //reat hook from handle
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form
                className="flex flex-col md:flex-row gap-5 "
                onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full bg-[#F9F9F9] border p-3">
                    <h3 className="text-3xl font-bold mb-4">Building Details</h3>
                    <div
                        className="flex flex-col gap-6 
                    [&>*:nth-child(n)]:border-b-4 [&>*:nth-child(n)]:border-[#2E836F] [&>*:nth-child(n)]:w-full [&>*:nth-child(n)]:p-2 [&>*:nth-child(n)]:rounded-lg">
                        <input
                            defaultValue={user && user.displayName}
                            {...register("name")} />

                        <input
                            defaultValue={user && user.email}
                            {...register("email")} />



                        <input
                            defaultValue="Balla Bazar Kalihati tangail"
                            {...register("Address")} />
                    </div>
                </div>

                <div>
                    <CheckoutSidebar cartData={cartData} />
                </div>


            </form>
        </div>
    );
};

export default CheckOutForm;