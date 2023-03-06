import React, { useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Testimonials.module.css';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

function Card({ userImg, content, userName, title }) {
    return (
            <section className={styles.card}>
  
              <div className={styles.userImg}>
                  <Image src={userImg} width={80} height={80} />
              </div>
  
              <div className={styles.userOpinion}>
                  <p>{content}</p>
              </div>
  
              <div className={styles.userName}>
                  <h4>{userName}</h4>
                  <p>{title}</p>
              </div>
  
            </section>
    );
  }
  
  function Scroller({ cards }) {
    const [index, setIndex] = useState(0);
  
    const handleClick = (increment) => {
      const newIndex = index + increment;
      if (newIndex < 0 || newIndex >= cards.length) {
        return;
      }
      setIndex(newIndex);
    };
  
    return (
      <main className={styles.content}>
        <Card 
            title={cards[index].title} 
            content={cards[index].content} 
            userImg={cards[index].userImg} 
            userName={cards[index].userName}
        />
  
        <section className={styles.scrollerBtn}>
            <button onClick={() => handleClick(-1)}><AiOutlineArrowUp /></button>
            <button onClick={() => handleClick(1)}><AiOutlineArrowDown /></button>
        </section>
      </main>
    );
  }
  
  function CardScroller() {
    const cards = [
      { userName: "Augusto Goulart", title:"CEO of ARS Corp." , userImg: "/images/user-img.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad tempora ducimus molestiae eos quos." },
      { userName: "John Wick", title:"CEO of JW SA." , userImg: "/images/user-img03.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad tempora ducimus molestiae eos quos." },
      { userName: "Robert N. Marley", title:"CEO of Waylers" , userImg: "/images/user-img02.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad tempora ducimus molestiae eos quos." },
    ];
  
    return <Scroller cards={cards} />;
  }
  
  export default CardScroller