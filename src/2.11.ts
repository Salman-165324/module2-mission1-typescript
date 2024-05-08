{
    // pick type
    type Person = {

        name: string; 
        age: number; 
        email? : string; 
        contactNo: number;
    }

    type NameAge = Pick <Person, "name" | 'age'>


    // omit type 

    type ContactNo = Omit <Person, "name" | 'age'>; 

    // required 

    type PersonRequired = Required <Person>

    // partial 

    type PersonPartial = Partial <Person> 

    // Readonly 

    type PersonReadOnly = Readonly <Person>; 


    // Record type

    // type Myobj = {

    //     a: string; 
    //     b: string;
    // }

    type Myobj = Record <string, string>; 

    const obj1: Myobj = {

        a : 'sa', 
        b : 'ka', 
        c: '1'
    }


    const obj2 : Record <string, unknown> = {
        a: 's', 
        b: 'k', 
        c: 1
    }

}