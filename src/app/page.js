'use client'
import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  

  const alternarTexto = () => {
    setIndex((index + 1) % textos.length);
    
    // Se chegarmos ao último elemento do array, desativamos o autoPlay para parar a transição
    if (index === textos.length - 2) {
      setAutoPlay(false);
    }
  };

  const textos = [
    'ESTE ANO',
    'ALGO INCRIVEL',
    'ACONTECEU', 'NA MINHA',
    'VIDA...', 'TER TE CONHECIDO',
    'FOI A MELHOR COISA',
    'QUE ACONTECEU ESSE ANO',
    'MAS...',
    'AINDA ESTA',
    'FALTANDO UMA COISA',
    'PRA FICAR AINDA MELHOR',
    'QUERO TE PEDIR UMA COISA',
    'PREPARADA???',
    '5...', '4...', '3...', '2...', '1...',
    'QUER NAMORAR COMIGO?'
  ];

  useEffect(() => {
    let intervalId;

    if (autoPlay) {
      setIsVisible(true);

      intervalId = setInterval(() => {
        alternarTexto();
      }, 2000); // 1000 milissegundos (1 segundo) - ajuste conforme necessário
    }

    return () => clearInterval(intervalId);
  }, [autoPlay, index]);

  const handleButtonClick = () => {
    setAutoPlay(true);
    setIsVisible(false); // Esconde o texto ao clicar no botão
   
    // Toca a música
    music.play();
   };
  const music = new Howl({
    src: ['/musica.mp3'],
   });
   

  return (
    <div className="flex place-content-center p-24 flex-col">
      <h1
        className={`flex font-extrabold text-6xl place-content-center animate-jump-in animate-infinite animate-duration-[2000ms] ${isVisible ? 'visible' : 'hidden'}`}
      >
        {textos[index]}
      </h1>
      <button onClick={handleButtonClick} className={`flex rounded-2xl text-2xl font-extrabold place-content-center border-2 hover:opacity-55 ${isVisible ? 'hidden' : 'visible'}`}>
        APERTE
      </button>
    </div>
  );
}
