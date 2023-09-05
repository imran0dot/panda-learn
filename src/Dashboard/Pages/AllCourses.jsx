import { useEffect, useState } from "react";
import useClasses from "../../Hooks/useClasses";

const AllCourses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        useClasses().then(res => setClasses(res))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Sit Number</th>
                            <th>Instructor</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Sell Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((items, index) => {
                                const { category, instructior, name, price, sellPrice, sitNumber, image } = items;
                                return (
                                    <tr key={items._id}>
                                        <th>{index + 1}</th>
                                        <td><img className="w-16 h-16 object-cover rounded-full border-2" src={image} alt="" /></td>
                                        <td>{name}</td>
                                        <td>{category}</td>
                                        <td>{sitNumber}</td>
                                        <td>{instructior}</td>
                                        <td>{instructior}</td>
                                        <td>{price}</td>
                                        <td>{sellPrice}</td>
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

export default AllCourses;