import Rodal from 'rodal';    
import defaultImg from '../../img/default.png';
import { ICard } from '../../interfaces/card';
// include styles
import 'rodal/lib/rodal.css';
import './Modal.sass';

interface ModalProps {
  hideModal: () => void;
  isOpenModal: boolean;
  imageExtValidator: (url: string) => boolean;
  modalData: ICard;
}
const Modal = (props: ModalProps) => (
  <Rodal 
    className="rodal"
    visible={props.isOpenModal}
    onClose={props.hideModal}
    animation="zoom"
    closeOnEsc
    width={600}
    height={600}
  >
    <div className="rodal__header">{props.modalData?.title}</div>
    <div className="rodal__body">
      <img src={props.imageExtValidator(props.modalData?.picUrl) ? props.modalData?.picUrl : defaultImg} alt={props.modalData?.title}></img>
      <p>{props.modalData?.description}</p>
    </div>
    <button className="rodal__btn--confirm" onClick={props.hideModal}>
      ok
    </button>
    <button className="rodal__btn--cancel" onClick={props.hideModal}>
      close
    </button>
  </Rodal>
);

  export default Modal;