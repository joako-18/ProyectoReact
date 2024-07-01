import React from "react";
import Card from "../components/Cards";

function Top() {
  const cardsData = [
    {
      image: '/img/usyk.png',
      title: '1- Oleksandr Usyk (21-0)',
      link: 'https://youtu.be/2TcdLsVKnQA'
    },
    {
      image: '/img/Naoya.jpg',
      title: '2- Naoya Inoue (27-0)',
      link: 'https://youtu.be/o0UswNZwIV4'
    },
    {
      image: '/img/Terence-Crawford.jpg',
      title: '3- Terence Crawford (40-0)',
      link: 'https://youtu.be/5HjO7vu2RQQ'
    },
    {
      image: '/img/DMITRY-BIVOL.jpeg',
      title: '4- Dmitry Bivol (22-0)',
      link: 'https://youtu.be/1iCQRKOi39U'
    },
    {
      image: '/img/canelo.jpg',
      title: '5- Saúl “Canelo” Álvarez (61-2-2)',
      link: 'https://youtu.be/TsU4wqD5wJU'
    },
    {
      image: '/img/artur.jpg',
      title: '6- Artur Beterbiev (20-0)',
      link: 'https://youtu.be/QNippXrJnvY'
    },
    {
      image: '/img/Teofimo.jpg',
      title: '7- Teófimo López (20-1)',
      link: 'https://youtu.be/JBSVZJTZ0Fw'
    },
    {
      image: '/img/kenshiro.jpg',
      title: '8- Kenshiro Teraji (23-1, 14)',
      link: 'https://youtu.be/dOzeUp9jOy0'
    },
    {
      image: '/img/junto.jpg',
      title: '9- Junto Nakatani (27-0)',
      link: 'https://youtu.be/xSvIuUVB2Yw'
    },
    {
      image: '/img/gervonta.jpg',
      title: '10- Gervonta Davis (29-0)',
      link: 'https://youtu.be/s0SJgrgQju0'
    }
  ];

  return (
    <div className="app">
      {cardsData.map((card, index) => (
        <Card 
          key={index}
          image={card.image}
          title={card.title}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default Top;