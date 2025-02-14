import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Button from "./components/Button";
import Card from "./components/Card";
import CardContent from "./components/CardContent";
import CardHeader from "./components/CardHeader";
import CardTitle from "./components/CardTitle";
import Progress from "./components/Progress";
import Input from "./components/Input"
import { COURSES } from "./mockdata";

const CourseApp = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  // const [inputVal, setInputVal] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);

  // Filter courses based on search term
  const filteredCourses = COURSES.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEnroll = (courseId) => {
    const course = COURSES.find((c) => c.id === courseId);
    if (course && !enrolledCourses.find((c) => c.id === courseId)) {
      setEnrolledCourses([
        ...enrolledCourses,
        { ...course, progress: 0, completed: false },
      ]);
    }
  };

  const handleUpdateProgress = (courseId, completed) => {
    setEnrolledCourses(
      enrolledCourses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              progress: completed ? 100 : course.progress,
              completed,
            }
          : course
      )
    );
  };

  // Course List Component
  const CourseList = () => (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />

        <Input
          placeholder="Search courses by name or instructor..."
          value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
        {/* <Button
          onClick={() => setSearchTerm(inputVal)}>Search</Button> */}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-full h-48 object-cover rounded-t"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{course.name}</CardTitle>
              <p className="text-sm text-gray-600 mb-2">
                Instructor: {course.instructor}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Status: {course.enrollmentStatus}
              </p>
              <div className="space-x-2">
                <Button onClick={() => setSelectedCourse(course)}>
                  View Details
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleEnroll(course.id)}
                  disabled={enrolledCourses.some((c) => c.id === course.id)}
                >
                  {enrolledCourses.some((c) => c.id === course.id)
                    ? "Enrolled"
                    : "Enroll"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Course Details Component
  const CourseDetails = ({ course }) => (
    <Card>
      <CardHeader>
        <Button
          variant="outline"
          onClick={() => setSelectedCourse(null)}
          className="mb-4"
        >
          Back to Courses
        </Button>
        <img
          src={course.thumbnail}
          alt={course.name}
          className="w-full h-64 object-cover rounded"
        />
        <CardTitle className="text-2xl">{course.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Instructor</h3>
          <p>{course.instructor}</p>
        </div>
        <div>
          <h3 className="font-semibold">Description</h3>
          <p>{course.description}</p>
        </div>
        <div>
          <h3 className="font-semibold">Duration</h3>
          <p>{course.duration}</p>
        </div>
        <div>
          <h3 className="font-semibold">Schedule</h3>
          <p>{course.schedule}</p>
        </div>
        <div>
          <h3 className="font-semibold">Location</h3>
          <p>{course.location}</p>
        </div>
        <div>
          <h3 className="font-semibold">Prerequisites</h3>
          <ul className="list-disc pl-5">
            {course.prerequisites.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Syllabus</h3>
          <div className="space-y-2">
            {course.syllabus.map((week) => (
              <div key={week.week} className="border p-3 rounded">
                <h4 className="font-medium">
                  Week {week.week}: {week.topic}
                </h4>
                <p className="text-sm text-gray-600">{week.content}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Student Dashboard Component
  const StudentDashboard = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Enrolled Courses</h2>
        <Button variant="outline" onClick={() => setShowDashboard(false)}>
          Back to Courses
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center space-x-4">
                <img
                  src={course.thumbnail}
                  alt={course.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{course.name}</h3>
                  <p className="text-sm text-gray-600">
                    Instructor: {course.instructor}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="w-full" />
              </div>
              <Button
                variant={course.completed ? "outline" : "default"}
                onClick={() =>
                  handleUpdateProgress(course.id, !course.completed)
                }
                className="w-full"
              >
                {course.completed ? "Completed" : "Mark as Completed"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Course Catalog</h1>
        <Button onClick={() => setShowDashboard(!showDashboard)}>
          {showDashboard ? "View All Courses" : "My Dashboard"}
        </Button>
      </div>

      {showDashboard ? (
        <StudentDashboard />
      ) : selectedCourse ? (
        <CourseDetails course={selectedCourse} />
      ) : (
        <CourseList />
      )}
    </div>
  );
};

export default CourseApp;
