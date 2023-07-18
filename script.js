function findRand(){
    var i=Math.random()*6;
    i=Math.floor(i)+1;
    return i;
}
function play(){
    var d1=findRand();
    var d2=findRand();
    document.querySelector("#d1 img").setAttribute("src","images/dice"+d1+".png");
    document.querySelector("#d2 img").setAttribute("src","images/dice"+d2+".png");
    console.log("d1 = ");
    if(d1>d2){
            document.querySelector("h1").textContent="Player 1 Wins";
    }
    else if(d1<d2){
        document.querySelector("h1").textContent="Player 2 Wins";
    }
    else{
        document.querySelector("h1").textContent="Draw";
    }
}