class Photon{
  
    constructor(x, y){
      this.pos = createVector(x,y);
      //velocity
      this.vel = createVector(-c,0);
      this.history = [];
    }
    
    update(){
      this.history.push(this.pos.copy());
      const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV);
      //line
      if (this.history.length > 500){
        this.history.splice(0,1);
      }
    }
    
    show(){
      //ball
      strokeWeight(5);
      stroke(255,0,0);
      
      //rotate
      
  
      point(this.pos.x, this.pos.y);
      
      //line
      stroke(0);
      strokeWeight(1);
      stroke(255,255,0);
      noFill();
      beginShape();
      for (let v of this.history){
        vertex(v.x, v.y);
      }   
      endShape();
    }
  }
  