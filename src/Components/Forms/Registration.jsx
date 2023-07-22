import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useForm } from "react-hook-form";


const Registration = ({ passwordType, setPasswordType, setFormControl }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4'>
            {errors.lastName && <span className='text-red-800'>This field is required</span>}

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

            <input
                className='btn bg-[#00988A] text-white hover:bg-[#2E836F]'
                type="submit" value="Registration" />
        </form>
    );
};

export default Registration;