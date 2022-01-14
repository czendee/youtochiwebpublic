// Importing Libraries
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import calendario from '../../assets/img/cal.jpg';
const FiltroReportes= () => {
    

  return (
      <Fragment>
         <div className="forma tit_it">
        <div className="contenedor3 center">
            <div className="forma">
                <h2 className="forma t_left"><i>Filtra tu resultado</i></h2> 
                <form className="forma inputs_filter mar_t_3">

                        <div className="d16 left_">
                            <label className="forma">Id transacción</label>
                            <input type="text" name="" />
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Código de autorización</label>
                            <input type="text" name="" />
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Conciliación</label>
                            <input className="select" type="date" id="start" name="trip-start" value="2018-07-22"min="2018-01-01" />
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Terminal</label>
                            <select className="select">
                                <option>Visa / Master Card</option>
                                <option>AMEX</option>
                                <option>OXXO</option>
                                <option>Paycash</option>
                                <option>SPEI</option>
                            </select>
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Monto</label>
                            <input type="text" name="" />
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Estatus</label>
                            <input type="text" name="" />
                        </div>
                        <div className="forma mar_t_3">     
                            <div className="d16 left_">
                                <div className="d20 left_">
                                    <img src={calendario} />
                                </div>
                                <div className="d80 left_ buscar_">
                                    <b>Busca por rango de fecha de transacción</b>
                                </div>
                            </div>
                            <div className="d16 left_">
                                <label className="forma">Fecha inicial</label>
                                <input type="date" id="start" name="trip-start" value="2018-07-22"min="2018-01-01" name="" />
                            </div>
                            <div className="d16 left_">
                                <label className="forma">Fecha final</label>
                                <input type="date" id="start" name="trip-start" value="2018-07-22"min="2018-01-01" name="" />
                            </div>
                            <div className="d50 left_">
                                <div className="d97 right_">
                                    <input type="submit" className="right_ mar_t_3 bot_value" value="BUSCAR AHORA" />
                                </div>
                            </div>
                        </div>
                </form>
            </div>
        </div>  
    </div>
        
      </Fragment>
  );
 }


// Exporting component
export default FiltroReportes;
