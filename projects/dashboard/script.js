document.addEventListener("DOMContentLoaded", ()=>{

  document.getElementById("dark-switch").onclick = ()=>{
    var elems = document.body.getElementsByTagName("*");
    for (let i=0; i<elems.length; i++){
      elems[i].classList.toggle("dark")
    }
    document.querySelector("body").classList.toggle("dark")
  }
  
});