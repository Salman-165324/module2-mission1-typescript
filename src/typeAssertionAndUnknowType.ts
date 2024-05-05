// example of type assertion and unknown type

// if we us any when data processing we can access data.name without any problem in processData function 

// But if we use   function processData(data: unknown), ts will tell "Property 'name' does not exist on type 'object'.ts(2339)". 
// in that case we need to use type assertion const {name, age} = data as {name: string; age: number};
// return `Name: ${name}, Age: ${age} `; // Type assertion for object properties

{
    function getData(source: string): unknown {
        // Simulate fetching data from an external source
        if (source === 'api') {
          return { name: 'Alice', age: 30 };
        } else if (source === 'user-input') {
          return prompt('Enter a value:');
        }
        return null; // Or any other default value
      }
      
      function processData(data: any): string { 
        if (typeof data === 'string') {
          return data.toUpperCase(); // Now we know it's a string
        } else if (typeof data === 'object' && data !== null) {
          return `Name: ${data.name}, Age: ${data.age}`; // Type assertion for object properties
        }
        return 'Unknown data type';
      }
      
      const apiData = getData('api');
      const processedApiData = processData(apiData);
      console.log(processedApiData); // Output: Name: Alice, Age: 30 (assuming API returns the object)
      
      const userInput = getData('user-input');
      const processedUserInput = processData(userInput);
      console.log(processedUserInput); // Output will vary based on user input
      
}

{
    function getData(source: string): unknown {
        // Simulate fetching data from an external source
        if (source === 'api') {
          return { name: 'Alice', age: 30 };
        } else if (source === 'user-input') {
          return prompt('Enter a value:');
        }
        return null; // Or any other default value
      }
      
      function processData(data: unknown): string { 
        if (typeof data === 'string') {
          return data.toUpperCase(); // Now we know it's a string
        } else if (typeof data === 'object' && data !== null) {
          const {name, age} = data as {name: string; age: number};
          return `Name: ${name}, Age: ${age} `; // Type assertion for object properties
        }
        return 'Unknown data type';
      }
      
      const apiData = getData('api');
      const processedApiData = processData(apiData);
      console.log(processedApiData); // Output: Name: Alice, Age: 30 (assuming API returns the object)
      
      const userInput = getData('user-input');
      const processedUserInput = processData(userInput);
      console.log(processedUserInput); // Output will vary based on user input

}