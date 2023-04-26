song ="";
song2 ="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
song=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}
function setup() {
canvas = createCanvas(550,500);
canvas.center;
canvas.position(560,150);
video = createCapture (VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("PoseNet is Initialized");
}
function draw(){
image(video, 0, 0, 550, 500);
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("LeftWristX = " + leftWristX + "LeftWristY = " + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("RightWristX = " + rightWristX + "RightWristY = " + rightWristY);
}
}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
song2.rate(1);
song2.setVolume(1);
song2.play();
}