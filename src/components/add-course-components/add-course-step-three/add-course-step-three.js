import "./add-course-step-three.css";
import ImageAddCourseInput from "../add-course-input/image-add-course-input";

const AddCourseStepThree = () => {
    const tests = [
        { id: 1, name: "الاختبار الأول", questionsNum: 10 },
        { id: 2, name: "الاختبار الثاني", questionsNum: 10 },
        { id: 3, name: "الاختبار الثالث", questionsNum: 10 }
    ];

    return <div className="add_course_tests_preview">
        <ImageAddCourseInput label="رفع شهادة الكورس" />
        <h1>معاينة الاختبارات</h1>
        <div className="add_course_tests_preview_container">
            {tests.map(test => <div key={test.id} className="add_course_test_preview_container">
                <div className="add_course_test_preview_name">
                    <img src="/icons/reciept_icon/receipt_icon.svg" alt="" />
                    <p>{test.name}</p>
                </div>
                <div className="add_course_test_preview_questions_num">
                    <p className="add_course_test_preview_questions_number">{test.questionsNum}</p>
                    <p className="add_course_test_preview_questions_number_title">عدد الأسئلة</p>
                </div>
                <div className="add_course_test_preview_edit_test_container">
                    <p>تعديل</p>
                    <img src="/icons/edit_icon/message-edit.svg" alt="" />
                </div>
            </div>)}
        </div>
    </div>
};
export default AddCourseStepThree;