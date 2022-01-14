// Importing Libraries
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import icon5 from '../../assets/img/icon4.png';

const HomeDashboard= () => {
    

  return (
      <Fragment>
    
    <div className="d33 left_">
                    <h3 calss="forma">&nbsp;&nbsp;&nbsp;DASHBOARD<img src={icon5} href="#" className="right_ icon_cont right_0"/></h3>
                    <ul className="list_ list_1 d80 right_ mar_t_0">
                        <li>
                        <a href="dashboard" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                        <li>
                        <a href="dashboard" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                        <li>
                        <a href="dashboard" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                        <li>
                        <a href="dashboard" className="forma" >Conciliación 1 04/03/20
                        </a>
                        </li>
                    </ul>
                    <div className="forma">
                        <a href="dashboard" className="botL right_" >VER DETALLE</a>
                    </div>
                </div>
</Fragment>
  );
 }


// Exporting component
export default HomeDashboard;
