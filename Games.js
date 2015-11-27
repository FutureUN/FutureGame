// 0 Galaga, 1 Cloud, 2 Stick, 3 Colors, 4 Bounce; 
//
//
var sketch = function()
{
	var game, play, numbergames = 5, bool = false;
	var square, Squares;
	var tex = ["Galaga", "Cloud", "Stick", "Colors", "Bounce"]
	imgs = [ ];
	setup = function(){ //Overwrite
	
		createCanvas(600,600);
		colorMode(HSB, 360, 100, 100);
		play = false;
		Squares = new Group(); 
		for(var i = 0 ; i < numbergames; i ++ )
		{
			square = createSprite(100*(i+1), height/2, 60, 60);
			Squares.add(square);
			square.mouseActive = true;
		}
	};

	draw = function(){ //Overwrite
		background(0,50,100);

		if( play ) {
		}
		else
		{
			for (var i = 0; i < numbergames; i++)
			{
				if(Squares[i].mouseIsOver)
				{
					background(50*(i),100,100);
					textSize(40);
					text(tex[i],width/2,100);
				}
				if(Squares[i].mouseIsPressed)
					selected(i);
			}

			drawSprites();
		}

	}; 

	selected = function(n){
		Squares.removeSprites();
		switch (n)
		{
			case 0: 
				game = new Galaga;
				game.setup();
				break; 
			case 1:
				game = new Cloud;
				game.setup();
				break; 
			case 2:
				game = new Stick;
				game.setup();
				break; 
			case 3: 
				game = new Colors;
				game.setup();
				break; 
			case 4: 
				game = new Bounce;
				game.setup();
				break;
			default: 
				break;  
		}
		play = true; 
	};

	mousePressed = function()
	{}


	setImages = function(){
		imgs.push();

	}
}

var myp5 = new p5(sketch, 'Games');