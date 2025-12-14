import "./add-course-add-lesson-container.css";
import { useState } from "react";
import NormalAddCourseInput from "../add-course-input/normal-add-course-input";
import PdfAddCourseInput from "../add-course-input/pdf-add-course-input";
import VideoAddCourseInput from "../add-course-input/video-add-course-input";
import { DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddCourseAddLessonContainer = ({ lessonNum }) => {
    const [chosenType, setChosenType] = useState(null);
    const [date, setDate] = useState(null);

    return <div className="add_course_add_lesson_container">
        <div className="add_course_add_lesson_header_and_title">
            <h1>الدرس {lessonNum}</h1>
            <NormalAddCourseInput
                type="input"
                label="عنوان الدرس"
                validation="هذا هو العنوان المختصر للدرس (يظهر في القائمة الجانبية)"
                placeholder="عنوان الدرس"
            />
        </div>
        <div className="add_course_add_lesson_type_and_lesson_container">
            <div className="add_course_add_lesson_choose_type_and_lesson_info">
                <p> اختر نوع الدرس ( فيديو / ملف / رابط البث المباشر  )</p>
                <div className="add_course_add_lesson_choose_type_options">
                    <div className="add_course_add_lesson_choose_type_option">
                        <div className={`add_course_add_lesson_option ${chosenType === "pdf" ? "add_course_add_lesson_chosen" : ""}`} onClick={() => { setChosenType("pdf") }} />
                        <p>ملف pdf</p>
                    </div>
                    <div className="add_course_add_lesson_choose_type_option">
                        <div className={`add_course_add_lesson_option ${chosenType === "live" ? "add_course_add_lesson_chosen" : ""}`} onClick={() => { setChosenType("live") }} />
                        <p>رابط بث مباشر</p>
                    </div>
                    <div className="add_course_add_lesson_choose_type_option">
                        <div className={`add_course_add_lesson_option ${chosenType === "video" ? "add_course_add_lesson_chosen" : ""}`} onClick={() => { setChosenType("video") }} />
                        <p>فيديو</p>
                    </div>
                </div>
            </div>
            {
                chosenType === "pdf" && <div className="add_course_add_lesson_upload_container">
                    <PdfAddCourseInput label="رفع  ( ملف PDF  ) للدرس" />
                    <NormalAddCourseInput label="عنوان الملف" placeholder="عنوان الملف" />
                </div>
            }
            {
                chosenType === "video" && <div className="add_course_add_lesson_upload_container">
                    <VideoAddCourseInput label="رفع ( فيديو ) الدرس" />
                    <NormalAddCourseInput label="عنوان الفيديو" placeholder="عنوان الفيديو" />
                </div>
            }
            {
                chosenType === "live" && <div className="add_course_add_lesson_upload_container">
                    <NormalAddCourseInput label="رابط البث المباشر" placeholder="37sjjdsfjk/https .com" />
                    <div className="add_lesson_date_container">
                        <label className="add_course_date_picker_label">بداية البث المباشر</label>
                        <DatePicker
                            selected={date}
                            onChange={(newDate) => setDate(newDate)}
                            showTimeSelect
                            locale="ar"
                            dateFormat="yyyy-MM-dd"
                            placeholderText="اختر تاريخًا"
                        />
                    </div>
                    <NormalAddCourseInput label="مدة البث" placeholder="2 ساعة" />
                </div>
            }
        </div>
    </div>
};
export default AddCourseAddLessonContainer;