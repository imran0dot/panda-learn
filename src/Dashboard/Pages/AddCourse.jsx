import AddCourseForm from "../../Components/Forms/AddCourseForm";
import Title from "../../shared/sharedComponents/Title";

const AddCourse = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center">
            <Title title="Add New Course" subTitle="Try to make student Friendly" align="center" />
           <AddCourseForm />
        </div>
    );
};

export default AddCourse;