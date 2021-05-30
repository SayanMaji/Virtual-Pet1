//Create variables here
var d,dog,happy_dog;
var foodS,food_stock;
var database;

function preload()
{
	//load images here
  dog = loadImage("dogImg.png");
  happy_dog  = loadImage("dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  d = createSprite(250,250,20,20);
  d.addImage(dog);
  

  database = firebase.database();

  food_stock = database.ref('Food');
  food_stock.on("value", readStock);
}


function draw() { 
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    d.addImage(happy_dog);
    d.scale= 0.8;
    }

  drawSprites();
  //add styles here

  textSize(20);
  fill("blue");
  stroke(2);
  text("NOTE : Press UP Arrow to give LDrago his power", 150,400);
  text("Food Stock :"+ foodS,250,420);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food : x
  })
}


