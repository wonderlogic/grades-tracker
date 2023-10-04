import { useState } from 'react';
import CourseForm from './components/CourseForm';
import CourseTable from './components/CourseTable';

function App() {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-4 gap-4">
      <div className="col-span-1 bg-white rounded shadow-lg p-4 m-4">
        <CourseForm addCourse={addCourse}></CourseForm>
      </div>
      <div className="col-span-3 bg-white rounded shadow-lg p-4 m-4">
        <CourseTable courses={courses}></CourseTable>
      </div>
    </div>
  );
}

export default App;
