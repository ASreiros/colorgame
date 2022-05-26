
//0 red
//1 orange
//2 yellow
//3 green
//4 light-blue
//5 blue
//6 purple
//7 black
//8 white
//9 pink
//10 gray
//11 brown


function rand(min, max) {
    min = Math.ceil(Number(min));
    max = Math.floor(Number(max));
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let previous;





const colorArr = ["red", "orange", "yellow", "green", "lightblue", "blue", "purple", "black", "white", "pink", "gray", "brown"]
let rightColor = colorArr[0]

let victorySound = new Audio(`./assets/sound/Lru/end/victory.mp3`)
let failSound = new Audio(`./assets/sound/Lru/end/fail.mp3`)
let volume = document.querySelector("#volume").value


function startGame(){
    document.querySelector("#modal").style.display="none";
    const nr = rand(0, colorArr.length-1)

    while (nr === previous) {
        nr = rand(0, colorArr.length-1)
    }

    volume = document.querySelector("#volume").value
    console.log(volume);
    rightColor = colorArr[nr]
    let sound = new Audio(`./assets/sound/Lru/${rightColor}L.mp3`)
    sound.volume = volume/10;
    sound.play()
    
}

document.querySelector("button").addEventListener("click", startGame)





const divColorArr = document.querySelectorAll(".color")

for (let i = 0; i < divColorArr.length; i++) {
    const div = divColorArr[i]
    div.style.backgroundColor=`${colorArr[i]}`
    div.addEventListener("click", (e)=>{
        if(e.target.style.backgroundColor===rightColor){
            document.querySelector("#modal").style.display="flex";
            victorySound.volume = volume/10;
            victorySound.play();
            setTimeout(startGame, 3000);
        } else{
            console.log("nope");
            failSound.volume = volume/10;
            failSound.play();
        }
        
    })
    
}
