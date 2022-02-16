import Button from '../constant/Button';

export default function CardButtons() {

    return (
        <div className="card__buttons-container">
            <a className="card__comment-link" href="#">Comment</a>
            <Button className="button card__favorite-btn" text="Favorite" />
        </div>
    )
}