import { computeHeadingLevel } from "@testing-library/react";
import { upload } from "@testing-library/user-event/dist/upload";
import React, { useEffect, useState } from "react";
import "./search.css"
const Search= () =>{

const [dat, setDat] = useState(null) ;
const [info ,setInfo ]= useState(null); 
const [preview, setPreview] = useState() ;

console.log( info ) ;
const getData = async ()=>{

     try{ 
        const data = new FormData();
       
        data.append("image_input", dat, dat.name);
        
        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': 'd5b7d1e676msh052563ca3875628p152f44jsnca03cd34b509',
                'X-RapidAPI-Host': 'face-recognition18.p.rapidapi.com'
            },
            body: data
        };
        
       const res=  await fetch('https://face-recognition18.p.rapidapi.com/recognize_face', options)
              const jsonres = await res.json(); 
              setInfo(jsonres.recognition_result[0] );
        console.log(jsonres);
      
    }
        catch(err)
        {
            console.log(err);
        }
   
}


useEffect(()=>{
    if(dat)
    {
        const reader = new FileReader() ;

        reader.onloadend= ()=>{
            setPreview(reader.result) ;
        }
        reader.readAsDataURL(dat) ;
    }
    else
    {
setPreview(null);
    }
// getData() ;
}, [dat]); 

    return (
<>
<div className="container">
    <h1 className="hh">Upload file</h1>
    <input type="file" onChange={(e)=>setDat(e.target.files[0])}  name="img"/>
  
</div>
<div className="con">
    <div className="icon">
    <img className="ico" src={preview} alt="" />
    </div>
    <div className="inf">
         {
            info==null ? <p>Info..</p>   : ( 
            <div>
            <p>Gender: {info.gender}</p>
            <p>Age : {info.age}</p>
            <p>Emotion : {info.emotion}</p>
            <p>Gender Probablity : {info.gender_probability}</p>
            <p>Is Real Face : {info.liveness.is_real_face==true ? <span>true</span> : <span>false</span> }</p>
            <p>Liveness Probablity : {info.liveness.liveness_probability}</p>
            <p>Recognition Confidence : {info.recognition_confidence}</p>
            <p>Wear facemask : {info.wear_facemask==true ? <span>true</span> : <span>false</span>} </p>
            </div>)
            
            
        }




    </div>

</div>
</>

    )
}
export default Search ;