// Importing Libraries
// Importing Libraries
import React, { Component, lazy, Suspense,Fragment } from "react";

import {ReactComponent as EditLogo} from '../assets/img/edit.svg';
import {ReactComponent as DownloadLogo} from '../assets/img/download.svg';
import {ReactComponent as TrashLogo} from '../assets/img/trash.svg';

import logo from '../assets/img/logo.svg';

import edit from '../assets/img/edit.svg';
import download from '../assets/img/download.svg';
import trash from '../assets/img/trash.svg';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import calendario from '../assets/img/cal.jpg';
import sombra_tab from '../assets/img/sombra3.png';

// Component
var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
class Listacotizaciones extends Component {
    
    constructor(props){
        super(props)
        this.messajin = 'Nada para nadie';
        this.state = {
            message : this.props.location.state?this.props.location.state.message: '',
        };
    }
    
    restPass = () => {
        const data = { email: this.email};
        const requestInfo = {
            method: 'POST',
            body:JSON.stringify(data),
            headers: new Headers({
                'Content-Type':'application/json'
            }),
        };

        if (!pattern.test(data.email)){
            this.setState({ message : 'El correo electronicó no es válido.' });  
            return
        }

       fetch('https://sandbox.banwire.com/auth/v1/account/reset', requestInfo)
       .then(response =>{
           if(response.ok){
               return response.json()
           }
           throw new Error("E-mail inválido, intenta nuevamente.");
       })
       .then(token => {
        localStorage.setItem('token', token);
        this.props.history.push("/chargebacks/account/send");
        return;
        })
       .catch(e => {
        this.setState({ message: e.message });   
        });
    }

  
  traeCotizaciones = () => {

        const data = { numero : "122", name: "primero"};
        const requestInfo = {
            method: 'POST',
            body:JSON.stringify(data),
            headers: new Headers({
                'Content-Type':'application/json'
            }),
        };
          console.log('carlos z paso 1' );
          console.log('carlos z paso 2+' +this.ejecutivo);
/*
        if (!pattern.test(data.email)){
            this.setState({ message : 'El correo electronicó no es válido.' });  
@@ -27,7 +27,7 @@ const FiltroReportes= () => {
            return
        }
*/


//        fetch('http://peaceful-retreat-91246.herokuapp.com/banwireapi/cotizaciones', requestInfo)
//        fetch('http://198.101.187.112:3006/banwireapi/cotizaciones', requestInfo)      
      
      fetch('https://sandbox.banwire.com/quote-back/banwireapi/cotizaciones', requestInfo)      
      
        .then(response =>{
              console.log('carlos z paso 3' );
            if(response.ok){
                  console.log('carlos z paso 3' );
                return response.json()
            }
              console.log('carlos z paso 4' );
            throw new Error("Error cotizacioness.");
        })
        .then(data =>{
                 console.log('carlos z paso 5' );
                this.ejecutivo ='carlosdata';
          
               console.log(data)
                console.log('carlos z paso 6' );
          
        })      
        .catch(e => {
            this.setState({ message: e.message });   
        });
    }

