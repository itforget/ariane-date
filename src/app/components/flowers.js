'use client'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flower } from 'styled-icons/entypo';

const randomIntFromInterval = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1) + min);
};

const StyledFlower = styled(Flower)`
 position: absolute;
 width: 50px;
 height: 100px;
 animation: fadeIn 1s ease-in-out infinite alternate;
 @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
 }
`;

const FlowerComponent = () => {
 const [flowers, setFlowers] = useState([]);

 useEffect(() => {
    const interval = setInterval(() => {
      if (flowers.length < 10) {
        const flower = (
          <StyledFlower
            key={Date.now()}
            style={{
              top: randomIntFromInterval(0, window.innerHeight - 100),
              left: randomIntFromInterval(0, window.innerWidth - 100),
            }}
          />
        );
        setFlowers((prevFlowers) => [...prevFlowers, flower]);
      }
    }, 1000);

    return () => clearInterval(interval);
 }, [flowers]);

 return <div style={{ position: 'relative', width: '100%', height: '100%' }}>{flowers}</div>;
};

export default FlowerComponent;