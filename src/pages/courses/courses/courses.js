import "./courses.css";
import { useEffect, useState } from "react";
import Select from "react-select";
import CourseCard from "../../../components/courses-page-components/course-card/course-card";
import Footer from "../../../components/footer/footer";
const Courses = () => {
    const [chosenCategory, setchosenCategory] = useState("all_courses");
    const [currentPage, setcurrentPage] = useState(1);
    const coursesPerPage = 9;
    const lastCourse = currentPage * coursesPerPage;
    const firstCourse = lastCourse - coursesPerPage;
    let pages = [];

    const courses = [
        {
            id: 1,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 2,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 3,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 4,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 5,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 6,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 7,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 8,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 9,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.",
            students: 17000,
            rating: 4.7
        },
        {
            id: 10,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
            students: 17000,
            rating: 4.7
        },
        {
            id: 11,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
            students: 17000,
            rating: 4.7
        },
        {
            id: 12,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
            students: 17000,
            rating: 4.7
        },
        {
            id: 13,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
            students: 17000,
            rating: 4.7
        },
        {
            id: 14,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
            students: 17000,
            rating: 4.7
        },
        {
            id: 15,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
            students: 17000,
            rating: 4.7
        },
        {
            id: 16,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
            students: 17000,
            rating: 4.7
        },
        {
            id: 17,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
            students: 17000,
            rating: 4.7
        },
        {
            id: 18,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.2",
            students: 17000,
            rating: 4.7
        },
        {
            id: 19,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
            students: 17000,
            rating: 4.7
        },
        {
            id: 20,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
            students: 17000,
            rating: 4.7
        },
        {
            id: 21,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
            students: 17000,
            rating: 4.7
        },
        {
            id: 22,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
            students: 17000,
            rating: 4.7
        },
        {
            id: 23,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
            students: 17000,
            rating: 4.7
        },
        {
            id: 24,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
            students: 17000,
            rating: 4.7
        },
        {
            id: 25,
            imgSrc: "/images/course_card_images/1.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
            students: 17000,
            rating: 4.7
        },
        {
            id: 26,
            imgSrc: "/images/course_card_images/2.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
            students: 17000,
            rating: 4.7
        },
        {
            id: 27,
            imgSrc: "/images/course_card_images/3.svg",
            time: "28 ساعة",
            title: "كورس تصميم  Ui UX للتطبيقات و المواقع الالكترونية.3",
            students: 17000,
            rating: 4.7
        },
    ];
    for (let i = 1; i <= Math.ceil(courses.length / coursesPerPage); i++) {
        pages.push(i);
    }
    const categories = [
        { id: 1, category: "كل الكورسات", code: "all_courses" },
        { id: 2, category: "اللغات", code: "langs" },
        { id: 3, category: "الادارة والقيادة", code: "mangement" },
        { id: 4, category: "غرافيك دزاين", code: "graphic_design" },
        { id: 5, category: "العربية", code: "arabic" },
        { id: 6, category: "تصميم UI / UX", code: "ui_ux" },
        { id: 7, category: "الادارة والقيادة", code: "managementb" },
        { id: 8, category: "غرافيك دزاين", code: "graphic_designb" },
    ];

    const reactSelectStyles = {
        indicatorSeparator: (base) => ({
            ...base, display: "none"
        }),
        control: (base) => ({
            ...base,
            width: "fit-content",
            height: "40px",
            border: "1px solid #d9e4e5",
            fontWeight: "500",
            fontSize: "16px",
            borderRadius: "31px",
            cursor: "pointer",
        }),
        placeholder: (base) => ({
            ...base,
            color: "#072127",
            width: "100%"
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: "#072127"
        }),
        option: (base) => ({
            ...base,
            color: "#072127",
            fontWeight: "500",
        })
    }


    const handlePrevious = () => {
        if (currentPage > 1) {
            setcurrentPage(prev => prev - 1);
        }
    };
    const handleNext = () => {
        if (currentPage < pages[pages.length - 1]) {
            setcurrentPage(prev => prev + 1);
        }
    }


    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);
    return <div className="courses_page">
        <div className="courses_page_container">
            <div className="courses_sidebar_container">
                <div className="courses_sidebar">
                    <h1>التصنيفات</h1>
                    <ul className="courses_categories">
                        {categories.map(cat => <li
                            key={cat.id}
                            onClick={() => { setchosenCategory(cat.code) }}
                            className={`courses_categories_li ${chosenCategory === cat.code ? "courses_chosen_category" : ""}`}>
                            {cat.category}
                        </li>)}
                    </ul>
                </div>
            </div>
            <div className="courses_container">
                <div className="courses_container_header">
                    <div className="courses_container_header_title_and_order">
                        <h1>جميع الكورسات</h1>
                        <Select
                            className="order_courses_select"
                            placeholder="ترتيب حسب"
                            options={
                                [
                                    { value: "newest", label: "الأحدث" },
                                    { value: "oldest", label: "الأقدم" },
                                ]
                            }
                            styles={reactSelectStyles}
                            isClearable
                        />
                    </div>
                    <div className="courses_search_input_container">
                        <img src="/icons/search_icon/search_normal.svg" className="courses_searchicon" alt="" />
                        <input type="search"
                            className="courses_search_input"
                            placeholder="ابحث عن الكورس"
                        />
                        <button className="courses_search_button">ابحث</button>
                    </div>
                </div>
                <div className="courses_cards">
                    {courses.slice(firstCourse, lastCourse).map((course, index) => <CourseCard
                        key={index}
                        imgSrc={course.imgSrc}
                        time={course.time}
                        title={course.title}
                        students={course.students}
                        rating={course.rating}
                    />)}
                </div>
                <div className="courses_pagination_container">
                    <button className="courses_pagination_btn" onClick={handleNext}>
                        <img src="/icons/next_icon/Next.svg" alt="" />
                    </button>
                    <div className="courses_pages_pagination_nums" dir="ltr">
                        {pages.map((page, index) => <p
                            key={index}
                            className={`courses_pages_pagination_nums_p ${currentPage === page ? "courses_page_chosen" : ""}`}
                            onClick={() => { setcurrentPage(page) }}
                        >
                            {page}
                        </p>)}
                    </div>
                    <button className="courses_pagination_btn" onClick={handlePrevious}>
                        <img src="/icons/previous_icon/Prev.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
};
export default Courses;
