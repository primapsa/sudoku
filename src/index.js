module.exports = function solveSudoku(matrix) {
  const initial = [
    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
  ];

var numbersCount={1:9, 2:9, 3:9, 4:9, 5:9, 6:9, 7:9, 8:9, 9:9};

var nulledRow=[];
var allowed=[];
var squad=[];

function getNullrow(sudoku=[]) {
  nrow: for(let i=0; i<sudoku.length; i++){
    for(let j=0; j<sudoku[i].length; j++){
      if(sudoku[i][j]==0){
        nulledRow.push(i,j);
        return nulledRow; 
        break nrow;
      }
    }
  }  
}

function correctNumbers(arr=[],numbers=[]) {
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr[i].length; j++){
      if(arr[i][j]!==0){
        numbers[arr[i][j]]-=1;        
      }
    }
  }
  return numbers; 
}

function getNumbers(arr=[],row=[]) {
  for(let ia=0; ia<arr.length; ia++){
    if(arr[ia][row[1]]!==0){
      allowed.push(arr[ia][row[1]]);
    }  
  }
  for(let ij=0; ij<arr[row[0]].length; ij++){
    if(arr[row[0]][ij]!==0){
      allowed.push(arr[row[0]][ij]);
    }
  }
  for(let i=0; i<arr.length; i++){     
      if(Math.ceil((row[0]+1)/3)==Math.ceil((i+1)/3)){
        for(let j=0; j<arr[i].length; j++){          
          if(Math.ceil((row[1]+1)/3)==Math.ceil((j+1)/3)){
            if(arr[i][j]!==0){
             allowed.push(arr[i][j]);
            }
          }
        }
      }
      
    }  
  return allowed;
}
function findSquad(arr=[],row=[]) {
    for(let i=0; i<arr.length; i++){     
      if(Math.ceil((row[0]+1)/3)==Math.ceil((i+1)/3)){
        for(let j=0; j<arr[i].length; j++){          
          if(Math.ceil((row[1]+1)/3)==Math.ceil((j+1)/3)){
            if(arr[i][j]!==0){
             squad.push(arr[i][j]);
            }
          }
        }
      }
      
    }  
  return squad;
 
}
function correctInsertedNumbers(num=1,numbers=[]){
  if(numbers[num]>0){
    numbers[num]-=1;
    return true;
  }
  return false;
}
function fillSudoku(arr=[], numbers=[]) {
  let nullRow=getNullrow(arr);
  let allowedNumbers=getNumbers(arr,nullRow);
  
  for(let i=1;i<=9;i++){
    if(allowedNumbers.indexOf(i)==-1){
      if(correctInsertedNumbers(i, numbers)===true){
        arr[nullRow[0]][nullRow[1]]=i;
      }else{
        
      }
      
      
     
    }
  }
}
var tst=getNullrow(initial);
console.log(tst);
console.log(allowedNumbers(initial,tst));



}
