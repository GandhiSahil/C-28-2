const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var playerArrows = [];
var numberOfArrows=10;
var score=0


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };
  
  board1= new Board(width - 300,330,50,200);
  board2=new Board(width - 550, height-300,50, 200);
  

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(
    340,
    playerBase.position.y - 112,
    120,
    120
  );
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  playerArcher.display();

  for (var i = 0; i < playerArrows.length; i++) {
    if (playerArrows[i] !== undefined) {
      playerArrows[i].display();

      var board1Collision = Matter.SAT.collides(
        board1.body,
        playerArrows[i].body)

      var board2Collision = Matter.SAT.collides(
          board2.body,
          playerArrows[i].body)

          if(board1Collision.collided || board2Collision.collided){
            score+=5

          
          }
          var posX=playerArrows[i].body.position.x
          var posY=playerArrows[i].body.position.y
          if(posX>width||posY>height){
          if(!playerArrows[i].isRemoved){
            playerArrows[i].remove(i)
          }
          else{
            playerArrows[i].trajectory=[]
          }
          }
      
    }
  }

  board1.display();
  board2.display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  fill("#FFFF");
  textAlign("center");
  textSize(30);
  text("score"+score, width-200, 100);

  fill("#FFFF");
  textAlign("center");
  textSize(30);
  text("Remaining Arrows : "+numberOfArrows, 200, 100)
}



function keyPressed() {
  if (keyCode === 32) {
    if(numberOfArrows >0){
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body.angle;
    //console.log(angle);



    var arrow = new PlayerArrow(posX, posY, 100, 10, angle);

    Matter.Body.setAngle(arrow.body, angle);
    playerArrows.push(arrow);
    numberOfArrows-=1
  }
}
}

function keyReleased() {
  if (keyCode === 32) {
    if (playerArrows.length) {
      var angle = playerArcher.body.angle;
      playerArrows[playerArrows.length - 1].shoot(angle);
    }
  }
}

var score=playerArrow.missTarget
  if(playerArrows=resetTarget){
  score.text=display()
  }

  function gameOver(){
    swal(
    {
      title: "Game Over!!!",
      text: "Thanks for playing!!!",
      imageUrl:
         "https://raw.githubusercontent.com/vishalgaddam873/PirateInvasion/main/assets/board.png",
      imageSize: "150*150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm){
      if(isConfirm) {
        location.reload();
      }
    }

    );
  }