  // populate table with new data
  //updateTable = (data, values) => {
/*
function updateTable(data, values) {
      console.log('carlos z  function updateTable paso 1' );
      const tbody = document.getElementById("t");
      // clear existing data from tbody if it exists
      tbody.innerHTML = "";
      console.log('carlos z  function updateTable paso 2' );
      var p = "";
      p += "<tr className='forma'>";
      console.log('carlos z  function updateTable paso 3' );
      values.forEach(value => {
          p += "<td>" + data[value] + "</td>";
          console.log('carlos z  function updateTable paso 4' );
          
      })
      console.log('carlos z  function updateTable paso 5' );      
      tbody.insertAdjacentHTML("beforeend", p);
      console.log('carlos z  function updateTable paso 6' );
}
*/
  
  
  deshabilitaCotizacion = () => {
/*
         this.messajin = 'buscarCotizacion paso 1';
         console.log('carlos z paso 1' );
                const requestInfo = {
                    method: 'GET',
              };

          const tcampoidcotizacion = document.getElementById("idcotizacion");
           var valeId="NADA";
          if(tcampoidcotizacion.value === ""){
              
          } else{              
              valeId =tcampoidcotizacion.value;
          }

          laUrlmandar='https://sandbox.banwire.com/quote-back/banwireapi/deshabilitacotizacionbynumero/'+valeId;
          console.log('carlos z paso 2.6:' +laUrlmandar);
//                fetch('http://peaceful-retreat-91246.herokuapp.com/banwireapi/cotizacionesbynumero2/20200800007/NADA/NADA', requestInfo)
//                fetch('https://sandbox.banwire.com/quote-back/banwireapi/cotizacionesbynumero2/20200800007/NADA/NADA', requestInfo)
                fetch(laUrlmandar, requestInfo)
                .then(response =>{
                    console.log('carlos z paso 3' );
                    this.messajin = 'buscarCotizacion paso 3';
                    console.log(response);
                    if(response.ok){
                        console.log('carlos z paso 4' );
                        this.messajin = 'Si encontro algo';
                        return response.json()
                    }
                    console.log('carlos z paso 5' );
                    throw new Error("Accessos no válidos.");
//                });
                })
                .then(data =>{
                         console.log('carlos z paso 6' );
                })      
                .catch(e => {
                    console.log('carlos z paso 8 err' );
                    this.setState({ message: e.message });   
                });               
      */

  }
  
