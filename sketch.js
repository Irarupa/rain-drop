
var drop,rain = []
//var back;
function setup() {
  createCanvas(windowWidth,windowHeight);
 //  back = new Back(0,0,0.01,0.0001);
  for(var i= 0;i<800;i++){
    drop = new Drop(random(0,width),random(0,height));
    rain.push(drop);

  }
   
}

function draw() {
  background(102,104,32); 
 // back.display();
 
  for (var i = 0;i<rain.length;i++){
      rain[i].display();
      rain[i].fall();
  }
}