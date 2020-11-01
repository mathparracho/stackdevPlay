function go(){
    var numeros = document.getElementById("adultos").value;
    alert(numeros);
    console.log(numeros);
}


var count = 0;
function minhoca(){
    document.getElementById("minhoca").innerHTML = count;
    count++;
    console.log(count);
}

var count2 = 0;
var fwrd = true;
var lst = []
var len = 200;

function minhoca2(){
    for (var j = 0; j < len; j++){
        lst.push(".")
    }
    
        if (count2 == lst.length-1 && fwrd == true){
            fwrd = false;
        }
        if (count2 == 0 && fwrd == false){
            fwrd = true;
        }
        if (fwrd == true) count2++;
        else count2--;

        var str = "";
        lst[count2] = "<>";
        for (var i = 0; i < lst.length; i++){
            str += lst[i];
        }
        document.getElementById("minhoca2").innerHTML = str;
        lst = [];
}

function vai(){
    var numeros = document.getElementById("serviceQual").value;
    alert(numeros);
    console.log(numeros);

    var myVar = setInterval(myTimer, 1000);
    var myVar2 = setInterval(minhoca, 1000);
    var myVar2 = setInterval(minhoca2, 5);
    
}

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
  }

