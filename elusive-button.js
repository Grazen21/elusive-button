//count the number of hovers
let hoverCount= 0;
let status= false;


//function for completion
start = () => {
    document.getElementById("p").innerHTML= "Congrats, you've finally passed the test";
    document.getElementById("img").src= "https://image.freepik.com/free-vector/congrats-greeting-card_53876-82116.jpg";
    document.getElementById("button").style.display= "none";
};


//function for movement and dialog upon hover
hover = () => {
    if (status== false)
        if (hoverCount> 12) {
            return null
        }
        else if (hoverCount== 12) {
            document.getElementById("p").innerHTML += " .Enough, I'm already tired! I'll stop running so click me.";
            hoverCount += 1;
        } 
        else {
            let x= -1;
            let y= -1;
            while (x< 0) {
                x= Math.floor(Math.random()* window.innerWidth)- 100;
            };
            while (y< 0) {
                y= Math.floor(Math.random()* window.innerHeight)- 200;
            };
            document.getElementById("p").innerHTML += " Ha";
            document.getElementById("button").style.marginLeft=  x+ "px";
            document.getElementById("button").style.marginTop= y+ "px";
            hoverCount += 1;
        }
}