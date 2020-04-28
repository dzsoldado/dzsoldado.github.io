

document.getElementById("submit").onclick = ()=>{
  
  var inpts= document.getElementsByTagName("input");

  for(let i=0; i<inpts.length; i++){
    document.getElementsByTagName("label")[i].style.display = "none"
    inpts[i].classList.remove("error-input")

    inpts[i].oninvalid = ()=>{
      document.getElementsByTagName("label")[i].style.display = "inline"
      inpts[i].classList.add("error-input")
    }
    
  }
}






