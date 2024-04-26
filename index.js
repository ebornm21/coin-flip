document.getElementById("mode").addEventListener("click", function() {
    document.body.style.background = "aliceblue";
    document.body.style.color = "black";
})

document.getElementbyId("column").addEventListener("click", function () {
    var heads = prompt('What should we call the "Heads" column?');
    var tails = prompt('What should we call the "Tails" column?');
    document.getElementById("heads").textContent=heads;
    document.getElementById("tails").textContent=tails;
})

document.getElementById("coin").addEventListener("click", function () {
    var flip = new Audio("images/Flip-Sound.mp3");
    var flipResult = Math.floor(Math.random() * 2 + 1);

    if (flipResult === 1) {
        document.querySelector("h1").innerHTML = "Flipping...";
        flip.play();
        setTimeout(function () {
            document.querySelector("h1").innerHTML = "It's heads!";
            document.getElementById("coin").src = "images/Heads.png";
            var headsScore = document.getElementById("heads-score").innerText;
            var newHeadsScore = Number(headsScore) + 1;
            document.getElementById("heads-score").innerText = newHeadsScore;
        }, 1000);        
    } else if (flipResult === 2) {
        document.querySelector("h1").innerHTML = "Flipping...";
        flip.play();
        setTimeout(function () {
            document.querySelector("h1").innerHTML = "It's tails!";
            document.getElementById("coin").src = "images/Tails.png";
            var tailsScore = document.getElementById("tails-score").innerText;
            var newTailsScore = Number(tailsScore) + 1;
            document.getElementById("tails-score").innerText = newTailsScore;  
        }, 1000);
    }
})
