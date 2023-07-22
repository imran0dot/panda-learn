import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useForm } from "react-hook-form";
import { BiSolidUserPlus } from 'react-icons/bi'
import SubmitBtn from '../../shared/sharedComponents/SubmitBtn';
import useAuth from '../../Hooks/useAuth';
import { useEffect, useState } from 'react';
import { useUpload } from '../../Hooks/useUpload';
import { toast } from 'react-hot-toast';


const Registration = ({ passwordType, setPasswordType, setFormControl }) => {
    const [imageText, setImageText] = useState("Upload Image")
    const [imageUrl, setImageUrl] = useState("")
    const { loading, createUser, updateUserProfile, setUser } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //Watching state of image change
    const photoWatch = watch("photo");
    useEffect(() => {
        setImageText(photoWatch ? photoWatch[0]?.name : "Upload Image")
    }, [photoWatch])


    const onSubmit = data => {
        const { photo, name, email, password } = data;
        useUpload(photo[0]).then(url => {
            createUser(email, password).then(userCredential => {
                updateUserProfile(name, url).then(() => {
                    setUser(userCredential.user);
                    toast.success("User Login SuccessFull")
                })
            })
        });

    };


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4'>
            {errors.lastName && <span className='text-red-800'>This field is required</span>}


            <label
                className='cursor-pointer'>
                <p>Profile Picture</p>
                <div className='border p-5 flex flex-col text-center items-center justify-center rounded-lg w-4/12'>
                    <BiSolidUserPlus size="100" className=' opacity-30' />
                    <p className='font-bold'>{imageText}</p>
                </div>
                <input
                    className='hidden'
                    type='file'
                    {...register("photo", { required: true })} />
                {errors.name && <span className='text-red-800'>Upload an Image</span>}
            </label>
            <label>
                <p>Name</p>
                <input
                    placeholder="Enter Here your name"
                    className="input input-bordered w-full"
                    {...register("name", { required: true })} />
                {errors.name && <span className='text-red-800'>This field is required</span>}
            </label>

            <label>
                <p>Email</p>
                <input
                    type='email'
                    placeholder="Enter Here your email"
                    className="input input-bordered w-full"
                    {...register("email", { required: true })} />
                {errors.email && <span className='text-red-800'>This field is required</span>}
            </label>


            <label>
                <div className='flex justify-between'>
                    <p>Password</p>
                    {
                        passwordType ?
                            <div
                                onClick={() => setPasswordType(!passwordType)}
                                className='flex items-center gap-3 cursor-pointer'>
                                <BsEyeSlashFill /> <span>Hide Password</span>
                            </div> :
                            <div
                                onClick={() => setPasswordType(!passwordType)}
                                className='flex items-center gap-3 cursor-pointer'>
                                <BsEyeFill /> <span>Show Password</span>
                            </div>
                    }
                </div>
                <input
                    type={passwordType ?
                        "text" : "password"}
                    placeholder="Enter Here your Password"
                    className="input input-bordered w-full"
                    {...register("password", {
                        required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/i
                    })} />
                {errors.password && <span className='text-red-800'>
                    Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character $ ! % * ? &
                </span>}
            </label>
            <p>If you have already exist account please <span
                onClick={() => setFormControl(true)}
                className='text-[#00988A] font-bold cursor-pointer'>login</span></p>

            <SubmitBtn loading={loading}>Registration</SubmitBtn>
        </form>
    );
};

export default Registration;