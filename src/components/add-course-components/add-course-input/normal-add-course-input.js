import "./add-course-input.css";



const NormalAddCourseInput = ({ label, validation, placeholder }) => {

    return <div className="add_course_input_container" >
        <div className="add_course_label_and_validation">
            <label className="add_course_label">{label}</label>
            {validation && <label className="add_course_validation">{validation}</label>}
        </div>
        <input className="add_course_normal_input" type="text" placeholder={placeholder} />
    </div>
};
export default NormalAddCourseInput;