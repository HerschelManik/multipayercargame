var ball;
var Position;
var database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballp=database.ref("Ball/Position");
    ballp.on("value",read)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
  database.ref("Ball/Position").set({
      x:Position.x+x,
      y:Position.y+y
  })
}
function read(data){
Position =data.val();
ball.x = Position.x;
ball.y = Position.y;

}