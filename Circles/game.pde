 class  Circle
{
   int size = 20; 
   float x = 20;
   float y =200;
   FCircle b = new FCircle(20);
        
   void pos(){
     b.setVelocity(0,0);
     b.addImpulse(0,-200);;   }
   void display()
   { 
     //noLoop();
     b.setPosition(50,50);
     //b.setRestitution(0.1);
     //b.setDamping(0.01);
     b.setFill(200, 30, 90);
     world.add(b);
   }
  void dbox()
  {
    FBox box = new FBox(100, 50);
    box.setPosition(width,height-100);
    box.setDensity(1);
    box.setFriction(0);
    box.setVelocity(-100,0);
    box.setForce(-100,0);
    world.add(box);
    
 
    
  }
}