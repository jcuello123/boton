let skittleColors = ["#f9ebe0", "#c0043f", "#441349", "#048207", "#f1be02", "#e64808"]

function changeBackground(){
    let body = document.getElementById("body")
    let skittleColor = getRandomColor()
    body.style.backgroundColor = skittleColor  

}
function getRandomColor(){
    return skittleColors[Math.floor(Math.random() * skittleColors.length)]


}