import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../shared/sharedComponents/Loading';

const MyClasses = () => {
    const [myClasses, setMyClasses] = useState([]);
    const [loding, setLoading] = useState(true);

    useEffect(() => {
        axios("/my-classes").then(res => {
            setMyClasses(res.data)
            setLoading(false);
        });
    }, [])
    return (
        loding ? <Loading /> :
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Catagory</th>
                                <th>Instructor</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((myClass, index) => {
                                    console.log(myClass);
                                    return (
                                        <tr key={myClass._id}>
                                            <th>{index + 0}</th>
                                            <td><img className='w-16 h-16 object-cover border-2 shadow-md rounded-full' src={myClass.image} alt="" /></td>
                                            <td>{myClass.name}</td>
                                            <td>{myClass.category}</td>
                                            <td>{myClass.instructior}</td>
                                            <td>{myClass.sellPrice}</td>
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

export default MyClasses;