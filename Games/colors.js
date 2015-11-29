var Colors = function ()
{
	var fst_cube , color_Cube,n, cubes, drop;
	var GameOver = true;
	this.setup = function()
	{
		createCanvas(600,400);
		colorMode(HSB, 360, 100, 100);
		//Create a group of sprites "cubes" with different colors 
		//that will be the target of the drop.
		cubes= new Group();
		fst_cube = width / 10; 
		for ( var i = 0 ; i < 5 ; i ++ )	
		{
			color_Cube = createSprite( fst_cube, 500, width/5 , 50); 
			color_Cube.shapeColor =  addColor(i); 
			fst_cube += width / 5;
			cubes.add(color_Cube);
		}	
	};
	
	addColor= function(n)
	{
	//this function gives a color according to the number in the parameter 
		var color; 
		switch(n) 
		{
        	case 0:
        		color = "yellow" ;
        		break;
        	case 1:
        		color = "green" ; 
        		break;
        	case 2: 
        		color = "blue";
        		break;
        	case 3:
        		color = "purple" ;
        		break;
        	case 4:
        		color = "pink" ;
        		break;
    		default:
        	    color = 0;
		}
		return color;
	}
// 
 	draw = function()
 	{
 		background(200,50,100);
 		drawSprites(cubes);	
 		if ( ! GameOver ) // if is playing 
 		{
 			drawSprite(drop);
 			drop.velocity.y = 1.0;
 		    drop.position.x = constrain(mouseX, 0, width);	
			for ( var i = 0 ; i < 5 ; i ++ )	
				if ( drop.overlap(cubes[i]) ) // check the overlapping and send to the function
					check(cubes[i],i,drop);
 		}
 	};
 	NewGame = function ()
 	{
 			drop = createSprite( width /2 , 100 , 20 , 20);
 			drop.shapeColor = addColor( 4 ); 
 			drop.velocity.y = 1.0;
 	};
 	check = function (cube, n,drop)//evaluate if the overlap was with the correct cube 
 	{
 		if ( drop.shapeColor == cube.shapeColor )
 			NewGame();
 		else 
	    {
	    	text ( 'CLIK WITH THE MOUSE FOR A NEW GAME');
 			GameOver = true;
 		}		
 	};
    mousePressed = function()
   {
  		if(GameOver)
  		{
    		GameOver= false;
    	    NewGame();
    	}    
	}

};
var myp5 = new p5(sketch, 'colors'); 
Colors.prototype = new sketch;