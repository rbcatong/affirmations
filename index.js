function sendOutAffirmation(){
    document.getElementById('linesOfAffirmation').style.display = 'block';
   
    let mixOfAffirmations = ['You are pretty', 'You can do it!','Great job']
    for(i=0; i < mixOfAffirmations.length; i++){
        //show each element 
        document.getElementById('linesOfAffirmation').innerHTML = mixOfAffirmations[i]
        //loop AND KEEP Pushing out the lines 
        
    }
}   