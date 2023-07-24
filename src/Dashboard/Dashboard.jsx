import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-3/12 relative'>
                <Sidebar />
            </div>
            <div className='w-9/12 py-5'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;