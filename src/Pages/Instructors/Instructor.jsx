import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ClassBox from "../../shared/sharedComponents/ClassBox";
import useClasses from "../../Hooks/useClasses";

const Instructor = () => {
    const [data, setData] = useState([]);
    const [classes, setClasses] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios(`/instructor/${id}`).then(res => setData(res.data[0]));
        useClasses().then(res => setClasses(res));
    }, [])
    return (
        <div className="grid grid-cols-2 gap-2 relative">
            <div className="h-fit sticky top-0">
                <img className="w-full h-screen object-cover" src={data?.image} alt="" />
            </div>
            <div className="p-5 flex flex-col gap-5">
                <h1 className="text-7xl font-bold">Hi I'm {data?.name}</h1>
                <h3 className="text-3xl">I'm From {data?.address}</h3>

                <h3 className="text-3xl font-bold">My Classes:- </h3>
                <div className="grid grid-cols-3 gap-4">
                    {
                        classes?.map((singleCourse,i) => {
                            return (
                                <ClassBox 
                                singleCourse={singleCourse}
                                image={data.image} key={i} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructor;