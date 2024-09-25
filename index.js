// A simple String calculator which takes  string numbers with comma seperated input and output the sum of all numbers provided in string. 
function add(numbers){
    if (numbers === "") return 0; 
    let delimiter = /,|\n/; // Default delimiters: comma and newline
    if (numbers.startsWith("//")) { // Handling of custom delimiters using regular expresion
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    delimiter = new RegExp(delimiterMatch[1]);
    numbers = numbers.substring(delimiterMatch[0].length);
  }
    const numbersArray=numbers.split(delimiter).map(Number);  
    return numbersArray.reduce((sum,num)=>sum+num,0);
}  