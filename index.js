
document.getElementById("submitbtn").onclick = function(){
    let temp;

    if(document.getElementById("cbtn").checked){
        temp = document.getElementById("tempbox").value;
        temp = Number(temp);
        temp = tocelsius(temp);
        document.getElementById("templabel").innerHTML = temp + "c"
    }
     
    else if(document.getElementById("fbtn").checked){
        temp = document.getElementById("tempbox").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById("templabel").innerHTML = temp + "f"

     }

    else{document.getElementById("templabel").innerHTML = "Select a unit";
}



    }

function tocelsius(temp){
    return(temp-32) * (5/9);
}
function tofahrenheit(temp){
    return temp * 9 / 5 + 32;
}