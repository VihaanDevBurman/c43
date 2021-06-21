var pd;
function setup() {
  createCanvas(displayWidth-30,displayHeight-30);
  pd=new PersonalDetails();
}

function draw() {
  background(255,255,255);  
 
  pd.display();
}