  buscarCotizacion = () => {

         this.messajin = 'buscarCotizacion paso 1';
         console.log('carlos z paso 1' );
                const requestInfo = {
                    method: 'GET',
              };


        this.messajin = 'buscarCotizacion paso 2';
         console.log('carlos z paso 2+' +this.ejecutivo);
      
          const tcampoejecutivo = document.getElementById("ejecutivo");
          const tcamponamenegocio = document.getElementById("namenegocio");
      
          const tcampoidcotizacion = document.getElementById("idcotizacion");
          const tcampocontactoname = document.getElementById("contactoname");
          const tcampomontomes = document.getElementById("montomes");
      
          const tcampostartf = document.getElementById("startf");
          const tcampoendf = document.getElementById("endf");

          console.log('carlos z paso 2.1:' +tcampoejecutivo.value);
          console.log('carlos z paso 2.2:' +tcampoidcotizacion.value);
          console.log('carlos z paso 2.3:' +tcampocontactoname.value);
          console.log('carlos z paso 2.4:' +tcampomontomes.value);
          console.log('carlos z paso 2.5:' +tcamponamenegocio.value); 
      console.log('carlos z paso 2.6:' +tcampostartf.value);
      console.log('carlos z paso 2.7:' +tcampoendf.value);
      
          var laUrlmandar='https://sandbox.banwire.com/quote-back/banwireapi/cotizacionesbynumero2/20200800007/NADA/NADA';
           var valeId="NADA";
          if(tcampoidcotizacion.value === ""){
              
          } else{              
              valeId =tcampoidcotizacion.value;
          }
      
           var valeEjecutivo="NADA";
          if(tcampoejecutivo.value === ""){
              
          } else{              
              valeEjecutivo =tcampoejecutivo.value;
          }
           var valeNamenegocio="NADA";
          if(tcamponamenegocio.value === ""){
              
          } else{              
              valeNamenegocio =tcamponamenegocio.value;
          }      
          var valeContacto="NADA";
          if(tcampocontactoname.value === ""){
              
          } else{              
              valeContacto =tcampocontactoname.value;
          }
          var valeMontomes="NADA";
          if(tcampomontomes.value === ""){
              
          } else{
              valeMontomes =tcampomontomes.value;
          }
      
           console.log('carlos z paso 2.5:' +laUrlmandar);
          laUrlmandar='https://sandbox.banwire.com/quote-back/banwireapi/cotizacionesbynumero2/'+valeId+'/'+valeNamenegocio+'/'+valeEjecutivo+'/'+valeContacto+'/'+valeMontomes +'/'+tcampostartf.value+'/'+tcampoendf.value;
          console.log('carlos z paso 2.6:' +laUrlmandar);
//                fetch('http://peaceful-retreat-91246.herokuapp.com/banwireapi/cotizacionesbynumero2/20200800007/NADA/NADA', requestInfo)
//                fetch('https://sandbox.banwire.com/quote-back/banwireapi/cotizacionesbynumero2/20200800007/NADA/NADA', requestInfo)
                fetch(laUrlmandar, requestInfo)
                .then(response =>{
                    console.log('carlos z paso 3' );
                    this.messajin = 'buscarCotizacion paso 3';
                    console.log(response);
                    if(response.ok){
                        console.log('carlos z paso 4' );
                        this.messajin = 'Si encontro algo';
                        return response.json()
                    }
                    console.log('carlos z paso 5' );
                    throw new Error("Accessos no válidos.");
//                });
                })
                .then(data =>{
                         console.log('carlos z paso 6' );
                        this.ejecutivo ='carlosdata';
//                        tcampoejecutivo.value ='carlosdata33';
                        console.log(data);
                    
                    //campos del json en mongo : numero  fecharhoracreacion  ejecutivo   
//                    updateTable(data, ['numero', 'fecharhoracreacion', 'ejecutivo']);
                      
                      var tablitaContainer = document.getElementById("tablitaresultados");//tbody
                      var renglonEjemplo = document.getElementById("rengloncito");    
                    
                        //remove any old row from previous
                       console.log('carlos z  function updateTable paso antes- remove any old row from previous' );
                       if (document.contains(document.getElementById("rengloncitoNuevo"))) {
                           console.log('carlos z  function updateTable paso  remove any old row from previous' );
                            document.getElementById("rengloncitoNuevo").remove();
                        } 
                        console.log('carlos z  function updateTable paso despues- remove any old row from previous' );
//                      tablitaContainer.innerHTML = "";  //limpiar contenido de tbody, remove the previous records
                      for (var i = 0; i < data.length; i++) {
//                           var p = "";
//                           p += "<tr className='forma'>";
                          var renglonNuevo = document.createElement("rengloncitoNuevo");


                           console.log('carlos z  function updateTable paso 4.1' );
                          
                          renglonNuevo.innerHTML= renglonEjemplo.innerHTML;
                          var contenidoNuevo =renglonNuevo.innerHTML;
                          var res =renglonNuevo.innerHTML;
                           console.log('carlos z  function updateTable paso 4.2' );     
                          console.log('carlos z  function updateTable paso 4.3:' +res); 
                          res= contenidoNuevo.replace("D22SG-JG","<td>"+ data[i].numero+"</td>");
                          res= res.replace("Ejemplo MCC", "<td>"+data[i].datoscliente.girommc+"</td>");
                          res= res.replace("20/03/2020", "<td>"+data[i].name+"</td>");
                          res= res.replace("Ejecutivo 1", "<td>"+data[i].ejecutivo);
                          res= res.replace("Negocio 1","<td>"+data[i].datoscliente.razonsocial+"</td>");
                          res= res.replace("Contacto 1","<td>"+data[i].datoscliente.contacto.nombrecon+"</td>");
                          res= res.replace("100000","<td>"+data[i].datoscliente.montoprocesadopormes+"</td><TD>");
                          
                          
                          console.log('carlos z  function updateTable paso 4.3:' +res); 
                           console.log('carlos z  function updateTable paso 4.4' );
                          
                           // tablitaContainer.appendChild(div);
                          tablitaContainer.insertAdjacentHTML("beforeend", res);
                          console.log('carlos z  function updateTable paso 4.4' );                          
                      }//end for for each data
                    
                        console.log('carlos z paso 7' );
                })      
                .catch(e => {
                    console.log('carlos z paso 8 err' );
                    this.setState({ message: e.message });   
                });                    
        
        this.messajin = 'buscarCotizacion paso 44';
        
        };


