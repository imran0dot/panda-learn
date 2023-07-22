import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Dashboard;