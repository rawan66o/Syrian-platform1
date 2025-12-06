import { useState } from "react";
import "./add-course-step-two.css";
import AddCourseLevelContainer from "../add-course-level-container/add-course-level-container";

const levelNameMap = {
    0: "الأولى",
    1: "الثانية",
    2: "الثالثة",
    3: "الرابعة",
    4: "الخامسة",
    5: "السادسة",
    6: "السابعة",
    7: "الثامنة",
    8: "التاسعة",
};

const AddCourseStepTwo = () => {
    const [levels, setLevels] = useState([]);




    const addLevelHandler = () => {
        const newLevel = { id: Date.now(), levelNum: levelNameMap[levels.length] };
        setLevels([...levels, newLevel]);
    };




    return <div className="add_course_step_two_container">
        {levels.map(level =>
            <AddCourseLevelContainer key={level.id} levelNum={level.levelNum} />
        )}
        <div className="add_course_step_two_add_level_container">
            <h1 className="add_course_step_two_add_level_header">اضافة وحدة علمية</h1>
            <button className="add_course_step_two_add_level_button" onClick={addLevelHandler}>
                <p>اضافة وحدة</p>
                <img src="/icons/plus/add-square.svg" alt="" />
            </button>
        </div>
    </div>
};
export default AddCourseStepTwo;