import { Link } from 'react-router-dom'

import './CountryCard.css'

export const CountryCard = ({
    id,
    name,
    flag,
    continent


}) => {


    return (


        <section className="card animate__animated animate__fadeInDown">
                     <div className='Link__container'>
                     <button className='card__button'><Link className='Link__text'to={`/${id}`}>More Info</Link></button>
                        </div>
                    <article className="card__item">
                        <img src={flag} className="card__picture" alt='flag' />
                        <div className="card__texts">
                            <h2 className="card__title">{name}</h2>
                            <h3 className="card__subtitle">{id}</h3>
                            <p className="card__paragraph">{continent}</p>
                        </div>
                    </article>
                    
                </section>

                )
}