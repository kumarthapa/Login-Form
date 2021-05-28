import React, {useState, useEffect } from "react";
import axios from 'axios';
import Card from "./Components/Card/Card";
import Grid from '@material-ui/core/Grid';
import useStyles from "./Components/Card/Card-style";
const App = () => {
  const classes = useStyles();
  const [data, setData] = useState();
  useEffect(() => {
    let apiUrl = `https://jsonplaceholder.typicode.com/posts`;

    const headers={
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
    axios.get(apiUrl,{headers:headers})
    .then((response)=>setData(response.data))
    .catch((err)=>console.log(err))

    // fetch(apiUrl, {
    //   method: "GET",
    //   headers: new Headers({
    //     "Content-type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   }),
    // })
    //   .then((r) => r.json())
    //   .then((res) => setData(res))
    //   .catch((err) => console.log(err));


  }, []);
  return (
    <>
<div className={classes.root2}>
      <Grid container spacing={3}>
      {
       data?.map((item,index)=>{
          return(
            <Grid item xs>
            <Card body={item.body} title={item.title} id={item.id}/>
            </Grid>
          )
       })
     }
      </Grid>
</div>
    </>
  );
};

export default App;
