
var Galaga = function ()
{	
	var Plane;
	var img; 
	var psize = 40, GameOver;
	var asteroids, Count, level = 0; 
	var bulls ;
	var frame = 10;
	var ROWS = 5 , COL = 12, total;
	var bgImg;
	
	this.setup = function()
	{

		frameRate(frame);
		bgImg = loadImage("images/flappy_bg.png");
		GameOver = true;
		asteroids = new Group(); 
		bulls =  new Group(); 
		Plane = createSprite(width/2, height/1.2, psize,psize);
  		Plane.draw = function(){triangle(psize/2,0,0,psize,psize,psize) }
  		textSize(50);
  		text("Click New Game",width/2,height/2);

	};
	
	draw = function ()
	{
		//clear();
		textSize(30);
		if(!GameOver){
			background(160,50,80);
			text ( Count, width-40 , 30)
			Plane.position.x = constrain(mouseX-psize/2,0,width-psize);

			//camera.position.y = (Plane.position.y);

			for(var i=0;i<bulls.length; i++)
				if(bulls[i].position.y < 0){
					bulls[i].remove();
				}
			for(var i=0;i<asteroids.length;i++)  //Die 
				if(asteroids[i].position.y > height){
					die();
				}

			if(Count >= total)
				win();

			image( bgImg, 0,height/2);
			image(bgImg, 400, height/2)
			camera.on();
			asteroids.overlap(bulls,erase);
			drawSprites();
		}
	};

	newgame = function()
	{
		updateSprites(true);
		Count = 0;
		total = 0; 
		GameOver = false;
		levels(level);
	}

	die = function()
	{
		GameOver = true;
		updateSprites(false);
		text("Click Again",width/2,height/2);
  		asteroids.removeSprites();
  		
	}
	win = function()
	{
  		level++;
  		text("WIN!!!, Click Next Level",width/2,height/2);
		updateSprites(false);
		asteroids.removeSprites();
  		GameOver = true;
  		
	}

	mousePressed = function() 
	{
		if(bulls.length<3){
			var s = createSprite(constrain(mouseX,psize/2,width-psize/2),height/1.2, 5,10);
			bulls.add(s);
			s.velocity.y =  -4;
			s.life=height/1.5;
		}
		//console.log(bulls);
		if(GameOver)
    		newgame();

	};
	erase  = function (asteroid, bull)
	{
		bull.remove();
		asteroid.remove();
		Count++;
	};

	levels = function(level)
	{
		switch(level){
		case 0:
			for(var i=0;i<ROWS;i++)
	  		{
	  			for(var j=i; j<COL-i; j++)
	  			{
	  				var a = createSprite( 25*(j+1),25*(i+1), 20,20);
	  				asteroids.add(a);
	  				a.velocity.y=0.2;
	  				total++;
	  			}
	  			for(var j=ROWS-i-1; j<COL-(ROWS-i-1); j++)
	  			{
	  				var a = createSprite( 25*(j) + 25 *COL,25*(i+1), 20,20);
	  				asteroids.add(a);
	  				a.velocity.y=0.1;
	  				total++;
	  			}
	  		}
	  		break;
	  	case 1:
	  		for(var i=0;i<ROWS;i++)
	  		{
	  			for(var j=i; j<COL-i; j++)
	  			{
	  				var a = createSprite( 48*(j+1),25*(i+1), 20,20);
	  				asteroids.add(a);
	  				a.velocity.y=0.2;
	  				total ++ ;
	  			}
	  		break;
	  		}
	  	default:
	  		break;
		}


	};

};
Galaga.prototype = new sketch;
