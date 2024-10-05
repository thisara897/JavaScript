document.getElementById("submitButton").onclick =function(){
    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById("tempLable").innerHTML = temp + "°c";
    }

    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenhit(temp);
        document.getElementById("tempLable").innerHTML = temp + "°f";

    }
    else{
        alert("Choose an option");
    }
}



function toCelcius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenhit(temp){
    return temp * 9/5 + 32;
}