//Create variables here
 var DogImg,DoghappyImg,milk,milkimg,dog,database,feed,lastFed,foodref,foodObj,value;

function preload()
{
	DogImg=loadImage("Dog.png")
  DoghappyImg=loadImage("happydog.png")
  milkimg=loadImage("Milk.png")
}

function setup() {
	createCanvas(500, 500);
  foodObj=new Food();

  dog = createSprite(250,300);
  dog.addImage(DogImg);
  dog.scale = 0.15;

  database=firebase.database();

  addFood= createButton("Add Food")
  addFood.position(450,100)

  feed=createButton("Feed your dog");
  feed.position(650,100);

  
  
  milk = createSprite(150,320)
  milk.addImage(milkimg)
  milk.visible = 0
  milk.scale = 0.1
 

 

  

}


function draw(){
   background(255)
   drawSprites();

 
  feed.mousePressed(()=>{foodObj.detectFood();foodObj.updateFoodStock(foodObj.foodStock)
  })

  

 
  addFood.mousePressed(addFoods)

   
   foodObj.display();
   feedDog();
   

   fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })

  fill ("white")
  textSize(15)
  if(lastFed>=12){
    text("Last Fed : "+ lastFed%12 + " PM", 150,25);
   }else if(lastFed==0){
     text("Last Fed : 12 AM",350,30);
   }else{
     text("Last Fed : "+ lastFed + " AM", 150,25);
   }
   fill(4,23,117)
   textSize(20)
   text(value,400,dog.y-80)
  }

  function feedDog(){
  foodObj.getFoodStock();
  if(foodObj.foodStock<=0)
  {
    foodObj.foodStock=0;
    milk.visible= false
    dog.addImage(DoghappyImg);
  }
  else{
    dog.addImage(DoghappyImg);
    if(foodObj.foodStock===1)
    {
        milk.visible=true
        dog.addImage(DogImg);
    }
    else{
    milk.visible = true
    foodObj.updateFoodStock(foodObj.foodStock-1);
  
    
    }
  }
}
function addFoods()
{
  foodObj.updateFoodStock(foodObj.foodStock+1);
  console.log(foodObj.foodStock)
  
}



  

 
  
  
  
  
  
   





