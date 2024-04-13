function ErrorMessage ({items}){
   
return <>
{items.length === 0 && <h2>Please add Item that need to buy </h2>}
</>



}

export default  ErrorMessage;