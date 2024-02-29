import React,{useState} from "react";

const AnotherMethod = () =>{
    const [name1,setname1] = useState("");
    const [name2,setname2] = useState("");
    const [relation,setrelation] = useState("");
    const arr = ["Siblings","Friend","Love","Affection","Marriage","Enemy"];
    function calculate(){
        if(name1 === "" || name2 === "")
        {
          setrelation("please enter a valid text");
        }
        let str1 = name1;
        let str2 = name2;
        for( let t of str1)
        {
            if(str2.includes(t))
            {
                str1=str1.replace(t,"");
                str2=str2.replace(t,"");
            }
        }
       setname1(str1);
       setname2(str2);
       setrelation(arr[(str1.length+str2.length)%6])
    }
    function clear(){
    setname1("");
    setname2("");
    setrelation("");
    }
return(
    <div>
        <input type="text" placeholder="Enter the first name" 
        value = {name1}
        onChange={(e)=>setname1(e.target.value)
        }/>
         <input type="text" placeholder="Enter the Second name" 
        value = {name2}
        onChange={(e)=>setname2(e.target.value)
        }/>
        <button onClick={calculate}>Calculate the Relationship</button>
        <button onClick={clear}>Clear</button>
       <div>
       <h3>{relation}</h3>
       </div>
    </div>
)
}
export default AnotherMethod;