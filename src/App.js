import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

function App(){
  
  useEffect(()=>{
    
    const loadAll = async () =>{
      //pegando a list toda
      let list = await Tmdb.getHomelist();
      console.log(list);
    }
    loadAll();

  }, []);
  
  
  return(
    <h1>Olá mundo</h1>
  );
}


export default App;