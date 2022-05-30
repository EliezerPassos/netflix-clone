import React, { useEffect, useState } from 'react';
import "./App.css";
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App(){
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] =useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

 


  useEffect(()=>{
    const loadAll = async ()=>{
      //pegando tota a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Featured
      
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen]; 
    
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      
      setFeaturedData(chosenInfo)



    }

    loadAll();

  }, []);

  useEffect (() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }

    }
    window.addEventListener('scroll',scrollListener);

    return()=>{
      window.removeEventListener('scroll',scrollListener);
    }
  },[])



  return(
    <div className="page">
      
      <Header black={blackHeader}/>


      {featuredData &&
      <FeaturedMovie item={featuredData}/>
      }
      
      <section className='lists'>
        {movieList.map((item,key)=>(
         
         <MovieRow key={key} title={item.title} items={item.items} />

        ))}
      </section>

          <footer>
            Feito por eliezer.passos <span role="img" aria-label="coração">❤️</span>
            Direitos da Netflix<br/>
            Dados pegos do site Themoviedb.org
          </footer>

          {movieList.length <=0 &&

          <div className='loading'>
            <img src='https://i.gifer.com/origin/ca/cab888fee28ca4db0b9c04c2c6cd98ac_w200.webp' alt='carregando'/>
          </div>
          }

    </div>
  );
}



export default App;
