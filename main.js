function startclassifiction(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/I_pyJEsW5/model.json',modelReady)
}
function modelReady(){
    classifier.classify(gotresult)
}
function gotresult(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("result_label").innerHTML=results[0].label
    document.getElementById("result_confidence").innerHTML=(results[0].confidence*100).toFixed(3)
img=document.getElementById('a1')
img1=document.getElementById('a2')
img2=document.getElementById('a3')
img3=document.getElementById('a4')
if(results[0].label=="clap"){
    img.src='aliens-01.gif'
    img1.src='aliens-02.png'
    img2.src='aliens-03.png'
    img3.src='aliens-04.png'
}
if(result[0].label=="whistle"){
img.src='aliens-01.png'
img1.src='aliens-02.gif'
img2.src='aliens-03.png'
img3.src='aliens-04.png'
}
else{
    img.src='aliens-01.png'
    img1.src='aliens-02.png'
    img2.src='aliens-03.gif'
img3.src='aliens-04.png'
}}
}