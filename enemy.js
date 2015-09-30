// this creates the enemy object and assigns it some properties
var enemy = 
{
image: document.createElement("img"),
x: SCREEN_WIDTH/0.2,
y: SCREEN_HEIGHT/0.2,
width: 93,
height: 80,
velocityX: 0,
velocityY: 0,
angularVelocity: 0,
rotation: 0
};
enemy.image.src = "enemy.png";

var Enemy = function() 
{
	this.image = document.createElement("img");
	this.x = canvas.width/6;
	this.y = canvas.height/6;
	this.width = 159;
	this.height = 163;
	
	this.image.src = "enemy.png";
};


Enemy.prototype.update = function(deltaTime)
{
	if( typeof(this.rotation) == "undefined" )
		this.rotation = 0; // hang on, where did this variable come from!
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		this.rotation -= deltaTime;
	}
	else
	{
		this.rotation += deltaTime;
	}
}

Enemy.prototype.draw = function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/6, -this.height/6);
	context.restore();
}
