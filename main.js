function startidentification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    soundmodel = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3GwDUifuV/model.json", modelloaded);
}

function modelloaded() {
    soundmodel.classify(getresults);
}

function getresults(error, results) {
    if (error) {
        console.error(error);
    } else {

        console.log(results);
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100) + "%";
        alien1 = document.getElementById("alien1");
        alien2 = document.getElementById("alien2");
        alien3 = document.getElementById("alien3");
        alien4 = document.getElementById("alien4");
    }


    if (results[0].label == "Whistle") {
        alien1.src = "aliens-01.gif";
        alien2.src = "aliens-02.png";
        alien3.src = "aliens-03.png";
        alien4.src = "aliens-04.png";
    }


    if (results[0].label == "Violin") {
        alien1.src = "aliens-01.png";
        alien2.src = "aliens-02.gif";
        alien3.src = "aliens-03.png";
        alien4.src = "aliens-04.png";
    }


    if (results[0].label == "Clapping") {
        alien1.src = "aliens-01.png";
        alien2.src = "aliens-02.png";
        alien3.src = "aliens-03.gif";
        alien4.src = "aliens-04.png";
    }


    if (results[0].label == "Background Noise") {
        alien1.src = "aliens-01.png";
        alien2.src = "aliens-02.png";
        alien3.src = "aliens-03.png";
        alien4.src = "aliens-04.gif";
    }
}