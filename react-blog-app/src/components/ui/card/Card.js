import './Card.scss'
import CardImage from './CardImage'
import CardButtons from './CardButtons';
import CardDescription from './CardDescription';

export default function Card() {
 
    return (
        <div className="card">
                <div className='card__image-container'>
                    <CardImage />
                </div>
                <div className="card__content">
                    <CardDescription />      
                </div>
            <div className="card__content">
                <CardButtons />
            </div>
            
        </div>
    )
}