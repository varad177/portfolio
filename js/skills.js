let num = document.getElementById("javaper");
 let count = 0 ;
 setInterval(() =>{
    if (count == 90){
        clearInterval();
    }
    else{
        count += 1;
        num.innerHTML = count + "%";
    }
 } , 10)