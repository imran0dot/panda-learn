import { useLoaderData } from 'react-router-dom';
import Table from '../../shared/sharedComponents/table';

const Users = () => {
    const userData = useLoaderData();
    return (
        <div>
            <Table data={userData} />
        </div>
    );
};

export default Users;