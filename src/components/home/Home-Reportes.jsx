// Importing Libraries
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import icon3 from '../../assets/img/icon1.png';

const HomeReportes= () => {
    

  return (
      <Fragment>
    
              <div className="d33 left_">
                    <h3 calss="forma">
                    REPORTES
                    <img src={icon3} href="#" className="right_ icon_cont"/></h3>
                    <ul className="forma list_ list_1">
                        <li>
                        <a href="reportes" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                        <li>
                        <a href="reportes" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                        <li>
                        <a href="reportes" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                        <li>
                        <a href="reportes" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                    </ul>
                    <div className="forma">
                        <a href="reportes" className="botR right_" >VER DETALLE</a>
                    </div>
                </div>
</Fragment>
  );
 }


// Exporting component
export default HomeReportes;
