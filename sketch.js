var pc = 0
var gs = 0
var db
var b
var i
var t
var c1
var c2
var Allp
var Link = 0
var cars = []
var hi
var a
var track
var r
var greet
var rank = 0
var crossed = 0

function preload(){

  hi = loadImage("Class 41/Car1.png")
a = loadImage("Class 41/Car2.png")
track = loadImage("Class 41/track.jpg")


}








function setup() {
  createCanvas(displayWidth,displayHeight-50);

  db = firebase.database()
db.ref("Gamestate").on("value", function (data){

gs = data.val()


})

db.ref("Rank").on("value", function (data) {

rank = data.val()

} )

c1 = createSprite(200,200,50,50)
c2 = createSprite(200,200,50,50)

c1.addImage("car",hi)
c2.addImage("car2",a)


cars = [c1,c2]
c1.scale = 2
c2.scale = 2
db.ref("PC").on("value", function (data){


  pc = data.val()
})

b = createButton("Click hear")
  b.position(50,100)
i = createInput()
i.position(10,70)

t = createElement("h1")
t.html("Car Game")
t.position(50,130)


b.mousePressed(Player)

r = createButton("Reset")
r.position(30,230)
r.mousePressed(Reset)

}



function draw() {  
if(Allp === undefined&&gs === 1){

db.ref("players").on("value", function(data){

  Allp = data.val()
})


}

if (pc ===2){

  db.ref("/").update({

    Gamestate:1
  })


}


if (keyDown ("up")){

  cars[Link-1].y -=5
db.ref("players/player"+Link).update({

  y:cars[Link-1].y

})
} 



if(gs ===1){
  greet.hide()
r.hide()
image(track, 0, -displayHeight,displayWidth, displayWidth*5)
  var x = 500
var index = 0
for(var i in Allp)
{

cars[index].x = x
x = x+630

cars[index].y = Allp[i].y
if(index===Link-1){

  fill ("green")
ellipse(cars[Link-1].x, cars[Link-1].y,120,130)

  camera.position.y = cars[index].y

}

if(cars[Link-1].y<-825 && crossed===0){

//db.ref("/").update({

//Gamestate:2


//})
crossed = 1
rank ++
db.ref("/").update({

  Rank : rank
})
alert1 = alert("Awesome your rank is"+ rank)

}


index++
}
  drawSprites();
}

if(gs === 2){


}



}



