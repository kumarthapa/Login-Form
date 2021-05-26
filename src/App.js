import React, {useState, useEffect } from "react";

import Card from "./Components/Card/Card";
const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    let apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    fetch(apiUrl, {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
    })
      .then((r) => r.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
   
    <>
    <div style={{display:'flex', flexWrap:'wrap', margin:'auto', justifyContent:'center'}}>
{
       data?.map((item,index)=>{
          return(
            <>
            <Card body={item.body} title={item.title} id={item.id}/>
            </>
          )
       })
     }
    </div>
    </>
  );
};

export default App;
