function add(numbers){
    const numbersArray=numbers.split(',').map(Number);
    return numbersArray.reduce((sum,num)=>sum+num,0);
}  // A simple String calculator which takes  string numbers with comma seperated input and output the sum of all numbers provided in string. 