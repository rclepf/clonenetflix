import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import tmdb from './tmdb';
import './App.css';
import FeaturedSeries from './components/FeaturedSeries';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getSeriesInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  return (
    <div className='page'>

      {featuredData && <FeaturedSeries item={featuredData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

