import { useState } from "react";
import useClasses from "../../Hooks/useClasses";
import Title from "../../shared/sharedComponents/Title";
import { useEffect } from "react";
import Fixedwidth from "../../Layouts/Fixedwidth";
import ClassBox from "../../shared/sharedComponents/ClassBox";
import Loading from "../../shared/sharedComponents/Loading";

const Courses = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        useClasses().then(res => {
            setClasses(res);
            setLoading(false);
        })
    }, [])

    return (
        <div>
            {
                loading? <Loading /> :
                <Fixedwidth>
                    <div>
                        <Title title="We Provide Best Video for lerning" subTitle="Have a look at your perfect solution" align="center" />
                        <div className="grid grid-cols-4 gap-5">
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