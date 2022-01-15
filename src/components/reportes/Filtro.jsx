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
                <h2 className="forma t_left">Filtrar Cotización</h2> 
                <form className="forma inputs_filter mar_t_3">

                        <div className="d16 left_">
                            <label className="forma">Id Cotización</label>
                            <input type="text" name="" />
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Ejecutivo</label>
                            <input type="text" name="" />
                        </div>
                        
                        <div className="d16 left_">
                            <label className="forma">Negocio</label>
                            <select className="select">
                                <option>Negocio 1</option>
                                <option>Negocio 2</option>
                                <option>Negocio 3</option>
                                <option>Negocio 4</option>
                                <option>Negocio 5</option>
                            </select>
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Giro MCC</label>
                            <select className="select">
                            <option >Seleciona tu opción</option>
                            <option>Agencias de Viajes</option>
                            <option>Aseguradoras</option>
                            <option>Beneficencia</option>
                            <option>Comida Rapida</option>
                            <option>Colegios y Universidades</option>
                            <option>Entretenimiento</option>
                            <option>Estacionamientos</option>
                            <option>Farmacias</option>
                            <option>Gasolineras</option>
                            <option>Gobierno</option>
                            <option>Hospitales</option>
                            <option>Hoteles</option>
                            <option>Otros</option>
                            <option>Peaje</option>
                            <option>Restaurantes</option>
                            <option>Renta de Autos</option>
                            <option>Supermercados</option>
                            <option>Telecomunicaciones</option>
                            <option>Transporte Aereo</option>
                            <option>Transporte Terrestre de Pasajeros</option>
                            <option>Ventas al detalle (Retail)</option>
                            </select>
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Contacto</label>
                            <input type="text" name="" />
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Monto por mes</label>
                            <input type="text" name="" />
                        </div>
                        <div className="forma mar_t_3">     
                            <div className="d16 left_">
                                <div className="d20 left_">
                                    <img src={calendario} />
                                </div>
                                <div className="d80 left_ buscar_">
                                    <b>Buscar cotización por rango de fecha</b>
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
                                    <input type="submit" className="right_ mar_t_3 bot_value" value="FILTRAR AHORA" />
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
