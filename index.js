function sendOutAffirmation(){
    document.getElementById('linesOfAffirmation').style.display = 'block';
   
    let mixOfAffirmations = ['You are pretty', 'You can do it!','Great job']

    for(let i=0; i < mixOfAffirmations.length; i++){
        //show each element 
        console.log(mixOfAffirmations[i])
        document.getElementById('linesOfAffirmation').innerHTML = mixOfAffirmations[i]
        document.getElementById('linesOfAffirmation').innerHTML = mixOfAffirmations[i]
        document.getElementById('linesOfAffirmation').innerHTML = mixOfAffirmations[i]

        // consoles all 3 at the same time ... 
        //loop AND KEEP Pushing out the lines 
        
    }
}   