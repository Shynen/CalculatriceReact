import React, { useState } from 'react'
import "../src/Style/Calculatrice.scss"
import Calc from "../src/assets/calculatrice.png"

const Cal = () => {
    const [cal, setCal] = useState("");
    const [result, setResult] = useState("");

    const updateCal = (e) => {
        setCal(cal.concat(e.target.name));
    }

    const clear = () => {
        setCal("");
        setResult("");
    }

    const results = () => {
        try {
        setResult(eval(cal).toString());
        }
        catch{
            setResult("Error");
        }
    }

    function replacer(str) {
      const scndBtn = document.getElementById("scndBtn");
      const degRadBtn = document.getElementById("degRadBtn");
      if (scndBtn.classList.contains("buttonsSec")) {
        var pairs = {
          acos: "Math.acos",
          asin: "Math.asin",
          atan: "Math.atan",
          lg: "Math.log10",
          ln: "Math.log",
          π: "Math.PI",
          e: "Math.E",
          "√": "Math.sqrt",
        };
      } else if (
        !scndBtn.classList.contains("buttonsSec") &&
        degRadBtn.value == "deg"
      ) {
        var pairs = {
          cos: "dTrig(Math.cos,",
          sin: "dTrig(Math.sin,",
          tan: "dTrig(Math.tan,",
          lg: "Math.log10",
          ln: "Math.log",
          π: "Math.PI",
          e: "Math.E",
          "√": "Math.sqrt",
        };
      } else {
        var pairs = {
          cos: "Math.cos",
          sin: "Math.sin",
          tan: "Math.tan",
          lg: "Math.log10",
          ln: "Math.log",
          π: "Math.PI",
          e: "Math.E",
          "√": "Math.sqrt",
        };
      }
    
      Object.keys(pairs).forEach(function (key) {
        let str = str.split(key).join(pairs[key]);
      });
console.log(str)
      return setResult(str);
    }
  // fais passer le cosinus / sinus / tangente avec le 2nd  et l'enleve en repassage

function second() {
  const scndBtn = document.getElementById("scndBtn");
  const buttonsSec = document.querySelectorAll('input[second="sec"]');
  if (scndBtn.classList.contains("buttonsSec")) {
    scndBtn.classList.add("buttons");
    scndBtn.classList.remove("buttonsSec");
    buttonsSec.forEach((button) => {
      button.value = button.value.substring(1);
    });
  } else {
    scndBtn.classList.add("buttonsSec");
    scndBtn.classList.remove("buttons");
    buttonsSec.forEach((button) => {
      button.value = "a" + button.value;
    });
  }
}
function getFactoriel() {
  let table = []; // initialise le tab
  for(let valeur = cal;valeur >1 ; valeur--) { // pour chaque valeur dans le display
      table.push(valeur); // push les valeur dans le tab
      parseFloat((valeur));
     }
  let result = table.reduce(function(a,b){
    return a*b;
  });
  return setResult(result)
}

function onX() {
  let table = []; // initialise tab
  for(let valeurs of cal) { // pour chaque valeur dans le display
    table.push(valeurs); // push les valeur dans le tab
    parseFloat(valeurs); // transforme le string en number
  }
    let resultat = "";
    resultat = 1 / [table[0]];
    return setResult(resultat);
  }

// #Passage calculatrice Scientifique / standard

function Pi() {
  let result= cal*Math.PI
  return setResult(result)
}
function Exponential() {
  let result= cal*Math.E
  return setResult(result)
}

function swap() {
    const swapMode = document.getElementById("swapMode");
    const box = document.getElementById("box");
    const container = document.getElementById("container");
    const buttonsSci = document.querySelectorAll('input[swap="sci"]');
    if (swapMode.className === "buttonsSci") {
      swapMode.className = "buttons";
      box.className = "box";
      container.className = "container";
      buttonsSci.forEach((button) => {
        button.style.display = "none";
      });
    } else {
      swapMode.className = "buttonsSci";
      box.className = "boxSci";
      container.className = "containerSci";
      buttonsSci.forEach((button) => {
        button.style.display = "grid";
      });
    }
  }
  return (
    <div className="CalculatriceApp">
        <div className="box" id="box" >
            <div className="container" id="container"><p >Calculatrice Incroyable</p></div>
                <div className="display">{cal || 0}</div>
                    <div className="result"><span >{result || ''}</span>
                    </div>
                    <div id="swapMode" className="buttons">
                        <input swap="sci" type="button" id="scndBtn" className="buttonOperatorSci buttonSpe" value="2nd" onClick={second}/>
                        <input swap="sci" type="button" id="degRadBtn" className="buttonOperatorSci buttonSpe" value="rad"/>
                        <input swap="sci" second="sec" type="button" id="sinBtn" className="buttonOperatorSci button" value=" sin"/>
                        <input swap="sci" second="sec" type="button" id="cosBtn" className="buttonOperatorSci button" value=" cos"/>
                        <input swap="sci" second="sec" type="button" id="tanBtn" className="buttonOperatorSci button" value=" tan"/>
                        <input swap="sci" type="button" id="exponentiationBtn" className="buttonOperatorSci buttonSpe" value="xY"/>
                        <input swap="sci" type="button" id="lgBtn" className="buttonOperatorSci button" value=" lg"/>
						            <input swap="sci" type="button" id="lnBtn" className="buttonOperatorSci button" value=" ln"/>
                        <input swap="sci" type="button" id="racineSquareBtn" className="buttonOperatorSci button" onClick={updateCal} value=" √"/>
                        <input swap="sci" type="button" id="factorialBtn" className="buttonOperatorSci button" value="!" onClick={getFactoriel}/>
                        <input type="button" className="buttonOperator" name="(" onClick={updateCal} value="("/>
                        <input type="button" className="buttonOperator" name=")" onClick={updateCal} value=")"/>
                        <input type="button" swap="sci" id="percentageBtn" className="buttonOperator button" value="%" onClick={updateCal}/>
                        <input type="button" className="buttonOperator" name="/" onClick={updateCal} value="÷"/>
                        <input type="button" className="buttonOperator" onClick={clear}value="AC"/>
                        <input swap="sci" type="button" id="onX" className="buttonOperatorSci button" value="1/x" onClick={onX}/>
                        <input type="button" className="button" name="9" onClick={updateCal} value="9"/>
                        <input type="button" className="button" name="8" onClick={updateCal} value="8"/>
                        <input type="button" className="button" name="7" onClick={updateCal} value="7"/>
                        <input type="button" className="buttonOperator" name="*" onClick={updateCal} value="×"/>
                        <input swap="sci" type="button" id="piBtn" className="buttonOperatorSci button" value="π" onClick={Pi}/>
                        <input type="button" className="button" name="6" onClick={updateCal} value="6"/>
                        <input type="button" className="button" name="5" onClick={updateCal} value="5"/>
                        <input type="button" className="button" name="4" onClick={updateCal}value="4"/>
                        <input type="button" className="buttonOperator" name="-" onClick={updateCal}value="-"/>
                        <input swap="sci" type="button" id="eulersBtn" className="buttonOperatorSci button" value="e" onClick={Exponential}/>
                        <input type="button" className="button" name="3" onClick={updateCal}value="3"/>
                        <input type="button" className="button" name="2" onClick={updateCal}value="2"/>
                        <input type="button" className="button" name="1" onClick={updateCal}value="1"/>
                        <input type="button" className="buttonOperator" name="+" onClick={updateCal}value="+"/>
                        <input type="image" id="swapModeBtn" className="button" src={Calc} alt="swapImg" onClick={swap}/>
                        <input type="button" className="button" name="0" onClick={updateCal}value="0"/>
                        <input type="button" className="button" name="." onClick={updateCal}value="."/>
                        <input type="button" className="buttonOperator" onClick={results}value="="/>
                   </div> 
            </div>
        </div>
  )
  }

export default Cal;