import React, { useState } from 'react'
import "../src/Style/Calculatrice.scss"
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

  return (
    <div className="CalculatriceApp">
        <div className="box" id="box" >
            <div className="container" id="container"><p className="titreCalc">Calculatrice Incroyable</p></div>
                <div className="display">{cal || 0}</div>
                    <div className="result"><span className="text-orange-500">{result || ''}</span></div>
      
                    <div className='englobeButton'>
                    <button className="buttonOperator" name="%" onClick={updateCal}>
                        %
                    </button>

            

                    <button className="buttonOperator" name="(" onClick={updateCal}>
                        (
                    </button>

            

                    <button className="buttonOperator" name=")" onClick={updateCal}>
                        )
                    </button>

            

                    <button className="buttonOperator" name="/" onClick={updateCal}>
                    ÷
                    </button>
                    </div>

        
                    <div className='englobeButton'>
                    <button className="button" name="9" onClick={updateCal}>
                        9
                    </button>

            

                    <button className="button" name="8" onClick={updateCal}>
                        8
                    </button>

            

                    <button className="button" name="7" onClick={updateCal}>
                        7
                    </button>
                   
                 
                    <button className="buttonOperator" name="*" onClick={updateCal}>
                    ×
                    </button> 
                    </div>


        

                    <div className='englobeButton'>
                    <button className="button" name="6" onClick={updateCal}>
                    6
                    </button>

            

                    <button className="button" name="5" onClick={updateCal}>
                    5
                    </button>
  
            

                    <button className="button" name="4" onClick={updateCal}>
                    4
                    </button>

            

                    <button className="buttonOperator" name="-" onClick={updateCal}>
                    -
                    </button>

                    </div>
        

                    <div className='englobeButton'>
                    <button className="button" name="3" onClick={updateCal}>
                    3
                    </button>

            

                    <button className="button" name="2" onClick={updateCal}>
                    2
                    </button>

            

                    <button className="button" name="1" onClick={updateCal}>
                    1
                    </button>


                    <button className="buttonOperator" name="+" onClick={updateCal}>
                    +
                    </button>


        
                    </div>
                    <div className='englobeButton'>
                    <button className="buttonOperator" onClick={clear}>
                    AC
                    </button>


                    <button className="button" name="0" onClick={updateCal}>
                    0
                    </button>

            

                    <button className="button" name="." onClick={updateCal}>
                    .
                    </button>

            

                    <button className="buttonOperator" onClick={results}>
                    =
                    </button>
                    </div>
            </div>
        </div>

  )
}

export default Cal;