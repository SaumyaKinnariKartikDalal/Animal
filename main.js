function start(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/SpWCHaQr2/model.json", modelLoaded)
}

function modelLoaded(){
    console.log("Model Loaded");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("label").innerHTML = "I can Hear - "+ results[0].label;
        document.getElementById("confidence").innerHTML = "I can Hear - "+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("label").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("confidence").style.color = "rgb("+r+","+g+","+b+")";

        A1 = document.getElementById("A1");

        if (results[0].label == "Elephant"){
            A1.src = "Elephant.png";

        }
        else if (results[0].label == "Dog"){
            A1.src = "Dog.png";

        }
        else if (results[0].label == "Cat"){
            A1.src = "Cat.png";

        }
        else if (results[0].label == "Tiger"){
            A1.src = "Tiger.png";

        }
        else{
            A1.src = "Ear.png";

        }
    }
}
