Webcam.set({
    width: 385,
    height:300,
    image_format:"png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot(){
    
    Webcam.snap(function(data_url)
    {document.getElementById("result").innerHTML = '<img id= "object_image" src= "'+data_url+'">';});

}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hvhtNDXEf/model.json',modelLoaded)


function modelLoaded() {
    console.log("Model is loaded");
}


function check() {
    console.log("we are checking");
    img = document.getElementById("object_image");
    console.log("nickname is defined");
    classifier.classify(img, go_Results);
}

function go_Results(error, results) {
    console.log("function called");
    if (error) {
        console.log("my_error");
        console.error(error);
    } 
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }}