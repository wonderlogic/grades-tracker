import { useState } from 'react'

const CourseForm = ({addCourse}) => {
    const [courseNo, setCourseNo] = useState('');
    const [courseName, setCourseName] = useState('');
    const [units, setUnits] = useState();
    const [grade, setGrade] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        addCourse({ courseNo, courseName, units, grade });
        setCourseNo('');
        setCourseName('');
        setUnits(0);
        setGrade('A');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <label className='font-medium text-lg'>Course No.</label>
            <br/>
            <input type="text" value={courseNo} onChange={event => setCourseNo(event.target.value)} className="p-2 border rounded" />
            <br/>
            <br/>
            <label className='font-medium text-lg'>Course Name</label>
            <br/>
            <input type="text" value={courseName} onChange={event => setCourseName(event.target.value)} className="p-2 border rounded" />
            <br/>
            <br/>
            <label className='font-medium text-lg'>Units</label>
            <br/>
            <input type="number" value={units} onChange={event => setUnits(Number(event.target.value))} className="p-2 border rounded" min={1} max={8}/>
            <br/>
            <br/>
            <p className='font-medium text-lg'>Grade</p>
            <div>
                {['A', 'B+', 'B', 'C+', 'C', 'D', 'F'].map(letterGrade => (
                    <label key={letterGrade} className="flex items-center">
                        <input type="radio" value={letterGrade} checked={grade === letterGrade} onChange={event => setGrade(event.target.value)} className="mr-2"/>
                        {letterGrade}
                        <br/>
                    </label>
                ))}
            </div>
            <br/>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
    );
}

export default CourseForm
