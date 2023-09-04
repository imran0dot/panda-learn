import { useState } from "react";
import useClasses from "../../Hooks/useClasses";
import Title from "../../shared/sharedComponents/Title";
import { useEffect } from "react";
import Fixedwidth from "../../Layouts/Fixedwidth";
import ClassBox from "../../shared/sharedComponents/ClassBox";
import Loading from "../../shared/sharedComponents/Loading";
import { useLocation } from "react-router-dom";

const Courses = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keys = searchParams.get("keys");

    useEffect(() => {
        useClasses(keys).then(res => {
            setClasses(res);
            setLoading(false);
        })
    }, [keys])

    return (
        <div>
            {
                loading? <Loading /> :
                <Fixedwidth>
                    <div>
                        <Title title="We Provide Best Video for lerning" subTitle="Have a look at your perfect solution" align="center" />
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {
                                classes?.map((singleCourse, index) => {
                                    return <ClassBox key={index} singleCourse={singleCourse} />
                                })
                            }
                        </div>
                    </div>
                </Fixedwidth>
            }
        </div>
    );
};

export default Courses;