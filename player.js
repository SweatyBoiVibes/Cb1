function Player(){

i.hide()
t.hide()
b.hide()

var name = i.value()
greet = createElement("h1")
greet.html("welcome "+name)
greet.position(100,150)


pc = pc+1
 Link = pc
 
db.ref("/").update({PC: pc})

db.ref("players/player"+pc).set({y: 500, index:pc })
}

function Reset(){

db.ref("/").update({

    Gamestate : 0,
    PC: 0, 
    Rank: 0
})
db.ref("players").remove()

}