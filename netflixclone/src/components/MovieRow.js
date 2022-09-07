import React from 'react';
import './MovieRow.css';

export default ({ title, items }) => {
    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--listarea'>
                <div className='movieRow --list'>
                    <div className='movieRow--item'>
                        {items.results.map((item, key) => (
                            <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.original_title} key={key}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


