// A simple String calculator which takes  string numbers with comma seperated input and output the sum of all numbers provided in string. 
function add(numbers){
    if (numbers === "") return 0;  // If input is empty then return 0 instead of running the time complexity of reduce method which is O(n);
    const numbersArray=numbers.split(',').map(Number);
    return numbersArray.reduce((sum,num)=>sum+num,0);
}  