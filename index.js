// A simple String calculator which takes  string numbers with comma seperated input and output the sum of all numbers provided in string. 
function add(numbers){
    if (numbers === "") return 0; 
    let delimiter = /,|\n/; 
    if (numbers.startsWith("//")) { 
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    delimiter = new RegExp(delimiterMatch[1]);
    numbers = numbers.substring(delimiterMatch[0].length);
   }
    const numbersArray=numbers.split(delimiter).map(Number);  
    const negatives = numbersArray.filter(n => n < 0);  // Handling for negatives numbers 

   if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
   }
    return numbersArray.reduce((sum,num)=>sum+num,0);
}  