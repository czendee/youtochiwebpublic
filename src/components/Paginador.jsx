// Importing Libraries
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import sombra_tab from '../assets/img/sombra3.png';


const Paginador= () => {
  return (
    <Fragment>
    <img src={sombra_tab} className="center forma" />
        
        <ul className="navigator">
           <li>
               <a href="#" className="arrow_n_l">&nbsp;</a>
           </li>
           <li>
               <a href="#">1</a>
           </li>
           <li>
               <a href="#">2</a>
           </li>
           <li>
               <a href="#">3</a>
           </li>
           <li>
               <a href="#">4</a>
           </li>
           <li>
               <a href="#">5</a>
           </li>
           <li>
               <a href="#">6</a>
           </li>
           <li>
               <a href="#">7</a>
           </li>
           <li>
               <a href="#">8</a>
           </li>
           <li>
               <a href="#">9</a>
           </li>
           <li>
               <a href="#">10</a>
           </li>
           <li>
               <a href="#" className="arrow_n_r">&nbsp;</a>
           </li>
        </ul>
      </Fragment>
  );
 }


// Exporting component
export default Paginador;
