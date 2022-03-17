var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas,arestas2,arestas3,arestas4;
var music;

function preload(){
    // carregue o som aqui
    music = loadSound('music.mp3')
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(510,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(725,580,200,30);
    bloco4.shapeColor = "green";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 10
    bola.velocityY = 10

    arestas=createSprite(0,300,10,600);
    arestas2=createSprite(800,300,10,600);
    arestas3=createSprite(400,0,800,10);
    arestas4=createSprite(0,300,10,600);

}

function draw() {
    background(rgb(169,169,169));
    
    bola.bounceOff(arestas);

   
    bola.bounceOff(arestas2);

   
    bola.bounceOff(arestas3);

    
    bola.bounceOff(arestas4);

    // bola.bounceOff(bloco1)

    // bola.bounceOff(bloco2)

    // bola.bounceOff(bloco3)

    // bola.bounceOff(bloco4)
    
    //escreva o código de ricochete de bola para bloco1 
    if(bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bola.bounceOff(bloco2)){
        bola.shapeColor = "orange";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 0
        bola.velocityY = 0
        //escreva o código para parar a música
        music.stop()
    }

    //escreva o código de ricochete de bola para bloco3
    if(bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        music.play();
    }
    //escreva o código de ricochete de bola para bloco4
    if(bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        music.play();
    }
    drawSprites();
}