var numCliques = 0;

function clique(){
    numCliques++;
    console.log(numCliques);
    document.getElementById("printNum").innerHTML = numCliques;
}

function reduce(){
    numCliques--;
    console.log(numCliques);
    document.getElementById("printNum").innerHTML = numCliques;
}

function reset(){
    numCliques = 0;
    console.log(numCliques);
    document.getElementById("printNum").innerHTML = numCliques;
}

function multiply(){
    numCliques *= 2;
    console.log(numCliques);
    document.getElementById("printNum").innerHTML = numCliques;
}