song1="";
song2="";
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
  video=createCapture(VIDEO);
  video.hide();

  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
  
}

function modelLoaded(){
console.log("Posenet is intialise");
}

function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("usic2.mp3");

}

function draw(){
image(video,0,0,600,500);
}

function play(){
  song.play();
  song.setvolume(1);
  song.rate(2.5);
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("Right Wrist x = " + rightWristX + " Right Wrist y = " + rightWristY);
console.log("Left Wrist x = " + leftWristX + " Left Wrist y = " + leftWristY);
}

}

