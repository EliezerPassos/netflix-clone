import React, { useEffect, useState } from 'react';
import "./App.css";
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App(){
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] =useState(null);

  useEffect(()=>{
    const loadAll = async ()=>{
      //pegando tota a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Featured
      
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen]; 
      console.log(chosen);

    }

    loadAll();

  }, []);

  return(
    <div className="page">
      
      {featuredData &&
      <FeaturedMovie item={featuredData}/>
      }
      
      <section className='lista'>
        {movieList.map((item,key)=>(
         
         <MovieRow key={key} title={item.title} items={item.items} />

        ))}
      </section>


    </div>
  );
}



export default App;