import './Card.scss'
import CardImage from './CardImage'
import CardButtons from './CardButtons';
import CardDescription from './CardDescription';

import { Link } from 'react-router-dom';

export default function Card() {
 
    return (
        <div className="card">
            <Link className="card__card-link" to="/">
                <div className='card__image-container'>
                    <CardImage />
                </div>
                <div className='card__content'>
                    <CardDescription />
                    <CardButtons />
                </div>
                
            </Link>
            
        </div>
    )
}