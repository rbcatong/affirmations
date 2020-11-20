function todaysDate(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById('date').innerHTML = date;
    console.log(today,date)
}

function sendOutAffirmation(){
    document.getElementById('linesOfAffirmation').style.display = 'block';
   
    let mixOfAffirmations = ['You are pretty', 'You can do it!','Great job']

    let randomIndex = Math.floor(Math.random() * mixOfAffirmations.length);
    document.getElementById('linesOfAffirmation').innerHTML = mixOfAffirmations[randomIndex]
 
   
}   