import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useForm } from "react-hook-form";


const Registration = ({ passwordType, setPasswordType }) => {
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
                            <BsEyeSlashFill onClick={() => setPasswordType(!passwordType)} /> :
                            <BsEyeFill onClick={() => setPasswordType(!passwordType)} />
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

            <input
                className='btn bg-[#00988A] text-white hover:bg-[#2E836F]'
                type="submit" value="Registration" />
        </form>
    );
};

export default Registration;