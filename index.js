const violets = document.querySelectorAll(".violet");
const greys = document.querySelectorAll(".grey");
const yellows = document.querySelectorAll(".yellow");
const pinks = document.querySelectorAll(".pink");
const body = document.querySelector("body");


violets.forEach((e) => e.addEventListener("click", handleVioletClick));
greys.forEach((e) => e.addEventListener("click", handleGreyClick));
yellows.forEach((e) => e.addEventListener("click", handleYellowClick));
pinks.forEach((e) => e.addEventListener("click", handlePinkClick));

  let counter = 0;
  let randomColor = "";
  let randomColor2 = "";
  let randomColor3 = "";
  let randomColor4 = "";
  let randomColor5 = "";

function createColors(){
  randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  randomColor4 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  randomColor5 = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function myMOve0(){
  violets.forEach((e)=> e.style.setProperty("animation", "mymove0 5s"));   
  greys.forEach((e)=> e.style.setProperty("animation", "mymove0 5s"));
  
  yellows.forEach((e)=> e.style.setProperty("animation", "mymove0 5s"));
  pinks.forEach((e)=> e.style.setProperty("animation", "mymove0 5s"));
}

function myMOve01(){
  violets.forEach((e)=> e.style.setProperty("animation", "mymove01 5s"));   
  greys.forEach((e)=> e.style.setProperty("animation", "mymove01 5s"));
  
  yellows.forEach((e)=> e.style.setProperty("animation", "mymove01 5s"));
  pinks.forEach((e)=> e.style.setProperty("animation", "mymove01 5s"));
}

function myMOve02(){
  violets.forEach((e)=> e.style.setProperty("animation", "mymove02 5s"));   
  greys.forEach((e)=> e.style.setProperty("animation", "mymove02 5s"));
  
  yellows.forEach((e)=> e.style.setProperty("animation", "mymove02 5s"));
  pinks.forEach((e)=> e.style.setProperty("animation", "mymove02 5s"));
}


function myMOve03(){
  violets.forEach((e)=> e.style.setProperty("animation", "mymove03 5s"));   
  greys.forEach((e)=> e.style.setProperty("animation", "mymove03 5s"));
  
  yellows.forEach((e)=> e.style.setProperty("animation", "mymove03 5s"));
  pinks.forEach((e)=> e.style.setProperty("animation", "mymove03 5s"));
}

function myMOve04(){
  violets.forEach((e)=> e.style.setProperty("animation", "mymove04 5s"));   
  greys.forEach((e)=> e.style.setProperty("animation", "mymove04 5s"));
  
  yellows.forEach((e)=> e.style.setProperty("animation", "mymove04 5s"));
  pinks.forEach((e)=> e.style.setProperty("animation", "mymove04 5s"));
}

function myMOve05(){
  violets.forEach((e)=> e.style.setProperty("animation", "mymove05 5s"));   
  greys.forEach((e)=> e.style.setProperty("animation", "mymove05 5s"));
  
  yellows.forEach((e)=> e.style.setProperty("animation", "mymove05 5s"));
  pinks.forEach((e)=> e.style.setProperty("animation", "mymove05 5s"));
}


function myMOve(){
    violets.forEach((e)=> e.style.setProperty("animation", "mymove 5s"));   
    greys.forEach((e)=> e.style.setProperty("animation-name", "mymove 5s"));
    yellows.forEach((e)=> e.style.setProperty("animation", "mymove 5s"));
    pinks.forEach((e)=> e.style.setProperty("animation", "mymove 5s"));
}

function myMOve2(){
      violets.forEach((e)=> e.style.setProperty("animation", "mymove2 5s"));   
      greys.forEach((e)=> e.style.setProperty("animation", "mymove2 5s"));
      yellows.forEach((e)=> e.style.setProperty("animation", "mymove2 5s"));
      pinks.forEach((e)=> e.style.setProperty("animation", "mymove2 5s"));
}


function changeColors(){
  violets.forEach((e)=> e.style.setProperty("background-color", randomColor));
  greys.forEach((e)=> e.style.setProperty("background-color", randomColor2));
  yellows.forEach((e)=> e.style.setProperty("background-color", randomColor3));
  pinks.forEach((e)=> e.style.setProperty("background-color", randomColor4));
  body.style.setProperty("background-color", randomColor5);
}




function clickedBehavior(clickedColor){

  switch(clickedColor){
    case violets:
      if(counter%2===0){
        myMOve();
        clickedColor.forEach((e)=> e.style.setProperty("animation", "borderChanger 5s"));
        setTimeout(() => {clickedColor.forEach((e)=> e.style.setProperty("border-radius", "50%"))}, "5000");
    
      }else{
        myMOve2();
        clickedColor.forEach((e)=> e.style.setProperty("animation", "borderChanger2 5s"));
        setTimeout(() => {clickedColor.forEach((e)=> e.style.setProperty("border-radius", "0%"))}, "5000");
        
      }
      break;
    case greys:
      if(counter%2===0){
        myMOve0();
        clickedColor.forEach((e)=> e.style.setProperty("animation", "borderChanger 5s"));
        setTimeout(() => {clickedColor.forEach((e)=> e.style.setProperty("border-radius", "50%"))}, "5000");
    
      }else{
        myMOve01();
        clickedColor.forEach((e)=> e.style.setProperty("animation", "borderChanger2 5s"));
        setTimeout(() => {clickedColor.forEach((e)=> e.style.setProperty("border-radius", "0%"))}, "5000");
        
      }
      break;
    case yellows:
        if(counter%2===0){
          myMOve02();
          clickedColor.forEach((e)=> e.style.setProperty("animation", "borderChanger 5s"));
          setTimeout(() => {clickedColor.forEach((e)=> e.style.setProperty("border-radius", "50%"))}, "5000");
      
        }else{
          myMOve03();
          clickedColor.forEach((e)=> e.style.setProperty("animation", "borderChanger2 5s"));
          setTimeout(() => {clickedColor.forEach((e)=> e.style.setProperty("border-radius", "0%"))}, "5000");
          
        }
        break;
      case pinks:
          if(counter%2===0){
            myMOve04();
            clickedColor.forEach((e)=> e.style.setProperty("animation", "borderChanger 5s"));
            setTimeout(() => {clickedColor.forEach((e)=> e.style.setProperty("border-radius", "50%"))}, "5000");
        
          }else{
            myMOve05();
            clickedColor.forEach((e)=> e.style.setProperty("animation", "borderChanger2 5s"));
            setTimeout(() => {clickedColor.forEach((e)=> e.style.setProperty("border-radius", "0%"))}, "5000");
            
          }
          break;


  }
  

  
  

}


function handleVioletClick(){
  
    counter++;
    console.log(randomColor);
    
    createColors();
    changeColors();
    clickedBehavior(violets);         
}

function handleGreyClick(){
  counter++;
  console.log(randomColor);
  
  createColors();
  changeColors();
  clickedBehavior(greys);

}

function handleYellowClick(){
  counter++;
  console.log(randomColor);
  
  createColors();
  changeColors();
  clickedBehavior(yellows);

}

function handlePinkClick(){
  counter++;
  console.log(randomColor);
  
  createColors();
  changeColors();
  clickedBehavior(pinks);

}

