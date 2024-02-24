import React,{useState} from 'react'

const Flames = () => {
  const [string1,setstring1] = useState('');
  const [string2,setstring2] = useState('');
  const [status,setstatus] = useState('');
  function calculate (){
  if(string1 === '' || string2 === ' ')
  {
    setstatus("please enter a valid text")
  }

  let s1 = string1.split('');
  let s2 = string2.split('');
  let arr = [];
  console.log(s1+s2);
  for(let i=0;i<s1.length;i++)
  {
    let flag = false;
    for(let j=0;j<s2.length;j++)
    {
      if(s1[i] === s2[j])
    {
      s2.splice(j,1);
      flag = true;
      break;
    }
    }
    if(!flag)
    {
      arr.push(s1[i])
    }
  }
  console.log(arr+s2);
  let finalarr = arr.join('')+s2.join('');
  let lfin = finalarr.length % 6;
  console.log (lfin);

  switch(lfin){
    case 1 :
    return  setstatus('Friend');
    case 2 :
    return  setstatus('Love');
    case 3 :
    return  setstatus('Affection');
    case 4 :
    return  setstatus('Marriage');
    case 5 :
    return  setstatus('Enemy');
    case 0 :
    return  setstatus('Siblings');
  }
  }
  
  function clear (){
     setstring1('');
     setstring2('');
     setstatus('');
  }

  return (
    <div>
      <div>
        <input type='text' placeholder='Enter FirstName' onChange={(e)=>setstring1(e.target.value)} value={string1}/>
        <input type='text' placeholder='Enter SecondName' onChange={(e)=>setstring2(e.target.value)} value={string2}/>
        <button onClick={calculate}>Calculate the Relationship</button>
        <button onClick={clear}>Clear</button>
        <h3>{status}</h3>
      </div>
    </div>
  )
}
export default Flames;