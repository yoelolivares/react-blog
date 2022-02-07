import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function CardButtons() {
    const commentIcon = <FontAwesomeIcon icon={faComment} />;
    const heartIcon = <FontAwesomeIcon icon={faHeart} />;

    return (
        <div className="card__buttons-container">
            <a className="card__comment-link" href="#">Comment {commentIcon}</a>
            <button className="button card__favorite-btn">Favorite {heartIcon}</button>
        </div>
    )
}