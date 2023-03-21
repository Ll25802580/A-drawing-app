class Blackhole {
    constructor(x,y,m){
    this.pos = createVector(x,y);
    this.mass = m;
    this.rs = (2 * G * this.mass) / (c*c);
    console.log(this.rs);
    }
    
    pull(photon){
      const force = p5.Vector.sub(this.pos, photon.pos);
      const r = force.mag();
      //force
      const fg = G * this.mass / (r*r);
      //force.setMag(fg * 0.5);
      //photon.vel.add(force);
      //photon.vel.limit(c);
      
      //calculate the distance between the photon and the event horizon
    //  const dist = r - this.rs;
      
    //  if (dist < 10){
    //    force.rotate(HALF_PI);
    //    force.setMag(photon.vel.magSq() / this.rs);
    //  }else{
    //    force.setMag(fg * 0.5);
    //  }
    //  photon.vel.add(force);
    const dist = r - this.rs;
      
      if (dist < 10){
        // Calculate tangential velocity required for circular orbit
        const v = sqrt(G * this.mass / r);
        
        // Set photon's velocity to the tangential velocity, keeping direction perpendicular to force vector
        force.rotate(HALF_PI);
        photon.vel = force.copy().setMag(v);
      } else {
        force.setMag(fg * 0.5);
        photon.vel.add(force);
      }
    }
  
    
    show(){
      //event horizon
      fill(0);
      noStroke();
      circle(this.pos.x, this.pos.y, this.rs); 
      
      //photon sphere
      noFill();
      strokeWeight(6);
      stroke(255,0,0);//red
      circle(this.pos.x, this.pos.y, this.rs*2 + 6);
      
      //accretion disc
      noFill();
      stroke(255,156,0);//orange
      strokeWeight(12);
      circle(this.pos.x, this.pos.y, this.rs*4 + 6);
      
  
      
    }
  }