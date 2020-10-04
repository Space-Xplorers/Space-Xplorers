var EARTH = 0;
var flameCoast = 1;
var MOON = 2;
var moCoast = 3;
var moEarth = 4;
var sailCoast = 5;
var ASTEROID = 6;
var asCoast = 7;
var asEarth = 8;
var ionCoast = 9;
var MARS = 10;
var maCoast = 11;
var maEarth = 12;
var nuclearCoast = 13;
var SATURN = 14;
var saCoast = 15;
var saEarth = 16;
var antiCoast = 17;
var APLPHA = 18;
var gameState = EARTH;

var True = 1;
var False = 2;
var incorrect = 3;
var qState = True;


var Sm = 0;
var S1 = 1;
var l = 2;
var S3 = 3;
var S4 = 4;
var S5 = 5;
var S6 = 6;
var S7 = 7;
var S8 = 8;
var S9 = 9;
var S10 = 10;
var S11 = 11;
var S12 = 12;
var S13 = 13;
var S14 = 14;
var sState = Sm;

var starship;
var starshipIMG ,starshipFlame;
var starshipIonIMG, starshipIonB;
var starshipSailIMG, starshipSailO, starshipSailC;
var starshipNuclearIMG, starshipNuclearB;
var starshipAntiIMG, starshipAntiB;

var bg, bgMoving, bgMovingD ,  bgStatic;

var buttonTrue, trueImg;
var buttonFalse, falseImg;
var buttonContinue, continueImg;
var buttonContinue2;

var anti,antiImg;
var ion, ionImg;
var liquid, liquidImg;
var nuclear, nuclearImg;
var sail, sailImg;
var warp, warpImg;
var going, goingImg;

var statement;
var state1, state2, state3, state4, state5, state6;

var earth, earthImg;
var moon, moonImg;
var asteroid, asteroidImg;
var mars, marsImg;
var saturn, saturnImg;

var ddt, ddt1, ddt2, ddt3, ddt4, ddt5, ddt6;

