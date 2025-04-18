var acceleration = 0.02;
var nDrops = 1000;
var rain = [];

//effect for wind visualization 
		var angle = 0.0;
    var offset = 220;
    var scalar = 8;
    var speed = 0.04;
		let y; 

var windspeed;
var humidity;
var temp; 
var weather;


function preload() {
   cloud = loadImage("cloud.png");
	}

function setup() {
  
  createCanvas(480, 640);
 	
  
  
  for (i = 0; i < nDrops; i++) {
    rain.push(new Drop());
  }
}

function draw() {
  background(0);
  var y = -90 + sin(angle) * scalar;
  //clear();
  
  //var windspeed = weather.wind.speed*0.04;
  // angle += windspeed; 
  
   angle +=  0.08;
 

  rain.forEach(function(d) {
    d.drawAndDrop();
  });
  image(cloud,width/6,y,width/1.5,height/1.5);
}

function Drop() {
  this.initX = function() {
    this.x = random() * width/3+width/3;
  };
  this.initY = function() {
    this.y = -random() * height/3+height/2; // Initialise rain somewhat off the screen
  };

  this.initX();
  this.y = random() * height+height/2;

  this.length = random() * 10;
  this.speed = random();

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
  };

  this.draw = function() {
    stroke(255,255,255,90);
    strokeWeight(2);
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function() {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
    
  }
    
}
