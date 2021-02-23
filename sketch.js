var car, wall;
var speed ,weight;







function setup() {
  createCanvas(400,400);
  car=createSprite(10,200,20,20)
  wall =createSprite(390,200,18,400)
  speed =random (5,30)
  weight = random (5,1100)
  car.velocityX= speed
   
  


}

function draw() {
  background("black");  
  drawSprites();
  var r = isTouching(car,wall)
  if (r==true ){
    car.velocityX=0
    var deformation= (0.5 *speed *speed *weight)/22500
    if(deformation<100){
     car.shapeColor=(rgb(0,0,255))
    }
    if(deformation>100&& deformation <180){
     car.shapeColor=("yellow")
    }
    if(deformation>180){
     car.shapeColor=("red")
    }

  }

}
function isTouching(a,b)
{
  if(a.x-b.x <= 18.5 && b.x-a.x <= 18.5){
  return true
 
  }
else{
  return false
}


  
}

