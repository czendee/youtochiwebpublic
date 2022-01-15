// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";
import close_m from '../assets/img/close.svg';
import alert from '../assets/img/adv2.svg';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Modal from 'react-modal'
import swal from 'sweetalert';

// Component
const UsersDetails = (props) => {
    var subtitle;
    var subtitle2;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [modalIsOpen2,setIsOpen2] = React.useState(false);

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

      function openModal2() {
        setIsOpen2(true);
      }
    
      function afterOpenModal2() {
        // references are now sync'd and can be accessed.
        subtitle2.style.color = '#f00';
      }
    
      function closeModal2(){
        setIsOpen2(false);
      }

      function alertModal_Succes(){
        swal({
            title: "Carga de archivo",
            text: "Tu archivo se ha cargado exitosamente",
            icon: "success",
            button: "ACEPTAR",
          });
          {closeModal()}
      }

      function alertModal_Danger(){
        swal({
            title: "Carga de archivo",
            text: "Hubo un error al cargar tu archivo",
            icon: "error",
            button: "ACEPTAR",
          });
       
      }
      var logOut = () => {
        localStorage.clear();
        props.history.push("/chargebacks");
        return
      };

      var getUserInfo = () => {
        var storage = localStorage.getItem('token-chargebacks-jwt');

        var base64Url = storage.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        console.log(jsonPayload)
        return JSON.parse(jsonPayload);
      };

  return (
    <Fragment>
    <div className="App">
      <header className = "App-header">
      <div className="App">

        <Header logOut={logOut} getUserInfo={getUserInfo}></Header>
        
        
    <div>
   
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      
      contentLabel="Example Modal"
    >

        <h3 ref={_subtitle => (subtitle = _subtitle)} className="forma t_center">CARGA DE ARCHIVO
        </h3>
        <button onClick={closeModal} className="close_mod">
            <img src={close_m}/>
        </button>
      {/* Ingresar datos modal aqui */}

      <form className="inputs_filter">
            
            <div className="d50 center mar_t_3">
                <div className="forma mar_t_1">
                    <input id="upload" type="file"/>
                    <label for="upload" className="upload forma">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
                        </svg>
                        <span> Carga tu archivo...</span>
                    </label>
                </div>
                <div className="forma mar_t_2">
                    <label className="forma">Fecha inicial</label>
                    <input type="date" id="start" name="" min="2018-01-01" value="2018-07-22"/>
                </div>

                <div className="forma mar_t_2">
                    <label className="forma">Terminal</label>
                    <select className="select">
                        <option>Visa / Master Card</option>
                        <option>AMEX</option>
                        <option>OXXO</option>
                        <option>Paycash</option>
                        <option>SPEI</option>
                    </select>
                </div>
                <div className="forma">
                    <input type="submit" className="bot_value mar_none_bot buscar" value="BUSCAR AHORA" />
                </div>
            </div>
      </form>
      

      <div>
      <button onClick={alertModal_Succes}> Success </button>
      <button onClick={alertModal_Danger}> Error </button>

      </div>


        {/* --> final del modal */}
    </Modal>

      <Modal
      isOpen={modalIsOpen2}
      onAfterOpen={afterOpenModal2}
      onRequestClose={closeModal2}
      
      contentLabel="Example Modal"
    >

      <h3 ref={_subtitle2 => (subtitle2 = _subtitle2)} className="forma t_center"> CARGAR ARCHIVO</h3>

      <button onClick={closeModal2} className="close_mod"><img src={close_m}/></button>
      {/* Ingresar datos modal aqui */}

      <form className="inputs_filter">
            
            <div className="d50 center mar_t_3">
                <div className="forma mar_t_1">
                    <input id="upload" type="file"/>
                    <label for="upload" className="upload forma">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
                        </svg>
                        <span> Carga tu archivo...</span>
                    </label>
                </div>
                <div className="forma mar_t_3">
                <div className="d45 left_">
                
                    <label className="forma">Fecha inicial</label>
                    <input type="date" id="start" name="" min="2018-01-01" value="2018-07-22"/>
        
                </div>
                <div className="d10 left_">&nbsp;</div>
                <div className="d45 left_">
                    <label className="forma">Fecha inicial</label>
                    <input type="date" id="start" name="" min="2018-01-01" value="2018-07-22"/>
                </div>
                </div>
                <div className="forma mar_t_2">
                    <label className="forma">Terminal</label>
                    <select className="select">
                        <option>Visa / Master Card</option>
                        <option>AMEX</option>
                        <option>OXXO</option>
                        <option>Paycash</option>
                        <option>SPEI</option>
                    </select>
                </div>
                <div className="forma">
                    <input type="submit" className="bot_value mar_none_bot buscar" value="BUSCAR AHORA" />
                </div>
            </div>
      </form>
      
      <div>
      <button onClick={alertModal_Succes}> Success </button>
      <button onClick={alertModal_Danger}> Error </button>
      </div>
      

      
        {/* --> final del modal */}
    </Modal>
  </div>
    


  <div className="forma slider_tab .slider_tab mar_t_5">
        <div className="contenedor3 center">
            <div className="forma">               
                <h1 className="forma left_ t_center mar_t_10">
                    USUARIO
                </h1>
            </div>
        </div>    
    </div>
    <div className="forma tit_it">
        <div className="contenedor3 center">
            <form className="forma orde_det">
                <div className="d33 left_">    
                    
                    <div className="forma inputs_filter mar_t_3">
                    <h2 className="forma t_left">Datos de usuario</h2>
                    <div className="forma mar_t_3 mar_b_2">
                            <label className="forma">Tipo de Perfil</label>
                            <select className="select t_left">
                            <option >Administrador</option>
                            <option>Asesor</option>
                            <option>Agente</option>
                            </select>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Nombre del Usuario</label>
                            <input type="text" className="t_left" name="" placeholder="Victor Erick Rodríguez Gil"/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Teléfono</label>
                            <input type="text" className="t_left" name="" placeholder="55 1492 5259"/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">E-mail</label>
                            <input type="text" className="t_left" name="" placeholder="erodriguez@banwire.com"/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Vincular cuentas</label>
                            <input type="text" className="t_left" name="" placeholder=""/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Corizaciones</label>
                            <a href="/quote/quotes" className="mar_t_2 user_tab forma">5</a>
                        </div>
                    </div>
                </div>
                <div className="d66 left_ mar_t_3">
                <div className="d90 right_">
                <h2 className="forma t_left">Permisos</h2>
                <div className="d50 left_">
                    <div className="d90 right_ mar_t_3">
                   
                        <h4 className="forma t_left ">Cuenta personal</h4> 
                        <div className="check_int forma">
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Nombre</label>
                            </div>
                            
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Teléfono</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Permiso para Vincular cuentas</label>
                            </div>
                        </div>
                        <h4 className="forma t_left">Cuentas vinculadas</h4> 
                        <div className="check_int forma">
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Permisos</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Nombres</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Teléfono</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Rol de cuenta</label>
                            </div>
                        </div>
                        <h4 className="forma t_left">Cuentas globales</h4> 
                        <div className="check_int forma">
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Creación de Cuentas</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Eliminación de Cuentas</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Clonación de Cuentas</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Nombres en cuentas</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Teléfonos en cuentas</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Roles de cuentas</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Permisos en cuentas</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Permiso para Vincular cuentas</label>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="d50 left_ mar_t_3">
                    <div className="d90 right_">
                    

                        <h4 className="forma t_left">Cotizaciones Personales</h4> 
                        <div className="check_int forma">
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Visualizar Cotizaciones personales</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Tasas fijas</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Tasas variables</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Descuentos</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Eliminar Cotizaciones</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Generación de Cotizaciones PDF</label>
                            </div>
                        </div>

                        <h4 className="forma t_left">Cotizaciones Globales</h4> 
                        <div className="check_int forma">
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Visualizar Cotizaciones globales</label>
                            </div>
                            
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Tasas fijas</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Tasas variables</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Edición de Descuentos</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Eliminar Cotizaciones</label>
                            </div>
                            <div className="forma mar_b_2">
                                <input type="checkbox" className="t_left" name=""/>
                                <label className="left_">Generación de Cotizaciones PDF</label>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    
                </div>
                </div> 
                <div className="forma">
                                <div className="d90 center">
                                    <div className="forma">
                                    <input type="submit" className="right_ mar_t_3 bot_value bot_value2" value="GUARDAR USUARIO" />
                                    </div>
                                </div>
                            </div>
            </form>  
        </div> 
    </div>
     
        
    </div>
    <Footer></Footer>
      </header>
    </div>
    </Fragment>
  );
}

// Exporting component
export default UsersDetails;