        render() {
  return (
    <Fragment>
    <div className="App">
      <header className = "App-header">
      <div className="App">


        <div className="forma slider_tab mar_t_5">
            <div className="contenedor3 center">
                <div className="forma">               
                    <h1 className="forma left_ t_center mar_t_10">
                        COTIZACIONES
                    </h1>
                </div>
            </div>    
        </div>
        <div className="forma tit_it">
        <div className="contenedor3 center">
            <div className="forma">
                <h2 className="forma t_left">Filtrar Cotización</h2> 
                <form className="forma inputs_filter mar_t_3">

                        <div className="d16 left_">
                            <label className="forma">Id Cotización</label>
                            <input type="text" name="idcotizacion" id="idcotizacion" />
      

      
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Ejecutivo</label>
                            <input type="text" name="ejecutivo" id="ejecutivo"  />
                        </div>
                        
                        <div className="d16 left_">
                            <label className="forma">Negocio</label>
                                  <input type="text" name="namenegocio" id="namenegocio"  />
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Giro MCC</label>
                            <select className="select"  name="listamcc" id="listamcc">
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
                            <input type="text"  name="contactoname" id="contactoname"/>
                        </div>
                        <div className="d16 left_">
                            <label className="forma">Monto por mes</label>
                            <input type="text"  name="montomes" id="montomes" />
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
                                <input type="date" id="startf" name="trip-start" value="2018-07-22"min="2018-01-01" name="" />
                            </div>
                            <div className="d16 left_">
                                <label className="forma">Fecha final</label>
                                <input type="date" id="endf" name="trip-start" value="2018-07-22"min="2018-01-01" name="" />
                            </div>
                            <div className="d50 left_">
                                <div className="d97 right_">
                                    
                                        <input type="button" className="right_ mar_t_3 bot_value" id='propuesta' value="FILTRAR AHORA" onClick={this.buscarCotizacion}/>
                                </div>
                            </div>
                        </div>
                  </form>
                </div>
           </div>  
        </div>
        <div className="forma mar_t_10 mar_b_10 absolute">
                            
                            <p className="t_center forma alert_error"></p>
                        </div>
            
                        {
                        this.messajin !== ''? (
                        <p className="t_center forma alert_error">{this.messajin}</p>
                        ) : 'naditita'
                    }
            
        <div className="contenido_tabs forma">
        
            
            <div className="forma">
                <div className="d90 center">
                <table className="forma tab_repo">
                    <tbody className="forma doce" id="tablitaresultados">
                        <tr className="forma" id="renglonencabezado">
                            <th>
                                IDDDD
                            </th>
                            <th>
                                FECHA
                            </th>
                            <th>
                                EJECUTIVO BW
                            </th>
                            <th>
                                NEGOCIO
                            </th>
                            <th>
                                GIRO MCC
                            </th>
                            <th>
                                CONTACTO
                            </th>
                            <th>
                                MONTO X MES
                            </th>
                            
                            <th className="padd_0 back_r">
                                ACCIONES
                            </th>
                        </tr>                        

                        <tr className="forma"  id="rengloncito">                            
                            <td>
                                D22SG-JG            
                            </td>
                            <td>
                                20/03/2020                                    
                            </td>
                            <td>
                                <a className="user_tab" href="/quote/usersdetails">Ejecutivo 1</a>
                            </td>
                            <td>
                                Negocio 1
                            </td>
                            <td>
                                Ejemplo MCC
                            </td>
                            <td>
                                Contacto 1
                            </td>
                            <td>
                                100000
                            </td>
                            
                            <td>
                                <a href="/quote/quotedetails" className="left_ d33 icons_a">
                                    <img src={edit} /> 
                                </a>
                                <a href="/quote/getpdf" className="left_ d33 icons_a">
                                    <img src={download} /> 
                                </a>
                                <a href="/quote/quotedetailsdeshabilitar" className="left_ d33 icons_a">
                                    <img src={trash}  /> 
                                </a>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
                </div>    
            </div>
        <div className="bord_tab_top forma">&nbsp;</div>
        <img src={sombra_tab} className="center forma" />
        
        <ul className="navigator">
        </ul>
        
        </div>
        
   
    

      </div>
      <Footer></Footer>
      </header>
    </div>
    </Fragment>
  );
}
}
// Exporting component
export default Listacotizaciones ;
