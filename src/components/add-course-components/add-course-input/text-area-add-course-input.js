import "./add-course-input.css";



const TextAreaAddCourseInput = ({ label, validation, placeholder }) => {

    return <div className="add_course_input_container">
        <div className="add_course_label_and_validation">
            <label className="add_course_label">{label}</label>
            {validation && <label className="add_course_validation">{validation}</label>}
        </div>
        <textarea className="add_course_textarea_input" placeholder={placeholder} />
    </div>
};
export default TextAreaAddCourseInput;