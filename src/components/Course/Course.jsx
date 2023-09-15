import { useEffect, useState } from 'react';
import '../Course/course.css'
import Card from '../cart/Card';
import Cart from '../cart/Cart';
const Course = ({handleSelect,courseName,totalPrice,countCredit,remainingCreditHour}) => {
    const[courses, setCourses]=useState([])
    useEffect(()=>{
        fetch('../../../data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
    return (
        <div className="container">
            <h1 className='heading'>Course Registration</h1>
            <div className="course-container">
                <div className="card-container">
                    {
                courses.map(course=><Card key={course.id} course={course} handleSelect={handleSelect}></Card>)
                    }
                  
                </div>
                    <div>
                        <Cart courseName={courseName} totalPrice={totalPrice} countCredit={countCredit} remainingCreditHour={remainingCreditHour}></Cart>
                 </div>
            </div>
        </div>
    );
};

export default Course;