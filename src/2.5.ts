{
  //

  // function with Generics

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  createArrayWithGenerics<string>("Bangladesh");
  createArrayWithGenerics<number>(2);

  interface User {
    id: number;
    name: string;
    gender: string;
  }

  createArrayWithGenerics<User>({ id: 158, name: "Salman", gender: "Male" });




  const createTupleWithGenerics = <T, X>  (param1:T, param2:X) : [T,X] => {

    return [param1, param2]
  }


  createTupleWithGenerics <string, number>("Bangladesh", 1971); 

  type Ideology = string[] 

  createTupleWithGenerics <string, Ideology> ('Bangladesh', ['Socialism', 'Equality', 'Democracy', "Secularism"]); 


//  function


  const addStudentToCourse = <T> (student :T) => {

    return{
        ...student, 
        course: "Apollo Level 2",
    }
  }


   const student1 = addStudentToCourse<{name: string; gmail: string}> ({name: "x", gmail: 'x@gmail.com'}); 
   const student2 = addStudentToCourse <{name: string, phone: number}> ({name: 'sadi', phone: 918});



  //
}
