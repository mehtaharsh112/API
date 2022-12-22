import React,{useContext} from 'react';
import {ApiCont} from './Api'
function App() {
  let {hits,isLoading} = useContext(ApiCont)
  if(isLoading)
  {
    return(
      <>
      <h2 style={{fontSize:'100px',margin:0 ,color:'yellow', backgroundColor:'red'}}>LOADING</h2>
      </>
    )
  }
  return (
    <div>
      <h1>Data is :</h1>
      <h2 style={{fontSize:'40px',margin:0 ,color:'white', backgroundColor:'black'}}>{hits.map(e=>e.title)}</h2>
    </div>
  );
}

export default App;