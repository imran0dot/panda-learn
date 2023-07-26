import { useForm } from "react-hook-form"
import SubmitBtn from "../../shared/sharedComponents/SubmitBtn";
import { useState } from "react";
import GetUsers from "../../shared/sharedComponents/GetUsers";
import { useEffect } from "react";

const AddCourseForm = () => {
    const [loading, setLoding] = useState(false);
    const { isLoading, data, refetch } = GetUsers();
    const instructors = data?.filter(data => data?.role == "admin");


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setLoding(!loading)
        console.log(data);
    }

    return (
        <div className="bg-[#F0F9F5] w-8/12 p-10 mx-auto h-fit">
            <form
                className="flex flex-col justify-start items-center gap-3"
                onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input input-bordered w-full"
                    defaultValue="English Language" {...register("name")} />

                <input
                    className="input input-bordered w-full"
                    defaultValue="category" {...register("category")} />

                <select
                    className="input input-bordered w-full"
                    {...register("instructors")} >
                        
                    {
                        instructors?.map(instructor => {
                            return (
                                <option
                                key={instructor._id}
                                value={instructor.name}>{instructor.name}</option>
                            )
                        })
                    }
                </select>

                <input
                    className="input input-bordered w-full"
                    defaultValue="price" {...register("price")} />

                <input
                    className="input input-bordered w-full"
                    defaultValue="sell Price" {...register("sellPrice")} />

                <textarea
                className="textarea textarea-bordered textarea-lg w-full"
                defaultValue="Discribe about your classes"
                {...register("discreption")} ></textarea>


                <SubmitBtn loading={loading}>Add Now</SubmitBtn>
            </form>
        </div>
    );
};

export default AddCourseForm;