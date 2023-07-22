import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useForm } from "react-hook-form";

const Login = ({ passwordType, setPasswordType, setFormControl }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4'>
            <label>
                <p>Name</p>
                <input
                    placeholder="Enter Here your name"
                    className="input input-bordered w-full"
                    {...register("name", { required: true })} />
                {errors.name && <span className='text-red-800'>This field is required</span>}
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
                    type={passwordType ? "text" : "password"}
                    placeholder="Enter Here your Password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })} />
            </label>
            <p>If you are new at here please <span
            onClick={() => setFormControl(false)}
             className='text-[#00988A] font-bold cursor-pointer'>registraton</span></p>
            <input

                className='btn bg-[#00988A] text-white hover:bg-[#2E836F]'
                type="submit" value="Login in" />
        </form >
    );
};

export default Login;