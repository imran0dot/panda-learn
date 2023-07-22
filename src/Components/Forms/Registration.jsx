import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

const Registration = ({ passwordType, setPasswordType }) => {
    return (
        <form className='flex flex-col gap-4'>
            <label>
                <p>Name</p>
                <input type="text" placeholder="Enter Here your name" className="input input-bordered w-full" />
            </label>

            <label>
                <p>Email</p>
                <input type="email" placeholder="Enter Here your Email" className="input input-bordered w-full" />
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
                <input type={passwordType? "text" : "password"} placeholder="Enter Here your Password" className="input input-bordered w-full" />
            </label>

            <input
                className='btn bg-[#00988A] text-white hover:bg-[#2E836F]'
                type="submit" value="Registration" />
        </form>
    );
};

export default Registration;