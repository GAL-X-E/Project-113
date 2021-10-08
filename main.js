function perload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(450,170);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,110,80,420,320);

    fill(255, 0, 251);
    stroke(255, 0, 251);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    
    fill(0, 153, 255);
    stroke(0, 153, 255);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);
}

function take_snapshot(){
    save('pic.png')
}