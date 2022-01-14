// Importing Libraries
import React, { Fragment } from 'react';
import Modal from 'react-modal'
import close_m from '../../../assets/img/close.svg';
const FiltroReportesDetalle= () => {
    var subtitle;

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal(){
        setIsOpen(false);
      }

  return (
      <Fragment>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
      
            contentLabel="Example Modal"
          >

            <h3 ref={_subtitle => (subtitle = _subtitle)} className="forma t_center">ACLARACIÓN</h3>
            {/* Ingresar datos modal aqui */}
            
            <button onClick={closeModal} className="close_mod">
                <img src={close_m}/>
            </button>
            <form className="inputs_filter">
            
            <div className="d50 center mar_t_3">
                
                <div className="forma mar_t_2">
                    <label className="forma">Manda tus observaciones</label>
                    <textarea></textarea>
                </div>

                
                <div className="forma">
                    <input type="submit" className="bot_value mar_none_bot buscar" value="ENVIAR" />
                </div>
            </div>
      </form>
            {/* --> final del modal */}
          </Modal>
          
                <div className="d30 left_">    
                    <h2 className="forma t_left"><i>Filtra tu resultado</i></h2> 
                    <form className="forma inputs_filter mar_t_3">
                        <div className="forma mar_b_2">
                            <label className="forma">Id transacción</label>
                            <input type="text" className="t_left" name="" />
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Código de autorización</label>
                            <input type="text" className="t_left" name="" />
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma ">Conciliación</label>
                            <input className="select t_left" type="date" id="start" name="trip-start" value="2018-07-22"min="2018-01-01" />
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Terminal</label>
                            <select className="select t_left">
                                <option>Visa / Master Card</option>
                                <option>AMEX</option>
                                <option>OXXO</option>
                                <option>Paycash</option>
                                <option>SPEI</option>
                            </select>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Monto</label>
                            <input type="text" className="t_left" name="" />
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Estatus</label>
                            <input type="text" className="t_left" name="" />
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Fecha inicial</label>
                            <input type="date" id="start" name="trip-start" value="2018-07-22"min="2018-01-01" className="t_left" name="" />
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Fecha final</label>
                            <input type="date" id="start" name="trip-start" value="2018-07-22"min="2018-01-01" className="t_left" name="" />
                        </div>
                        <div className="forma mar_b_2">
                            <div className="d50 left_">
                                <div className="d90 center">
                                    <div className="forma">
                                    <input type="submit" className="right_ mar_t_3 bot_value" value="BUSCAR" />
                                    </div>
                                </div>
                            </div>
                            <div className="d50 left_">
                                <div className="d90 right_">
                                    <div className="forma">
                                        <a href="#" className="bot_acla right_ mar_t_3 bot_value" onClick={openModal}>ACLARACIÓN</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        
      </Fragment>
  );
 }


// Exporting component
export default FiltroReportesDetalle;
