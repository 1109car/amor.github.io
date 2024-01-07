const contenedor  = document.querySelector(".container")
const si = document.querySelector(".si")
const cont = 0

si.addEventListener("click",()=>{
 
        si.style.left =  Math.floor(Math.random()*400)+"px";
    //     si.classList.add('azul')
    //  const azul = document.querySelector(".azul")
        si.style.bottom=Math.floor(Math.random()*400)+"px";

    

})