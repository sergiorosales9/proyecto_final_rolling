import React from 'react';
import BodyTurn from './BodyTurn';
import HeaderStatic from '../Layout/HeaderStatic';
import Fotter from '../Layout/Fotter';
import "./styles.css";
// eslint-disable-next-line
const Turn = ({authen,setAuthen,usuario}) => {
    return ( 
        <>
        <HeaderStatic 
        usuario={usuario}
         authen={authen}
         setAuthen={setAuthen}/>
        <BodyTurn /> 
        <Fotter/>
       </>         
     );
}
 
export default Turn;