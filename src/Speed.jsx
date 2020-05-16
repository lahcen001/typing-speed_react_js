import React from 'react';
export default (props)=> {

if(props.symbols !== 0 && props.sec !== 0){
const wps = (props.symbols/5)/ (props.sec/60);

return (
<div>mots-par-minute : {Math.round(wps)}</div>
)
}


return null;

}