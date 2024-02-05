import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

export function Testimonio (props){
  return(
    <div className='contenedor-testimonio' >
        <img className='imagen-testimonio' src={require(`../img/nakano-${props.imagen}.png`)} alt='foto de ichika'></img>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
        <p className='numero-testimonio'>{props.cargo} es la {props.numero}</p>
        <p className='texto-testimonio'>{props.testimonio}</p>  
      </div>
    </div>
  );    
}


