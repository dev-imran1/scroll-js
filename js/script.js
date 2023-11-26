let bar = document.querySelector(".bar");
let round = document.querySelector(".round");
let span = document.querySelector(".round span");


function handelbar(){
    const scrooly = window.scrollY;
    const windowHight = window.innerHeight;

    const documentHight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
    )


    const scrollParcentage = (scrooly / ( documentHight - windowHight)) *100 ;
    const finalValue = scrollParcentage.toFixed(0);
    // console.log(finalValue);
    bar.style.width = `${finalValue}%`; 
    // roundvalue = Math.floor(finalValue);
    // console.log(roundvalue);
    span.innerHTML = `${finalValue}%`
}
handelbar()

window.addEventListener("scroll",handelbar)