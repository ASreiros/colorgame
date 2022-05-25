
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

const colorArr = ["red", "orange", "yellow", "green", "lightblue", "blue", "purple", "black", "white", "pink", "gray", "brown"]
let rightColor = colorArr[0]

const btn = document.querySelector("button")
console.log(btn);

btn.addEventListener("click", ()=>{
    const nr = rand(0, colorArr.length-1)
    rightColor = colorArr[nr]
    let sound = new Audio(`./assets/sound/${rightColor}.mp3`)
    sound.play()
    
})






const divColorArr = document.querySelectorAll(".color")

for (let i = 0; i < divColorArr.length; i++) {
    const div = divColorArr[i]
    div.style.backgroundColor=`${colorArr[i]}`
    // div.style.filter="brightness(90%)"
    div.addEventListener("click", (e)=>{
        if(e.target.style.backgroundColor===rightColor){
            console.log("Horay");
        } else{
            console.log("nope");
        }
        
    })
    
}
