import { Link } from 'react-router-dom';

export default function CardDescription() {
    return (
        <div className="card__description">
            <div className="card__description-grp">
                <span className="card__date">May 10, 2020</span>
            </div>
            <div className="card__description-grp">
                <Link className="card__card-link" to="/">Card Heading</Link>
            </div>
            <div className="card__description-grp">
                <p>Short Card description. We don't yet know if we will have a character limit.</p>
            </div>    
        </div>
    )
}