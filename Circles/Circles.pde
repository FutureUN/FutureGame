
  import fisica.*;
  FWorld world;
  Circle circle;
void setup()
{
  Fisica.init(this);
  smooth();
  world = new FWorld();
  world.setGravity(0,400);
  world.setEdges();
  size(400,400);
  circle = new Circle();
  circle.display();
  circle.dbox();
}

void draw()
{
  background(255);
  world.draw();
  world.step();
}
void mouseClicked() {
  
  circle.pos();
}