function sendOutAffirmation(){
    document.getElementById('linesOfAffirmation').style.display = 'block';
   
    let mixOfAffirmations = ['You are pretty', 'You can do it!']
    for(i=0; i < mixOfAffirmations.length; i++){
        //show each element 
        document.getElementById('linesOfAffirmation').innerHTML = mixOfAffirmations[i]
        console.log(mixOfAffirmations[i])
    }
}   