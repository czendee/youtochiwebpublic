// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";

import icon1 from '../assets/img/sol.png';
import icon2 from '../assets/img/cal.png';
import close_m from '../assets/img/close.svg';

import HomeBitacora from "../components/home/Home-Bitacora.jsx";
import HomeReportes from "../components/home/Home-Reportes.jsx";
import HomeDashboard from "../components/home/Home-Dashboard.jsx";
import HomeOrdenCompra from "../components/home/Home-OrdenCompra.jsx";
import HomeOrdenVenta from "../components/home/Home-OrdenVenta.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Modal from 'react-modal'
import swal from 'sweetalert';

// Component
const Home = (props) => {
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
                <div class="d10 left_">&nbsp;</div>
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
    


        <div className="forma slider mar_t_6">
            <div className="contenedor3 center">
                <div className="d50 left_">
                    <div className="forma bloque_prin bloque1">
                        <div className="forma">
                            <h1 className="d80 left_">
                                PUNTO ELECTRÓNICO<br/> DIARIO
                            </h1>
                            <div className="d20 left_">
                                <img src={icon1} />
                            </div>
                        </div>
                        <div className="forma">
                            <p className="d80 left_">
                                Carga tus archivos BATCHS diarios solo da click en el botón adjuntar.
                            </p>
                        </div>
                        <div className="forma">
                            <button className="boton_gen boton1" onClick={openModal}>
                                ADJUNTAR AHORA
                            </button>
                        </div>
                    </div>    
                </div>
                
                <div className="d50 left_">
                    <div className="forma bloque_prin bloque2">
                        <div className="forma">
                            <h1 className="d80 left_">
                                PUNTO ELECTRÓNICO<br/> EXTRAQORDINARIO
                            </h1>
                            <div className="d20 left_">
                                <img src={icon2} />
                            </div>
                        </div>
                        <div className="forma">
                            <p className="d80 left_">
                                Carga tus archivos BATCHS diarios solo da click en el botón adjuntar.
                            </p>
                        </div>
                        <div className="forma">
                            <button className="boton_gen boton2" onClick={openModal2}>
                                ADJUNTAR AHORA
                            </button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <div className="forma tit_it">
            <h2 className="forma t_center"><i>CONCILIACIONES</i></h2>   
        </div>
        <div className="forma contenido_hom">
            <div className="contenedor3 center">
                
                <HomeReportes></HomeReportes>
                <HomeBitacora></HomeBitacora>
                <HomeDashboard></HomeDashboard>
                
            </div>
        </div>
        <div className="forma tit_it mar_t_0">
            <h2 className="forma t_center mar_t_0"><i>GENERA TU ÓRDEN</i></h2>   
        </div>
        <div className="forma orden">
            <div className="contenedor3 center">
              <div className="forma mar_t_10">
                  <div className="d95 center">
                        <HomeOrdenCompra></HomeOrdenCompra>
                        <HomeOrdenVenta></HomeOrdenVenta>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        
    </div>
      </header>
    </div>
    </Fragment>
  );
}

// Exporting component
export default Home;
