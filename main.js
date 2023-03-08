function setup(){
    video=createCapture(VIDEO);
    video.size( 500, 400 );

    canvas=createCanvas(450,400);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#d3d3d3');
}

function modelLoaded(){
console.log('POSENET IS INITIALISING');
}

function gotPoses(results){
if(results.length > 0){
    
   console.log(results); 
}
}