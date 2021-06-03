Webcam.set(
    {
        width:350,
        height:300,
        image_format:'png',
        png_quality:90
    }
);

Webcam.attach('#camera');
camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RAsmaU7S1/model.json',modelLoaded());
console.log('ml5version:',ml5.version);

function modelLoaded(){
    console.log('modelLoaded');
}
