
import Course from './components/Course/Course'
import './App.css'
import { useState } from 'react';

function App() {
  const [courseName, setCourseName] = useState([])
  const [totalPrice, settotalPrice] = useState(0);
  const [countCredit, setcountCredit] = useState(0);
  const [remainingCreditHour, setremainingCreditHour] = useState(0);
  
  const handleSelect = course => {
    const isavailable=courseName.find(courseName=>courseName.id===course.id)
    // console.log(course.price)
    let count = course.price
    let count2 = course.credit
    if(isavailable){
      alert('You have already selected')
    }
    else{

    courseName.forEach(item=>{

      count= count+item.price;
      count2= count2+item.credit;
    })
    settotalPrice(count);
  
    console.log(count2);

    const totalCreditHour = 20-count2;
    if(totalCreditHour<0){
      return alert('insufficient credit hours!!')
    }
    setcountCredit(count2);
    setremainingCreditHour(totalCreditHour)
    console.log(totalCreditHour)
    console.log(count)
    const newAllCourse = [...courseName, course]
    setCourseName(newAllCourse);
  }
}

  console.log(courseName)
  return (
    <>

      <Course handleSelect={handleSelect} courseName={courseName} totalPrice={totalPrice} countCredit={countCredit} remainingCreditHour={remainingCreditHour}></Course>

    </>
  )
}

export default App
