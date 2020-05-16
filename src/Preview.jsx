import React from 'react';
export default(props)=>{

const text =props.text.split('');
const userInput =props.text.userInput;


return (

<div className="border rounded p-3 mb-4">
{
    text.map((s,i)=> {
        let color;
        if(i<props.userInput.length){
            color=s===props.userInput[i] ? '#dfffa0' :'#fcbea4';
        }

    return <span key={i}  style={{backgroundColor:color}} >{s}</span>
    })
}
</div>

)

}