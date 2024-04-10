function ErrorMessage ({items}){
   
return <>
{items.length === 0 && <h2>Please add at least one item </h2>}
</>



}

export default  ErrorMessage;