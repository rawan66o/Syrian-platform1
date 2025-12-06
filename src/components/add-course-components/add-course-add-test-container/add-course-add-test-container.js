import "./add-course-add-test-container.css";
import { useState } from "react";
import AddCourseAddTestQuestionContainer from "./add-course-add-test-question-container";

const AddCourseAddTestContainer = ({ testNum }) => {
    const [questions, setQuestions] = useState([]);

    const addQuestionHandler = () => {
        setQuestions([...questions, { id: Date.now() }]);
    };

    const deleteQuestionHandler = (id) => {
        const newQuestions = questions.filter(question => question.id !== id);
        setQuestions(newQuestions);
    }

    return <div className="add_course_add_test_container">
        <h1>الاختبار {testNum}</h1>
        <div className="add_course_questions_container">
            {questions.map(question => <AddCourseAddTestQuestionContainer key={question.id} id={question.id} deleteQuestion={deleteQuestionHandler} />)}
        </div>
        <button className="add_course_add_question_btn" onClick={addQuestionHandler}>اضافة سؤال</button>
    </div>
};
export default AddCourseAddTestContainer;