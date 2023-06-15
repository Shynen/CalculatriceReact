const express=require("express");
const PORT=process.env.port || 3001;
const app=express();

app.get("/api",(req,res)=>{
  res.json({text: {"message":"Calculatrice Incroyable",
            "nmb9":"9","nmb8":"8","nmb7":"7","nmb6":"6","nmb5":"5","nmb5":"5","nmb4":"4","nmb3":"3","nmb2":"2","nmb1":"1","nmb0":"0","prtg":"(","prtd":")","div":"÷","mult":"×","minus":"-","add":"+","clear":"AC"
        }
        })             
})

app.listen(PORT,()=>(`Le port de mon backend est le : ${PORT}`));