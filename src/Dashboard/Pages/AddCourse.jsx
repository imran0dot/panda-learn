import { Navigate } from "react-router-dom";
import AddCourseForm from "../../Components/Forms/AddCourseForm";
import useAuth from "../../Hooks/useAuth";
import Title from "../../shared/sharedComponents/Title";

const AddCourse = () => {
    const { userRole } = useAuth();

    return (
        userRole !== "admin" || !userRole !== "instructor" ? 
        <div className="h-[100vh] flex flex-col justify-center items-center">
            <Title title="Add New Course" subTitle="Try to make student Friendly" align="center" />
           <AddCourseForm />
        </div> 
        : 
        <Navigate to="/" />
    );
};

export default AddCourse;