import GetUsers from "../../shared/sharedComponents/GetUsers";
import UserListTable from "../../Components/Tables/UserListTable"
import Swal from "sweetalert2";
import axios from "axios";

const Users = () => {
    const { isLoading, data, refetch, } = GetUsers();
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_SERVERLINK}/user/remove/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    });
            }
        })
    }

    const handleEdit = (id) => {
        const uri = `${import.meta.env.VITE_SERVERLINK}/role/${id}`
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: '#00988A',
            cancelButtonColor: '#34947D',
            confirmButtonText: 'Make Instructor',
            denyButtonText: `Make Admin`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.patch(uri, { role: "instructor" }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("verify_token")}`
                    }
                })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire("Saved! as a Instructor")
                            refetch();
                        }
                    });

            } else if (result.isDenied) {
                axios.patch(uri, { role: "admin" }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("verify_token")}`
                    }
                })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire("Saved! as a Admin")
                            refetch();
                        }
                    });
            }
            else {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }


    return (
        <div>
            <UserListTable
                refetch={refetch}
                isLoading={isLoading}
                userData={data}
                handleDelete={handleDelete}
                handleEdit={handleEdit} />
        </div>
    );
};

export default Users;