'use client'
import React, { useState } from 'react';

export default function Home() {
 const [mostrarTexto, setMostrarTexto] = useState(false);

 const alternarTexto = () => {
    setMostrarTexto(!mostrarTexto);
 };

 return (
    <div className="flex place-content-center p-24 flex-col">
      <h1 className={`${mostrarTexto ? '' : 'hidden'} flex font-extrabold text-6xl place-content-center`}>
        QUER NAMORAR COMIGO?
      </h1>
      <button onClick={alternarTexto} className={`${mostrarTexto ? 'hidden' : ''} flex rounded-2xl text-2xl font-extrabold place-content-center border-2 hover:opacity-55`}>
        APERTE
      </button>
    </div>
 );
}