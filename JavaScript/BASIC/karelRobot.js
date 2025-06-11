/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here
   putBeeper();
   move();
   threeTile();
   twoTile();
   rightThreeTile();
   twoTile();
   rightThreeTile();
}

function putt(){
   move();
   putBeeper();
}

function threeLeft(){
   turnLeft();
   turnLeft();
   turnLeft();
   }
  
function rightThreeTile(){
   move();
   putBeeper();
   threeLeft();
   move();
   putt();
   move();
   putt();
} 

function threeTile(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function twoTile(){
   turnLeft();
   move();
   turnLeft();
   putt();
   move();
   putt();
   move();
   threeLeft();
}