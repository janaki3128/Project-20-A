var tom , tomImg,tom1,tom2;
var jerry , jerryImg,jerry2,jerry3;
var back,backImg;
function preload() {
    //load the images here
    tomImg = loadAnimation("images/cat1.png");
    jerryImg = loadAnimation("images/mouse1.png");
    tom2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");
    jerry2 = loadAnimation("images/mouse2.png");
    jerry3 = loadAnimation("images/mouse3.png");
    backImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    back = createSprite(400,300,800,600);
    back.addImage("back",backImg);

    tom = createSprite(650,450,10,10);
    tom.addAnimation("tom",tomImg);
    tom.scale = 0.2;

    jerry = createSprite(50,450,20,20);
    jerry.addAnimation("jerry",jerryImg);
    jerry.scale = 0.2;

   
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x === 1/7*(tom.width+jerry.width)){
        tom.addAnimation("tom",tom3);
        jerry.addAnimation("jerry",jerry2);
        tom.velocityX = 0;
    }
     console.log(tom.x-jerry.x);
    drawSprites();
}


function keyPressed(){
if(keyCode==LEFT_ARROW){
   tom.velocityX = -2;

   tom.addAnimation("tom",tom2);
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