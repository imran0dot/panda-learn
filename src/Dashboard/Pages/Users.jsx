import { useLoaderData } from 'react-router-dom';
import UserListTable from '../../Components/Tables/UserListTable'

const Users = () => {
    const userData = useLoaderData();
    return (
        <div>
            <UserListTable userData={userData} />
        </div>
    );
};

export default Users;