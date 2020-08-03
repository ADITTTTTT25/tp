class Box {
    constructor(x,y,width,height){
       var options = {
            restitution:0.9,
            friction:0.1,
            
        }
        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
        }

    display(){
        if(this.body.speed<10){
            // var pos = this.body.position;
            var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          // rectMode(CENTER);
          // rect(0,0,this.w,this.h);
          imageMode(CENTER);
          image(this.image,0,0,this.w,this.h);
          pop();
          text(angle + ",",mouseX,mouseY);
        }
        else{
          push();
          World.remove(world,this.body);
          this.visibility= this.visibility- 5;
          tint(255,this.visibility);
          pop();
         
        }


        
      }
    }