class Stone{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
	var options = {
restitution:0.8,
friction:0.9,
density:12
	}
		
		this.body=Bodies.rectangle(x,y,w,h, options)
        this.w=w
        this.h=h
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
            var angle=this.body.angle
			push()
			translate(pos.x, pos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			
rect(0,0,this.w,this.h)
			pop()
	}

}