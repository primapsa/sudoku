module.exports = function solveSudoku(matrix) {
  
var numbersCount={1:9, 2:9, 3:9, 4:9, 5:9, 6:9, 7:9, 8:9, 9:9};
var nulledRow=[];
var allowed=[];
var squad=[];

function getNullrow(sudoku=[]) {    
  for(let i=0; i<sudoku.length; i++){
    for(let j=0; j<sudoku.length; j++){
      if(sudoku[i][j]==0){
        nulledRow.push(i,j);
        return nulledRow;         
      }
    }
  }
  return false;
}

function correctNumbers(arr=[], numbers=[]) {
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr[i].length; j++){
      if(arr[i][j]!==0){
        numbers[arr[i][j]]-=1;        
      }
    }
  }
  return numbers; 
}

function getNumbers(arr, iti, jtj) {
  allowed=[];
  if(iti>=0 && jtj>=0 ){
  for(let ia=0; ia<arr.length; ia++){
    if(arr[ia][jtj]!==0){
      allowed.push(arr[ia][jtj]);
    }  
  }
  for(let ij=0; ij<9; ij++){
    if(arr[iti][ij]!==0){
      allowed.push(arr[iti][ij]);
    }
  }
  for(let i=0; i<arr.length; i++){     
      if(Math.ceil((iti+1)/3)==Math.ceil((i+1)/3)){
        for(let j=0; j<arr[i].length; j++){          
          if(Math.ceil((jtj+1)/3)==Math.ceil((j+1)/3)){
            if(arr[i][j]!==0){
             allowed.push(arr[i][j]);
            }
          }
        }
      }
      
    }  
  return allowed;
  }
}
function findSquad(arr=[],row=[]) {
    for(let i=0; i<arr.length; i++){     
      if(Math.ceil((row[0]+1)/3)==Math.ceil((i+1)/3)){
        for(let j=0; j<arr[i].length; j++){          
          if(Math.ceil((jtj+1)/3)==Math.ceil((j+1)/3)){
            if(arr[i][j]!==0){
             squad.push(arr[i][j]);
            }
          }
        }
      }      
    }  
  return squad; 
}

function correctInsertedNumbers(num, numbers=[]){
  if(numbers[num]>0){
    numbers[num]-=1;
    return true;
  }
  return false;
}

function fillSudoku(arr) {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[i][j]==0){
       let allowedNumbers=getNumbers(arr,i,j);
         for(let n=1;n<=9;n++){
           if(allowedNumbers.indexOf(n)==-1){
              arr[i][j]=n;          
                if (fillSudoku(arr)) return arr; 
                arr[i][j]=0;                      
           }
         }return;
      } 
    }    
  }return arr;
} 
return fillSudoku(matrix);
}
