import useAuth from "../../Hooks/useAuth";

const Table = ({ userData, isLoading, refetch, handleDelete, handleEdit }) => {
    const currentUser = useAuth();
    return (
        isLoading ? <div>Loding</div> : <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr className="text-2xl">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userData?.map((data, index) => {
                                const { _id, address, email, image, name, role } = data;
                                return (
                                    <tr className="" key={index}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">{name}</div>
                                                    <div className="text-sm opacity-50">{role}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {email}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                        </td>
                                        <td>{address}</td>
                                        <th className="flex gap-3 items-center justify-center">
                                            <button
                                                onClick={() => { handleDelete(_id) }}
                                                disabled={currentUser.user.email === email}
                                                className="btn btn-ghost btn-xs bg-red-500">delete</button>
                                            <button
                                                disabled={currentUser.user.email === email}
                                                onClick={() => { handleEdit(_id) }}
                                                className="btn btn-ghost btn-xs bg-green-500">edit</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;


