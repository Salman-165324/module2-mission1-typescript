{
  const addStudentToCourse = <
    T extends { name: string; email: string; id: string }
  >(
    student: T
  ) => {
    return {
      ...student,
      course: "Apollo Level 2",
    };
  };

  const student1 = addStudentToCourse<{
    name: string;
    email: string;
    id: string;
    blood: string;
  }>({ name: "x", email: "x@gmail.com", id: "t20", blood: "o+ve" });

  const student2 = addStudentToCourse({
    name: "sadi",
    phone: 918,
    id: 't33', 
    email: 'sdi@gmail.com'
  });
}
