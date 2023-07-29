import { useForm } from "react-hook-form"
import SubmitBtn from "../../shared/sharedComponents/SubmitBtn";
import { useState } from "react";
import GetUsers from "../../shared/sharedComponents/GetUsers";
import axios from "axios";
import { useUpload } from "../../Hooks/useUpload";
import { toast } from "react-hot-toast";

const AddCourseForm = () => {
    const [loading, setLoding] = useState(false);
    const { isLoading, data, refetch } = GetUsers();
    const instructors = data?.filter(data => data?.role == "instructor");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setLoding(true);
        const thumbnailImage = data.image[0];

        useUpload(thumbnailImage).then(url => {
            const courseData = {
                category: data.category,
                discreption: data.discreption,
                instructior: data.instructor,
                image: url,
                name: data.name,
                price: data.price,
                sitNumber: data.sitNumber,
                sellPrice: data.sellPrice,
            }

            axios.post("/add-new-course", courseData).then(res => {
                console.log(res.data);
                toast.success("New Course Has Been Added")
            });
            setLoding(false)

        })
    }

    return (

        <div className="bg-[#F0F9F5] w-8/12 p-10 mx-auto h-fit">
            <form
                className="flex flex-col justify-start items-center gap-3"
                onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Course Name"
                    className="input input-bordered w-full"
                    {...register("name")} />

                <select className="input input-bordered w-full" {...register("category")}>
                    <option value="Language">Language</option>
                    <option value="Grammar">Grammar</option>
                </select>

                <select
                    className="input input-bordered w-full"
                    {...register("instructor")}
                >

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
                    type="number"
                    placeholder="sit number"
                    className="input input-bordered w-full" {...register("sitNumber")} />

                <input
                    type="number"
                    placeholder="price"
                    className="input input-bordered w-full"
                    {...register("price")} />

                <input
                    type="number"
                    placeholder="sell Price"
                    className="input input-bordered w-full"
                    {...register("sellPrice")} />

                <input
                    type="file"
                    className="file-input file-input-bordered file-input-success cursor-pointer w-full max-w-xs"
                    {...register("image")} />

                <textarea
                    className="textarea textarea-bordered textarea-lg w-full"
                    defaultValue="Discribe about your classes"
                    {...register("discreption")} ></textarea>


                <SubmitBtn loading={loading}>Add Now</SubmitBtn>
            </form>
        </div>
    )
};

export default AddCourseForm;