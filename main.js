status = "";
img = "";
objects = [];
function smartphone(){
    img = loadImage("phones.jpg")
}
function headphone(){
    img = loadImage("book.jpeg")
}
function desk(){
    img = loadImage("desk.jpg")
}
function bottle(){
    img = loadImage("bottle.jpg")
}
function basket(){
    img = loadImage("fruit-basket.jpg")
}
function dogcat(){
    img = loadImage("dog_cat.jpg")
}
function setup() {
    canvas = createCanvas(620, 420);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "status = detecting objects";
}
function modelloaded() {
    console.log("modelloaded!")
    status = true;
}
function got_result(error, results) {
    if (error == true) {
        console.error(error)
    }
    else {
        objects = results;
        console.log(results)
    }
}
function preload() {
    img = loadImage("dog_cat.jpg")
}
function draw() {
    image(img, 0, 0, 620, 420);
 if(status != ""){
    objectdetector.detect(img, got_result)
     for(i=0 ;i<objects.length; i++){
        document.getElementById("status").innerHTML = "status = objects detected"; 
        percent = floor(objects[i].confidence*100)
        stroke("red");
        text(objects[i].label+" "+percent+"%",objects[i].x +15,objects[i].y +15);
        noFill();
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);  
     }
 }
}