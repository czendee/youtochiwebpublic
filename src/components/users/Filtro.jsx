// Importing Libraries
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import plus from '../../assets/img/add.svg';
const FiltroUsers= () => {
    

  return (
      <Fragment>
         <div className="forma tit_it">
        <div className="contenedor3 center">
            <div className="forma">
                
                    <div className="forma">
                        <div className="d50 left_">
                            <h2 className="forma t_left">Filtrar usuarios</h2> 
                        </div>
                            <div className="d16 right_">
                                <div className="d97 right_">
                                    <a href="/quote/usersdetails" type="submit" className="right_ mar_t_3 bot_value crear">
                                        <img src={plus} className="plus"/> USUARIO
                                    </a>    
                                </div>
                            </div>
                    </div>        
                <form className="forma inputs_filter mar_t_3">

                        
                        
                        <div className="d16 left_">
                            <label className="forma">Tipo de Perfil</label>
                            <select className="select">
                                <option>Administrador</option>
                                <option>Asesor</option>
                                <option>Agente</option>
                            </select>
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Nombre</label>
                            <input type="text" name="" />
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Teléfono</label>
                            <input type="text" name="" />
                        </div>
                        <div className="d16 left_">
                            <label className="forma">E-mail</label>
                            <input type="text" name="" />
                        </div>
                        <div className="d16 right_">
                        <div className="d97 right_">
                            <input type="submit" className="right_ mar_t_3 bot_value" value="FILTRAR AHORA" />
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
export default FiltroUsers;
