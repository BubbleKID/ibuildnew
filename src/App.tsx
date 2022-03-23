import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { menuItems } from './data/menuItems';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import { data } from './data/cards';
import { ICard } from './interfaces/card';
import './App.sass';

function App() {
  const [cardData, setCardData] = useState(data.data);
  const [category, setCategory] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setmodalData] = useState<ICard>();
  
  useEffect(() => {
    if(category === 0) return setCardData(data.data);
    setCardData(data.data.filter(item => item.category === category));
  }, [category])
  
  const hideModal = () => {
    setIsOpenModal(false);
  }

  const openModal = (modalData: ICard) => {
    setmodalData(modalData);
    setIsOpenModal(true);
  }

  const imageExtValidator = (url: string | undefined) => {
    if(url === undefined) return false;
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/i.test(url);
  }

  return (
    <div className="app">
      <Modal hideModal={hideModal} isOpenModal={isOpenModal} imageExtValidator={imageExtValidator} modalData={modalData!}/>
      <Header menuItems={menuItems} setCategory={setCategory}/>
      <div className="cards-container">
        {cardData.map((item: ICard, index: number) => <Card imageExtValidator={imageExtValidator} openModal={openModal} key={index + item.postAt} card={item} />)}
      </div>
    </div>
  );
}

export default App;