function preload(){
  
  starshipIMG = loadImage("flame/starshipFlame.png");
  starshipFlame = loadAnimation("flame/flame1.png","flame/flame2.png");
  
  starshipIonIMG = loadImage("ion/starshipIon.png");
  starshipIonB = loadAnimation("ion/ion1.png","ion/ion2.png");
  
  starshipSailIMG = loadImage("sail/sail8.png");
  starshipSailO = loadAnimation("sail/sail1.png","sail/sail2.png","sail/sail3.png","sail/sail4.png","sail/sail5.png","sail/sail6.png","sail/sail7.png","sail/sail8.png");
  starshipSailE = loadAnimation("sail/sail8.png","sail/sail7.png","sail/sail6.png","sail/sail5.png","sail/sail4.png","sail/sail3.png","sail/sail2.png","sail/sail1.png");
  
  starshipNuclearIMG = loadImage("nuclear/starshipNuclear.png");
  starhshipNuclearB = loadAnimation("nuclear/nuclear1.png","nuclear/nuclear2.png");
  
  starshipAntiIMG = loadImage("antimatter/starshipAnti.png");
  starshipAntiB = loadAnimation("antimatter/anti1.png","antimatter/anti2.png");
  
  bgStatic = loadImage("background/bg.jpg");
  bgMoving = loadAnimation("background/bg1.jpg","background/bg1.5.jpg","background/bg2.jpg","background/bg2.5.jpg","background/bg3.jpg","background/bg3.5.jpg","background/bg4.jpg","background/bg4.5.jpg","background/bg5.jpg","background/bg5.5.jpg","background/bg6.jpg","background/bg6.5.jpg","background/bg7.jpg","background/bg7.5.jpg","background/bg8.jpg");
  
  trueImg = loadImage("buttons/true.png");
  falseImg = loadImage("buttons/false.png");
  continueImg = loadImage("buttons/continue.png");
  
  antiImg = loadImage("info/anti.png");
  ionImg = loadImage("info/ion.png");
  liquidImg = loadImage("info/liquid.png");
  nuclearImg = loadImage("info/nuclear.png");
  sailImg = loadImage("info/sail.png");
  warpImg = loadImage("info/warp.png");
  goingImg = loadImage("info/going.png");
  
  state1 = loadImage("statements/1.png");
  state2 = loadImage("statements/2.png");
  state3 = loadImage("statements/3.png");
  state4 = loadImage("statements/4.png");
  state5 = loadImage("statements/5.png");
  state6 = loadImage("statements/6.png");
  
  earthImg = loadAnimation("earth/Earth1-min.png","earth/Earth2-min.png","earth/Earth3-min.png","earth/Earth4-min.png","earth/Earth5-min.png","earth/Earth6-min.png","earth/Earth7-min.png","earth/Earth8-min.png","earth/Earth9-min.png","earth/Earth10-min.png","earth/Earth11-min.png","earth/Earth12-min.png","earth/Earth13-min.png","earth/Earth14-min.png","earth/Earth15-min.png","earth/Earth16-min.png","earth/Earth17-min.png","earth/Earth18-min.png","earth/Earth19-min.png","earth/Earth20-min.png","earth/Earth21-min.png","earth/Earth22-min.png","earth/Earth23-min.png","earth/Earth24-min.png","earth/Earth25-min.png","earth/Earth26-min.png","earth/Earth27-min.png","earth/Earth28-min.png","earth/Earth29-min.png","earth/Earth30-min.png","earth/Earth31-min.png","earth/Earth32-min.png","earth/Earth33-min.png","earth/Earth34-min.png","earth/Earth35-min.png","earth/Earth36-min.png");
  
  moonImg = loadAnimation("moon/Moon1-min.png","moon/Moon2-min.png","moon/Moon3-min.png","moon/Moon4-min.png","moon/Moon5-min.png","moon/Moon6-min.png","moon/Moon7-min.png","moon/Moon8-min.png","moon/Moon9-min.png","moon/Moon10-min.png","moon/Moon11-min.png","moon/Moon12-min.png","moon/Moon13-min.png","moon/Moon14-min.png","moon/Moon15-min.png","moon/Moon16-min.png","moon/Moon17-min.png","moon/Moon18-min.png","moon/Moon19-min.png","moon/Moon20-min.png","moon/Moon21-min.png","moon/Moon22-min.png","moon/Moon23-min.png","moon/Moon24-min.png","moon/Moon25-min.png","moon/Moon26-min.png","moon/Moon27-min.png","moon/Moon28-min.png","moon/Moon29-min.png","moon/Moon30-min.png","moon/Moon31-min.png","moon/Moon32-min.png","moon/Moon33-min.png","moon/Moon34-min.png","moon/Moon35-min.png","moon/Moon36-min.png");
  
  asteroidImg = loadAnimation("asteroid/1-min.png","asteroid/2-min.png","asteroid/3-min.png","asteroid/4-min.png","asteroid/5-min.png","asteroid/6-min.png","asteroid/7-min.png","asteroid/8-min.png","asteroid/9-min.png","asteroid/10-min.png","asteroid/11-min.png","asteroid/12-min.png","asteroid/13-min.png","asteroid/14-min.png","asteroid/15-min.png","asteroid/16-min.png","asteroid/17-min.png","asteroid/18-min.png","asteroid/19-min.png","asteroid/20-min.png","asteroid/21-min.png","asteroid/22-min.png","asteroid/23-min.png","asteroid/24-min.png","asteroid/25-min.png","asteroid/26-min.png","asteroid/27-min.png","asteroid/28-min.png","asteroid/29-min.png","asteroid/30-min.png","asteroid/31-min.png","asteroid/32-min.png","asteroid/33-min.png","asteroid/34-min.png","asteroid/35-min.png","asteroid/36-min.png");
  
  marsImg = loadAnimation("mars/1-min.png","mars/2-min.png","mars/3-min.png","mars/4-min.png","mars/5-min.png","mars/6-min.png","mars/7-min.png","mars/8-min.png","mars/9-min.png","mars/10-min.png","mars/11-min.png","mars/12-min.png","mars/13-min.png","mars/14-min.png","mars/15-min.png","mars/16-min.png","mars/17-min.png","mars/18-min.png","mars/19-min.png","mars/20-min.png","mars/21-min.png","mars/22-min.png","mars/23-min.png","mars/24-min.png","mars/25-min.png","mars/26-min.png","mars/27-min.png","mars/28-min.png","mars/29-min.png","mars/30-min.png","mars/31-min.png","mars/32-min.png","mars/33-min.png","mars/34-min.png","mars/35-min.png","mars/36-min.png");
  
  saturnImg = loadAnimation("saturn/1.png","saturn/2.png","saturn/3.png","saturn/4.png","saturn/5.png","saturn/6.png","saturn/7.png","saturn/8.png","saturn/9.png","saturn/10.png","saturn/11.png","saturn/12.png","saturn/13.png","saturn/14.png","saturn/15.png","saturn/16.png","saturn/17.png","saturn/18.png","saturn/19.png","saturn/20.png","saturn/21.png","saturn/22.png","saturn/23.png","saturn/24.png","saturn/25.png","saturn/26.png","saturn/27.png","saturn/28.png","saturn/29.png","saturn/30.png","saturn/31.png","saturn/32.png","saturn/33.png","saturn/34.png","saturn/35.png","saturn/36.png");
  
  ddt1 = loadAnimation("ddt/1.png");
  ddt2 = loadAnimation("ddt/2.png");
  ddt3 = loadAnimation("ddt/3.png");
  ddt4 = loadAnimation("ddt/4.png");
  ddt5 = loadAnimation("ddt/5.png");
  ddt6 = loadAnimation("ddt/6.png");
  
}

