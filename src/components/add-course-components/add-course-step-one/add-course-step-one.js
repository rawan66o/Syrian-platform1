import "./add-course-step-one.css";
import ImageAddCourseInput from "../add-course-input/image-add-course-input";
import NormalAddCourseInput from "../add-course-input/normal-add-course-input";
import SelectAddCourseInput from "../add-course-input/select-add-course-input";
import TextAreaAddCourseInput from "../add-course-input/text-area-add-course-input";




const AddCourseStepOne = () => {

    const categories = [
        { value: "all_courses", label: "كل الكورسات", },
        { value: "langs", label: "اللغات", },
        { value: "mangement", label: "الادارة والقيادة", },
        { value: "graphic_design", label: "غرافيك دزاين", },
        { value: "arabic", label: "العربية", },
        { value: "ui_ux", label: "تصميم UI / UX", },
        { value: "managementb", label: "الادارة والقيادة", },
        { value: "graphic_designb", label: "غرافيك دزاين", },
    ];


    return <div className="add_course_step_one_container">
        <NormalAddCourseInput
            type="input"
            label="اسم الدورة"
            validation=" من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف ."
            placeholder="دورة لغة انكليزية"
        />
        <TextAreaAddCourseInput
            type="textarea"
            label="وصف الدورة"
            placeholder="وصف الدورة كامل ومعبر"
        />
        <ImageAddCourseInput
            type="image"
            label="صورة غلاف الدورة"
            validation=" من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم ."
        />
        <SelectAddCourseInput
            type="select"
            label="تصنيف الكورس"
            placeholder="تصنيف الكورس"
            options={categories}
        />
    </div>
};
export default AddCourseStepOne;