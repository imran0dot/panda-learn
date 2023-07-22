import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useForm } from "react-hook-form";

const Login = ({ passwordType, setPasswordType }) => {
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
                            <BsEyeSlashFill onClick={() => setPasswordType(!passwordType)} /> :
                            <BsEyeFill onClick={() => setPasswordType(!passwordType)} />
                    }
                </div>
                <input 
                type={passwordType ? "text" : "password"} 
                placeholder="Enter Here your Password" 
                className="input input-bordered w-full"
                {...register("password", { required: true })} />
            </label>
            <input

                className='btn bg-[#00988A] text-white hover:bg-[#2E836F]'
                type="submit" value="Login in" />
        </form >
    );
};

export default Login;