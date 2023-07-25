import GetUsers from "../../shared/sharedComponents/GetUsers";
import UserListTable from "../../Components/Tables/UserListTable"
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Users = () => {
    const { isLoading, data, refetch } = GetUsers();
    const userData = data?.data

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
                        if (res.data.deletedCount < 0) {
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


    return (
        <div>
            <UserListTable refetch={refetch} isLoading={isLoading} userData={userData} handleDelete={handleDelete} />
        </div>
    );
};

export default Users;