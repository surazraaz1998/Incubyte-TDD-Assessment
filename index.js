// A simple String calculator which takes  string numbers with comma seperated input and output the sum of all numbers provided in string. 
function add(numbers){
    if (numbers === "") return 0; 
    const numbersArray=numbers.split(/[,|\n]/).map(Number);  // Adding a regular expression to split the numbers string for comma as well as new line.
    return numbersArray.reduce((sum,num)=>sum+num,0);
}  