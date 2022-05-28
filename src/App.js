import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';


function App(){
  
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async ()=>{
      //pegando tota a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

    }

    loadAll();

  }, []);

  return(
    <div className="page">

      <section className='lista'>
        {movieList.map((item,key)=>(
         
         <MovieRow key={key} title={item.title} items={item.items} />

        ))}
      </section>


    </div>
  );
}



export default App;