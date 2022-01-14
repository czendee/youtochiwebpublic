// Importing Libraries
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import icon4 from '../../assets/img/icon2.png';

const HomeBitacora= () => {
    

  return (
      <Fragment>
    
                <div className="d33 left_ center_cont">
                    <h3 calss="forma"><span className="d90 center">BITÁCORA<img src={icon4} href="#" className="right_ icon_cont2"/></span></h3>
                    <ul className="list_ list_2 d90 center">
                        <li>
                        <a href="bitacora" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                        <li>
                        <a href="bitacora" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                        <li>
                        <a href="bitacora" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                        <li>
                        <a href="bitacora" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                    </ul>
                    <div className="forma border_t_cont">
                        <a href="bitacora" className="botC right_" >VER DETALLE</a>
                    </div>
                </div>
</Fragment>
  );
 }


// Exporting component
export default HomeBitacora;
