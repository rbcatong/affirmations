document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('date').innerHTML = date;
    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
    document.getElementById('date').innerHTML = date;
})


function sendOutAffirmation(){
    document.getElementById('linesOfAffirmation').style.display = 'block';
   
    let mixOfAffirmations = ['You are pretty', 'You can do it!','Great job', 'You are amazing'] 

    let randomIndex = Math.floor(Math.random() * mixOfAffirmations.length);
    document.getElementById('linesOfAffirmation').innerHTML = mixOfAffirmations[randomIndex]
 
   
}   