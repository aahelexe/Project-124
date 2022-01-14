function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(700,500);
    canvas.position(560,75);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("poseNet model loaded!");
}
function draw()
{
    background("grey");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
    if(results.length<1)
    {
        console.log("PoseNet error.");
    }
}