//dette er funksjonen som eg bruker når en person trykker på knappen med onclick som er sotte til runlist
function runList() 
{
    //const name henter group fra HTML med getelementbyid spesifikt valuen
    const Names = document.getElementById('group').value;
    const spliter = Names.split(",")
    //numName er kor mange navn som blir skreve opp +1 på grunn av at den teller spliter å ikkje group
    //eg vagte å gjere det sånn å det ser ut som det fungerer fint
    numName = spliter.length + 1
    
    //henter amount fra html med getelementbyid å setter det til constanten amount 
    const amount = document.getElementById('amount').value;
    //setter amount igjennom parseint som transelerer det til integer som blir til const groupamount
    const groupAmount = parseInt(amount);

    //groupname gjer sånn at numname / på groupamount så number på namn og mengde gruppe delt på kvarandre får kor mången på kvar gruppe
    groupname = Math.floor(numName / groupAmount);
    //shuffle kaller fisher yates algoritmen til å gjer alle navnene på en random plass i array listo
    shuffle(spliter);

    //setter groups til tom array
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
      // slutt av fisher yates algoritmen

    // for så lenge i er mindre en group amount kjør koden kvar gong +1 på i. 
    for (let i = 0; i < groupAmount; i++) {
        //const end idx og start idx tar group name som er totalen av ka så ska være i kvar gruppe å endrer det etter start å slutt.
        //lager ny array fra slice det er currentgroup som gjer
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
    //går igjennom gruppene og setter følgende. oppretter h3 element lager en group textcontent + 1 index
    //const p lager p paragraph som adder textcontent nedenfor i textcontent så fjerner han , fra group og deler heller med |
    // så sender ut svare for kvar gruppe i egen <p>
    groups.forEach((group, index) => {
        const header = document.createElement('h3');
        header.textContent = `Group ${index + 1}`; // Add a header for the group

        const p = document.createElement('p');
        p.textContent = group.join(' | ');

        svarDiv.appendChild(header);
        svarDiv.appendChild(p);
    });

}
