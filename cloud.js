
var sketch = function ()
{
	var GRAVITY = -.3; 
	var panfu, GameOver; 
	var cloud , clouds , Count =0; 
	var floor; 
	var cloimg, colp, mont;
	var v; 
	setup = function()
	{
		createCanvas(600,400);
		colorMode(HSB, 360, 100, 100);
		frameRate(1);
		colp = loadImage("images/colpatria.png");
		mont = loadImage("images/mount.png");
		clouds = new Group();
		cloimg = loadImage("images/blackcloud.png"); 
		GameOver = true;
		panfu = createSprite(width/2, height/2, 30, 30); 
		panfu.shapeColor =35;

		floor = createSprite(width/2,height,width,30);
		floor.shapeColor = 35 ;
		floor.immovable= true;
	};

	draw = function()
	{
		background(200,50,100);
		panfu.bounce(floor);
		if(!GameOver)
		{	
			
			panfu.velocity.y += GRAVITY ; 

			if(panfu.position.y > v +height/2)
				die();
			textSize(30);
			text ( Count, width-40 , v)

			panfu.position.x = constrain(mouseX, 0, width- panfu.width/2);
			panfu.overlap(clouds,removecloud);

		for(var i=0;i<clouds.length; i++)
			if(clouds[i].position.y > panfu.position.y + height/2){
				clouds[i].remove();
				cloud = createSprite( random (0,width),panfu.position.y -height )
				cloud.addImage(cloimg);
				clouds.add(cloud);
				cloud.immovable = true;
			}

				camera.off();
				image(mont,0,140,width,250);
				image(colp,width/2,90,100,310);
				camera.on();
				drawSprites(clouds);
		}
		
		if (v > panfu.position.y)
			v = panfu.position.y;
		
		
		camera.position.y = constrain(panfu.position.y, panfu.position.y-height/2 , v);
                if(GameOver)
                    text("New Game",width/2,height/2);
		drawSprite(panfu);
		drawSprite(floor);
	
	};

	die = function()
	{
		updateSprites(false);
		clouds.removeSprites();
  		GameOver = true;
  		
	}
	mousePressed = function() {
  	if(GameOver)
    	newGame();
	}

	newGame = function()
	{
		panfu.position.x= width/2;
		panfu.position.y=height/2;
		GameOver = false;
		v= height/2;

		updateSprites(true);
		panfu.velocity.y = 0;
		for(var i =0 ; i<random(3,4) ; i ++){
		cloud = createSprite(random(0,width),random(0,height-30), 1,1)
		cloud.addImage(cloimg);
		clouds.add(cloud);
		cloud.immovable = true;
		}

	}
	removecloud = function(pan,cloud)
	{
		cloud.remove();
		panfu.velocity.y= -13;
		cloud = createSprite( random (0,width),panfu.position.y -height )
			cloud.addImage(cloimg);
			clouds.add(cloud);
			cloud.immovable = true;
		Count++;

	}
	


};
var myp5 = new p5(sketch, 'cloud');