var hr,mn,sc;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(200,200)
  rotate(-90)


  sc = second();
  mn = minute();
  hr = hour(); 
scAngle = map(sc, 0, 60, 0, 360)
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr%12,0,12,0,360);

//rotate(scAngle)
push()
rotate(scAngle)
stroke("purple");
strokeWeight(7);
line(0,0,100,0);
pop()

push()
rotate(mnAngle)
stroke("green");
strokeWeight(7);
line(0,0,75,0);
pop()
push()
rotate(hrAngle)
stroke("red");
strokeWeight(7);
line(0,0,50,0);
pop()
stroke(255,0,255);
point(0)

}
