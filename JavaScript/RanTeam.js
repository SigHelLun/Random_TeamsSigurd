function runList() 
{
    const Names = document.getElementById('group').value;
    const spliter = Names.split(",")
    numName = spliter.length + 1
    
    
    const amountInt = document.getElementById('amount').value;
    const groupAmount = parseInt(amountInt);


    groupname = Math.floor(numName / groupAmount);
    shuffle(spliter);

    console.log(groupname);


    const groups = [];
    
    
    //fisher yates shuffle algoritm så me fant på https://bost.ocks.org/mike/shuffle/ 3eie løsning
    function shuffle(array) {
        var m = array.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      };
    //

    for (let i = 0; i < groupAmount; i++) {
        const startIdx = i * groupname;
        const endIdx = (i + 1) * groupname;
        const currentGroup = spliter.slice(startIdx, endIdx);
        
        groups.push(currentGroup);
    };

    //groups split
    console.log(groups);
    //deler opp alle groups i paragraphs
    const svarDiv = document.getElementById('svar');
    svarDiv.innerHTML = ""; //innerhtml

    groups.forEach((group, index) => {
        const header = document.createElement('h3');
        header.textContent = `Group ${index + 1}`; // Add a header for the group

        const p = document.createElement('p');
        p.textContent = group.join(', ');

        svarDiv.appendChild(header);
        svarDiv.appendChild(p);
    });

}
