import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  var url = props.path; 

  return (
    <>
      <li className='cards__item'>
        {(url=='sudoku') ? (
            <Link to={url} className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                // alt='Travel Image'
                src={props.src}
              />
              
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </Link>
        ) : (
          <a href={url} className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              // alt='Travel Image'
              src={props.src}
            />
            
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
        )}
        
      </li>
    </>
  );
}

export default CardItem;