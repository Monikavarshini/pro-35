class Food{
constructor(){

this.foodStock= 0;
this.lastfed=0;
this.x=0;
this.image=loadImage("Milk.png")

}

updateFoodStock(food){
this.foodStock=food;
database.ref('/').update({
    food:this.foodStock,
    FeedTime:hour()
})
}
getFoodStock(){
    this.x = database.ref('food');
    this.x.on("value",(data)=>{
        this.foodStock=data.val();
      })
}
deductFood(){
    this.foodStock--;
   
}

display(){

 var x = 80, y = 100;
 imageMode(CENTER);
 if(this.foodStock != 0){
     for(var i = 0; i < this.foodStock; i++){
         if(i % 10 === 0 && i>0){
            x = 80;
            y += 50;
         }
         image(this.image, x, y, 50, 50);
         x += 30; 
     }
  }
}
}