
var Galaga = function ()
{	
	var Plane;
	var img; 
	var psize = 50, GameOver;
	var asteroids, Count, level = 0; 
	var bulls ;
	var frame = 1;
	var ROWS = 5 , COL = 12, total;
	var bgImg, planeimg;
	
	this.setup = function()
	{

		frameRate(frame);
		bgImg = loadAnimation("images/Galaga/back1","images/Galaga/back2","images/Galaga/back3","images/Galaga/back4");
		planeimg = loadImage("images/Galaga/Galaga.png");
		bgImg.frameDelay = 10;
		GameOver = true;
		asteroids = new Group(); 
		bulls =  new Group(); 
		Plane = createSprite(width/2, height/1.2, psize,psize);
		Plane.addImage(planeimg);
  		//Plane.draw = function(){triangle(psize/2,0,0,psize,psize,psize) }
  		textSize(50);
  		text("Click New Game",width/2,height/2);

	};
	
	draw = function ()
	{
		//clear();
		textSize(30);
		if(!GameOver){
			background(0);
			Plane.position.x = constrain(mouseX,psize/2,width-psize/2);

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

			animation( bgImg, width/2,height/2);
			text ( Count, width-40 , 30)
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
			var s = createSprite(constrain(mouseX,psize/2,width-psize/2),height/1.2 - 10, 5,10);
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
	  				a.addAnimation("hla","images/Galaga/gbee1.png", "images/Galaga/gbee2.png");
	  				a.animation.frameDelay = 50;
	  
	  			}
	  			for(var j=ROWS-i-1; j<COL-(ROWS-i-1); j++)
	  			{
	  				var a = createSprite( 25*(j) + 25 *COL,25*(i+1), 20,20);
	  				asteroids.add(a);
	  				a.velocity.y=0.2;
	  				total++;
	  				a.addAnimation("hola","images/Galaga/bbee1.png", "images/Galaga/bbee2.png");
	  				a.animation.frameDelay = 50;
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
