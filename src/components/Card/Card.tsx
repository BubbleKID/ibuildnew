import './Card.sass';
import dayjs from 'dayjs'
import defaultImg from '../../img/default.png';
import { ICard } from '../../interfaces/card';

interface CardProp {
  card: ICard;
  openModal: any;
  imageExtValidator: (url: string) => boolean;
}

const Card: React.FC<CardProp> = (props: CardProp) => {
  const postDate = dayjs(props.card.postAt).format('MMM DD, YYYY');

  return <div className="card">
      <img onClick={() => props.openModal(props.card)} src={props.imageExtValidator(props.card.picUrl) ? props.card.picUrl : defaultImg} alt={props.card.title}></img>
      <span className="card__post-date">{postDate}</span>
      <span className="card__tag">{props.card.tag}</span>
      <p>{props.card.title}</p>
    </div>
}

export default Card;