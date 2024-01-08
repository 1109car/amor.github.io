const contenedor  = document.querySelector(".container")
const si = document.querySelector(".si")
const azul = document.querySelector(".azul")

si.addEventListener("click",()=>{
 
        si.style.left =  Math.floor(Math.random()*400)+"px";
//       const azul = document.querySelector(".azul")
setTimeout(()=>{
        azul.style.display="flex";
},700)
setTimeout(()=>{
        azul.textContent="'Ya Perdonemeeeeeee'"
},7000)



//       azul.textContent="jjjjj"
    //  const azul = document.querySelector(".azul")
        si.style.bottom=Math.floor(Math.random()*400)+"px";
})