function setup() {
  createCanvas(1200, 600);
      
  bg = createSprite(600,300,3600,1800);
  bg.addAnimation("bgMoving", bgMoving);
  bg.addAnimation("bgStatic",bgStatic);
  bg.addAnimation("bgMovingD",bgMovingD);

  starship = createSprite(600,300,320,245);
  starship.addAnimation("starship",starshipIMG);
  starship.addAnimation("flame",starshipFlame);
  starship.addAnimation("starshipIonIMG",starshipIonIMG);
  starship.addAnimation("ion",starshipIonB);
  starship.addAnimation("starshipSailIMG",starshipSailIMG);
  starship.addAnimation("SailO",starshipSailO);
  starship.addAnimation("SailE",starshipSailE);
  starship.addAnimation("starshipNuclearIMG",starshipNuclearIMG);
  starship.addAnimation("starshipNuclearIMG",starshipNuclearIMG);
  starship.addAnimation("starshipAntiIMG",starshipAntiIMG);
  starship.addAnimation("AntiB",starshipAntiB);
  starship.scale = 0.4;
    
  buttonTrue = createSprite(1400,500,80,40);
  buttonTrue.addImage("trueImg",trueImg);
  buttonTrue.scale = 0.15;
  buttonTrue.visible = false;
  
  buttonFalse = createSprite(1400,500,80,40);
  buttonFalse.addImage("falseImg",falseImg);
  buttonFalse.scale = 0.15;
  buttonFalse.visible = false;
  
  buttonContinue = createSprite(1100,500);
  buttonContinue.addImage("continueImg",continueImg);
  buttonContinue.scale = 0.2;
  buttonContinue.debug = true;
  buttonContinue.setCollider("rectangle", 0, 0, 40, 20);
  
  buttonContinue2 = createSprite(1100,580);
  buttonContinue2.addImage("continueImg",continueImg);
  buttonContinue2.scale = 0.2;
  buttonContinue2.visible = true;
  buttonContinue2.debug = true;
  buttonContinue2.setCollider("rectangle", 0, 0, 40, 20);
  
  buttonContinue3 = createSprite(1400,570);
  buttonContinue3.addImage("continueImg",continueImg);
  buttonContinue3.scale = 0.2;
  buttonContinue3.visible = false;
  buttonContinue3.setCollider("rectangle", 0, 0, 40, 20);
  
  buttonContinue4 = createSprite(1400,570);
  buttonContinue4.addImage("continueImg",continueImg);
  buttonContinue4.scale = 0.2;
  buttonContinue4.visible = false;
  buttonContinue4.setCollider("rectangle", 0, 0, 40, 20);
  
  buttonContinue5 = createSprite(1400,570);
  buttonContinue5.addImage("continueImg",continueImg);
  buttonContinue5.scale = 0.2;
  buttonContinue5.visible = false;
  buttonContinue5.setCollider("rectangle", 0, 0, 40, 20);
  
  anti = createSprite(1100,250);
  anti.addImage("antiImg",antiImg);
  anti.scale = 0.4;
  anti.visible = false;
  
  ion = createSprite(1100,250);
  ion.addImage("ionImg",ionImg);
  ion.scale = 0.4;
  ion.visible = false;
  
  liquid = createSprite(1100,250);
  liquid.addImage("liquidImg",liquidImg);
  liquid.scale = 0.4;
  liquid.visible = false;
  
  nuclear = createSprite(1100,250);
  nuclear.addImage("nuclearImg",nuclearImg);
  nuclear.scale = 0.4;
  nuclear.visible = false;
  
  sail = createSprite(1100,250);
  sail.addImage("sailImg",sailImg);
  sail.scale = 0.4;
  sail.visible = false;
  
  warp = createSprite(1100,250);
  warp.addImage("warpImg",warpImg);
  warp.scale = 0.4;
  warp.visible = false;
  
  going = createSprite(600,300);
  going.addImage("goingImg",goingImg);
  going.visible = false;
  
  
  statement = createSprite(1050,250);
  statement.addImage("state1",state1);
  statement.addImage("state2",state2);
  statement.addImage("state3",state3);
  statement.addImage("state4",state4);
  statement.addImage("state5",state5);
  statement.addImage("state6",state6);
  statement.scale = 0.4;
  statement.visible = false;
  
  earth = createSprite(-280,300);
  earth.addAnimation("earthImg",earthImg);
  earth.scale = 1.5;
  
  moon = createSprite(-70,-1000);
  moon.addAnimation("moonImg",moonImg);
  moon.scale = 1.5;
  
  asteroid = createSprite(-70,-1000);
  asteroid.addAnimation("asteroidImg",asteroidImg);
  asteroid.scale = 1;
  
  mars = createSprite(-70,-1000);
  mars.addAnimation("marsImg",marsImg);
  mars.scale = 1.5;
  
  saturn = createSprite(-70,-1000);
  saturn.addAnimation("saturnImg",saturnImg);
  saturn.scale = 1.5;
  
  ddt = createSprite(200,50);
  ddt.addAnimation('ddt1',ddt1);
  ddt.addAnimation('ddt2',ddt2);
  ddt.addAnimation('ddt3',ddt3);
  ddt.addAnimation('ddt4',ddt4);
  ddt.addAnimation('ddt5',ddt5);
  ddt.addAnimation('ddt6',ddt6);
  ddt.scale = 0.4;
  ddt.visible = false;
  
  
}

