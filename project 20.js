var tom , tomImg;
var jerry , jerryImg;
function preload() {
    //load the images here
    tomImg = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
    jerryImg = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    tom = createSprite(300,300,10,10);
    tom.addAnimation(tomImg);

    jerry = createSprite(100,300,20,20);
    jerry.addAnimation(jerryImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     if(tom.isTouching(jerry)){
         tom = jerryImg
     }
    drawSprites();
}


function keyPressed(){
if(keyCode==LEFT_ARROW){
   tom.velocityX = -2;
}
  //For moving and changing animation write code here


}

// tom and jerry 
// create var 
// load animation in preload 
// create sprite and add animation 
// write if condition in draw function for detecting the collision 
// write logic of pressing left arrow key n the key pressed function 
// tom will move towards jerry 
// once they collide change the animation 

// 1 tom first stationery 1 img
// 2 tom will be moving 2 img
// 3 tom will stationery 1img