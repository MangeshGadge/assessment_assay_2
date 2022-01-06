
//correct answer
const corrAns = "There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year.";
                // 1   0    3          1     0  0 0     4   0  0 0   1      0  4    1    0  0   3         0                                
//candidate response
const response = "There are Twenty-Four hours in a day. A year has 14 months";
                //1     0    3           1    0  0  0    0 0    0   0  1
//Assumptions -
//	comma(,) and full stops(.) in sentence is neglected
//	comma and full stops are at the end of the word.
//	two string matches if they have same spelling and casing of letters does not matter
const corrAnsArray = corrAns.split(' ');
const responseArray = response.split(' ');

const isNumeric = (num) => (typeof(num) == 'number' || typeof(num) == "string" && num.trim() != '' && !isNaN(num));

let maxPossible = 0;
let candidateScore = 0;
let checkInd = 0;
for(let i = 0; i < corrAnsArray.length; i++){
	let str = corrAnsArray[i];
	
  if(isNumeric(str)){
  	maxPossible += 4;
    if(responseArray[checkInd] == str){
    	checkInd++;
      candidateScore += 4;
    }
  }else{
    const lastChar = str.charAt(str.length - 1) ;
    const condition = (lastChar == ',' || lastChar == '.');
    const len = str.length - (condition ? 1 : 0);
    
    if(len > 7){
      maxPossible += 3;
      if(responseArray[checkInd].toLowerCase() == str.toLowerCase()){
      	candidateScore += 4;
        checkInd++;
      }
    }else if (len >= 5 && len <= 7){
      maxPossible += 1;
      
      if(responseArray[checkInd].toLowerCase() == str.toLowerCase()){
      	checkInd++;
        candidateScore += 1;
      }
    }else if (responseArray[checkInd].toLowerCase() == str.toLowerCase()){
      checkInd++;
    }
  }
}

console.log("Maximum possible score " , maxPossible);
console.log("Candidate score " , candidateScore);

console.log("Percentage score (B/A)% ", (candidateScore/maxPossible)*100);

// output
// Maximum possible score  18
// Candidate score  6
// Percentage score (B/A)%  33.33333333333333