function draw() {
  background(0); 

  
  //Earth 
  if(gameState === EARTH){
    bg.changeAnimation("bgMoving",bgMoving);
    
    starship.changeAnimation("starship",starshipIMG);
    starship.scale = 0.25;
    
    statement.visible = true;
    statement.changeAnimation("state1",state1);
    ddt.visible = true;
    ddt.changeAnimation("ddt1",ddt1);
    
    //liquid
    if(statement.visible === true && gameState === EARTH && mousePressedOver(buttonContinue)){
      sState = S1;
      if(sState === S1){
        statement.x = 1400;
        statement.visible = false;
        buttonContinue.x = 1400;
        buttonContinue.visible = false;
        liquid.visible = true;
        buttonContinue2.visible = true;
        //buttonContinue2.velocityX = -2;
        buttonContinue2.x = 1100;
      }
      if(mousePressedOver(buttonContinue2) && sState === S1){
        sState = l;
      }
      if(sState === l){
        liquid.visible = false;
      }
      
    } 
  }
      // if(sState === S1 && buttonContinue2.x === 1100){
      //   sState = S2;
      //   buttonContinue2.velocityX = 0;
      // }
      
    // //state2
    // if(statement.visible === true && gameState === EARTH && mousePressedOver(buttonContinue2)){
    //   statement.changeAnimation("state3",state3);
    //   ddt.visible = true;
    //   ddt.changeAnimation("ddt1",ddt1);
    //   buttonContinue2.visible = false;
    //   buttonContinue2.x = 1400;
    //   if(sState === S2 && frameCount % 25 === 0){
    //     buttonContinue3.velocityX = -2;
    //     buttonContinue3.visible = true;
    //   }
    //   if(sState === S2 && buttonContinue2.x === 1100){
    //     sState = S3;
    //     buttonContinue3.velocityX = 0;
    //   }
    // }
    //  //state3
    // if(statement.visible === true && gameState === EARTH && mousePressedOver(buttonContinue3)){
    //   statement.visible = false;
    //   liquid.visible = true;
    //   buttonContinue3.visible = false;
    //   buttonContinue3.x = 1400;
    //   if(sState === S3 && frameCount % 25 === 0){
    //     buttonContinue4.velocityX = -2;
    //     buttonContinue4.visible = true;
    //   }
    //   if(sState === S3 && buttonContinue2.x === 1100){
    //     sState = S4;
    //     buttonContinue4.velocityX = 0;
    //   }
    // }  
    // //li
    // if(liquid.visible === true && mousePressedOver(buttonContinue4) && gameState === EARTH){
    //   liquid.visible = false;
    //   buttonContinue4.visible = false;
    //   buttonContinue4.x = 1400;
    //   spawnQuestions();
    //   // if(gameState === EARTH && frameCount % 25 === 0){
    //   //   buttonTrue.x = 1050;
    //   //   buttonTrue.visible = true;
    //   //   buttonFalse.x = 1150;
    //   //   buttonFalse.visible = true;
    //   // }
    //   if(sState === S4 && frameCount % 25 === 0){
    //      buttonTrue.velocityX = -2;
    //      buttonTrue.visible = true;
    //      buttonFalse.velocityX = -2;
    //      buttonFalse.visible = true;
    //   }
    //   if(sState === S4 && buttonTrue.x === 1050){
    //     sState = Sm;
    //     buttonTrue.velocityX = 0;
    //   }
    //   if(sState === S4 && buttonFalse.x === 1150){
    //     sState = Sm;
    //     buttonFalse.velocityX = 0;
    //   }
    // }
    
  //cor
  if(gameState === EARTH && qState === True && mousePressedOver(buttonTrue)){
    statement.visible = true;
    statement.changeAnimation("statementC",statementC);
    gameState = flameCoast;
  }
  //inc
  if(qState === True && mousePressedOver(buttonFalse)){
    statement.visible = true;
    statement.changeAnimation("statementI",statementI);
    spawnQuestions();
  }
  //cor
  if(qState === False && mousePressedOver(buttonFalse)){
    statement.visible = true;
    statement.changeAnimation("statementC",statementC);
    gameState = flameCoast;
  }
  //inc
  if(qState === False && mousePressedOver(buttonTrue)){
    statement.visible = true;
    statement.changeAnimation("statementI",statementI);
    spawnQuestions();
  }
  
  if(earth.x >= 1000 && gameState === flameCoast){
      earth.velocityY = 0;
  }
  
  //Flame Coast 
  if(gameState === flameCoast){
    starship.changeAnimation("flame",starshipFlame);
    starship.scale = 0.4;
      
    earth.velocityY = 10;
    //time
    if (gameState === flameCoast && frameCount % 100 === 0) {
      moon.velocityY = 10;
    }
      
  }
  
  if(gameState === flameCoast && moon.y === 300){
    gameState = MOON;
  }
  
  //moon
  if(gameState === MOON){
    moon.velocityY = 0;
    
    statement.visible = true;
    statement.changeAnimation("state4",state4);
    
    buttonContinue2.visible = false;
    buttonContinue2.x = 1400;
    buttonContinue.x = 1100;
    buttonContinue.visible = true;
    
    
    starship.changeAnimation("starship",starshipIMG);
    starship.scale = 0.25;
    
    if(gameState === MOON && mousePressedOver(buttonContinue)){
      gameState = moCoast;
    }
  }
  
  //moCoast
  if(gameState === moCoast){
    statement.visible = false;
    going.visible = true;
    
    moon.x = -70;
    earth.x = 300;
    
    if(gameState === moCoast && frameCount % 50 === 0){
      statement.visible = true;
      statement.changeAnimation("state5",state5);
    }
  }
  
  console.log(frameCount % 50);  
  
  drawSprites();
}
