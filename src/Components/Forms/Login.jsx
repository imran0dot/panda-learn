import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import SubmitBtn from '../../shared/sharedComponents/SubmitBtn';

const Login = ({ passwordType, setPasswordType, setFormControl }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { signIn, loading } = useAuth()
    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4'>
            <label>
                <p>Email</p>
                <input
                    type='email'
                    placeholder="Enter Here your email"
                    className="input input-bordered w-full"
                    {...register("email", { required: true })} />
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
                <SubmitBtn loading={loading}>Log in</SubmitBtn>
        </form >
    );
};

export default Login;