import { useState } from "react";
import dayjs from 'dayjs'
import defaultImg from '../../img/default.png';
import { ICard } from '../../interfaces/card';
import { motion } from "framer-motion";
import './Card.sass';

interface CardProp {
  card: ICard;
  openModal: any;
  imageExtValidator: (url: string) => boolean;
}

const Card: React.FC<CardProp> = (props: CardProp) => {
  const postDate = dayjs(props.card.postAt).format('MMM DD, YYYY');
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
  };

  return <div className="card">
      <motion.img
        onClick={() => props.openModal(props.card)}
        src={props.imageExtValidator(props.card.picUrl) ? props.card.picUrl : defaultImg}
        alt={props.card.title}
        initial={{ height: "200px", opacity: 0 }}
        animate={{
          height: "200px",
          opacity: imageLoading ? 0 : 1
        }}
        onLoad={imageLoaded}
      ></motion.img>
      <span className="card__post-date">{postDate}</span>
      <span className={`card__tag card__category${props.card.category}`}>{props.card.tag}</span>
      <p>{props.card.title}</p>
    </div>
}

export default Card;