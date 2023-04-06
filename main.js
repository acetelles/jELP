function speak(){
    
    setTimeout(function()
    {
        img_id = "result1";
        speak_data = "tomando tu selfie en 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        take_snapshot();
        save();
    }, 5000);

    setTimeout(function()
    {
        img_id = "result2";
        speak_data = "tomando tu selfie en 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        take_snapshot();
    }, 10000);

    setTimeout(function()
    {
        img_id = "result3"; 
        speak_data = "tomando tu selfie en 15 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        take_snapshot();
        save();
    }, 15000);


}

var img_id = ("result1").value; //help no se q hice aqui XD

function take_snapshot() {
    Webcam.snap(function(data_uri){ 
        if(img_id=="result1"){
        document.getElementById("result").innerHTML = '<img id="selfie1" src="' + data_uri + '">'
    }
    if(img_id=="result2"){
        document.getElementById("result").innerHTML = '<img id="selfie2" src="' + data_uri + '">'
    }
    if(img_id=="result3"){
        document.getElementById("result").innerHTML = '<img id="selfie3" src="' + data_uri + '">'
    }
    });
}

Webcam.attach(camera);
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

