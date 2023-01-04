function start(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/SpWCHaQr2/model.json", modelLoaded)
}

function modelLoaded(){
    console.log("Model Loaded");
    classifier.classify(gotResults);
}
