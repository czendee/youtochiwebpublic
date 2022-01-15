// Importing Libraries
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import sombra_tab from '../../assets/img/sombra3.png';
const MostrandoReportes= () => {
    

  return (
      <Fragment>
         <form className="inputs_filter forma ">
            <div className="bord_tab_top forma">&nbsp;</div>
            <div className="contenedor3 center">
                <div className="d50 left_">
                    <div className="forma mar_t_2 mar_b_2 mostrar">
                        <p>Mostrando<select className="sel_mos">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                        </select>resultados de 30</p> 
                    </div>
                </div>
                <div className="d50 left_">
                    <div className="d97 right_">
                        <input type="submit" className="right_ mar_t_3 bot_value submit2" value="EXPORTAR RESULTADOS" />       
                    </div>
                </div>
            </div>
            <div className="bord_tab_top forma">&nbsp;</div>
            <img src={sombra_tab} className="center forma" />
        </form>
      </Fragment>
  );
 }


// Exporting component
export default MostrandoReportes;
