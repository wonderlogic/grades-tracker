import { useState, useMemo } from 'react'

const CourseTable = ({courses}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = useMemo(() => {
        if (!searchTerm) return courses;

        return courses.filter(course => 
            course.courseNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [courses, searchTerm]);

    const totalQPI = useMemo(() => {
        let totalPoints = 0;
        let totalUnits = 0;
        const gradeValues = {
            'A': 4.0,
            'B+': 3.5,
            'B': 3.0,
            'C+': 2.5,
            'C': 2.0,
            'D': 1.0,
            'F': 0.0
        };

        for (const course of filteredCourses) {
            const { grade, units } = course;
            if (gradeValues.hasOwnProperty(grade)) {
                totalPoints += gradeValues[grade] * units;
                totalUnits += units;
            }
        }

        if (totalUnits === 0) {
            return 0;
        }

        return parseFloat((totalPoints / totalUnits).toFixed(2));
    }, [filteredCourses]);

    return (
        <div>
            <input type="text" placeholder="Search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className="p-2 border rounded mb-4" />
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2 w-32">Course No.</th>
                        <th className="border p-2">Course Name</th>
                        <th className="border p-2 w-32">Units</th>
                        <th className="border p-2 w-32">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCourses.map((course, idx) => (
                        <tr key={idx}>
                            <td className="border p-2 text-center">{course.courseNo}</td>
                            <td className="border p-2">{course.courseName}</td>
                            <td className="border p-2 text-center">{course.units}</td>
                            <td className="border p-2 text-center">{course.grade}</td>
                        </tr>
                    ))}
                    <br/>
                    <tr>
                        <td colSpan={2}></td>
                        <td className='text-center'>Total QPI</td>
                        <td className='text-center'>{totalQPI}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CourseTable
