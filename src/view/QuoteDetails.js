// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";
import close_m from '../assets/img/close.svg';
import Header from "../components/Header.jsx";

// Component
const UsersDetails = (props) => {
      var logOut = () => {
        localStorage.clear();
        props.history.push("/quote");
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
      
      
    //logic to execute when onload the new screen  
    const querystring = window.location.search
    const params = new URLSearchParams(querystring);


    var cotizacion_id = params.get('cotizacion');
      
    const requestInfo = {
        method: 'GET',
    };

    if((cotizacion_id!== null) ){
          //fetch the cotizacion

                   var laUrlmandar='https://sandbox.banwire.com/quote-back/banwireapi/cotizacionbynumero/'+cotizacion_id;
                   console.log('carlos z  carga inicial 1:' +laUrlmandar);
                fetch(laUrlmandar, requestInfo)
                .then(response =>{
                  
                    console.log('carlos z  carga inicial paso 2' );
                    
                    console.log(response);
                    if(response.ok){
                        console.log('carlos z carga inicial paso 3' );
                        //this.messajin = 'Si encontro algo';
                        return response.json();
                    }
                    console.log('carlos z  carga inicial paso 4' );
                    throw new Error("Accessos no válidos.");
//                });
                })
                .then(data =>{
                         console.log('carlos z carga inicial aso 5 ');

                        console.log(data);                   

                      for (var i = 0; i < data.length; i++) {
                             if (document.contains(document.getElementById("nombre"))) {
                                 console.log('carlos z set the values from db into the screen' );
                                  document.getElementById("nombre").value = data[i].name;
                                   document.getElementById("contacto").value = data[i].datoscliente.contacto.nombrecon;
                                   document.getElementById("contactoemail").value = data[i].datoscliente.contacto.emailcon;
                                   document.getElementById("contactotel").value = data[i].datoscliente.contacto.telefonocon;
                                   
                                   
                                   //costo
                                  var costos =    data[i].costo; 
                                  var imagenlinea = ' ';
                                   for (var i = 0; i < costos.length; i++) {
                                         //for each costo
                                          var mediopago = costos[i];
                                          var banderavacio ="NO";
                                          if(mediopago === null || mediopago === undefined  || mediopago === ''){
                                             //no hacer nadda
                                             banderavacio ="SI";
                                          }else{
                                             banderavacio ="NO";
                                          }//end else costo es 
                                         
                                         // hay un costo para uno de las fromas de pago
                                            console.log(mediopago.mediodepago + " is a " + mediopago.comisionvariable + " company." +mediopago.comisionvariabletipo);
                                            console.log(mediopago.mediodepago + " is a " + mediopago.comisionfija + " company." +mediopago.comisionfijatipo);
                                           var mediodepago = mediopago.mediodepago;
                                           var variablo = mediopago.comisionvariable;

                                           var fija = mediopago.comisionfija;


                                           if ( banderavacio =='SI'){
                                           }else{
                                                   var nombremedio ="nada";
                                                   if(mediodepago == 'Visa / Master Card'){
                                                            nombremedio="dvm";
                                                   }
                                                   if(mediodepago == 'OXXO'){
                                                            nombremedio="dox";
                                                   }
                                                   if(mediodepago == 'Paycash'){
                                                            nombremedio="dpy";
                                                   }
                                                   if(mediodepago == 'SPEI'){
                                                            nombremedio="dspei";
                                                   }
                                                   if(mediodepago == 'Store Pay'){
                                                            nombremedio="dsp";

                                                   }
                                                   if(mediodepago == 'AMEX'){
                                                            nombremedio="damex";
                                                   }                                                  
                                                 imagenlinea = imagenlinea +'        <tr className="forma"> ';
                                                 imagenlinea = imagenlinea +'  <td className="t_left">  ';
                                                 imagenlinea = imagenlinea +'<b>'+mediodepago+'</b>  ';
                                                 imagenlinea = imagenlinea +'</td>  ';
                                                 imagenlinea = imagenlinea +' <td> ';
                                                 imagenlinea = imagenlinea +'      <input type="numbrer" name="'+nombremedio+'variablo" id="'+nombremedio+'variablo" value="'+variablo+'" placeholder="'+variablo+'%"/> %  ';  
                                                 imagenlinea = imagenlinea +'</td> ';
                                                 imagenlinea = imagenlinea +'<td>  ';
                                                 imagenlinea = imagenlinea +'    <input type="numbrer"  name="'+nombremedio+'fijo" id="'+nombremedio+'fijo" value="'+fija+'" placeholder="$'+fija+'"/> $ ';
                                                 imagenlinea = imagenlinea +'</td>  ';
                                                 imagenlinea = imagenlinea +' <td>  ';
                                                 imagenlinea = imagenlinea +'   <select id="'+nombremedio+'">  ';
                                                 imagenlinea = imagenlinea +'      <option  value ="0" >0%</option>  ';
                                                 imagenlinea = imagenlinea +'      <option  value ="5" >5%</option>  ';
                                                 imagenlinea = imagenlinea +'      <option  value ="10" >10%</option>  ';
                                                 imagenlinea = imagenlinea +'      <option  value ="15" >15%</option>  ';
                                                 imagenlinea = imagenlinea +'   </select>  ';
                                                 imagenlinea = imagenlinea +'</td>  ';
                                    
                                                   imagenlinea = imagenlinea +' </tr> ';

                                           }
                                         
                                   }//end for costos
                                    var tablitaContainer = document.getElementById("tablitaresultados");//tbody
                                   tablitaContainer.insertAdjacentHTML("beforeend", imagenlinea);
                              }//end if nombre

                           console.log('carlos z   set the values from db into the screen paso after' );
                          
                            
                            
                      }//end for for each data
                    
                        console.log('carlos z paso 7' );
                })      
                .catch(e => {
                    console.log('carlos z paso 8 err' );
                    //this.setState({ message: e.message });   
                });                    
    }
      
      ////////////////////////START al editar se creara una nueva cotizacion, con un nuevo id de cotizacion
      
    
      const editarCotizacion = () => {

        
        
               console.log('carlos z editarCotizacion paso 1' );
               const requestInfo = {
                    method: 'GET',
               };
        
               console.log('carlos z editarCotizacion paso 2+' );


                const tcamponamenegocio = document.getElementById("nombre");
                const valeId = cotizacion_id;
                const tcampocontactoname = document.getElementById("contacto");
                const tcampocontactoemail = document.getElementById("contactoemail");
                const tcampocontactontel = document.getElementById("contactotel");
            
                var laUrlmandar='https://sandbox.banwire.com/quote-back/banwireapi/cotizacionesbynumero2/20200800007/NADA/NADA';
                var valeNegocio="NADA";
                if(tcamponamenegocio.value === ""){

                } else{              
                    valeNegocio =tcamponamenegocio.value;
                }

                 var valeContactoName="NADA";
                if(tcampocontactoname.value === ""){

                } else{              
                    valeContactoName =tcampocontactoname.value;
                }
                 var valeEmailnegocio="NADA";
                if(tcampocontactoemail.value === ""){

                } else{              
                    valeEmailnegocio =tcampocontactoemail.value;
                }      
                var valeTelContacto="NADA";
                if(tcampocontactontel.value === ""){

                } else{              
                    valeTelContacto =tcampocontactontel.value;
                }




                 console.log('carlos z editarCotizacion paso 2.5:' +laUrlmandar);
                laUrlmandar='https://sandbox.banwire.com/quote-back/banwireapi/cotizacionmodificar/'+valeId+'/'+valeNegocio+'/'+valeContactoName+'/'+valeEmailnegocio+'/'+valeTelContacto;
                console.log('carlos z editarCotizacion paso 2.6:' +laUrlmandar);

                 console.log('carlos z editarCotizacion paso 0.2' );
                 
                 fetch(laUrlmandar, requestInfo)
                 .then(response =>{
                      console.log('carlos z editarCotizacion paso 1.1' );
                      console.log(response);
                        if(response.ok){
                           console.log('carlos z editarCotizacion paso 1.2' );
//                           $enviar = true;

                           return response.json();

                        }else{
                           console.log('carlos z editarCotizacion paso 1.3' );
//                           $enviar = false;
                        }

                 })  
                  .then(data =>{
                       for (var i = 0; i < data.length; i++) { 
                             document.getElementById('idcotizacion').value =data[i].numero;
                       }    
                       console.log('carlos z editarCotizacion paso 8 EXITO' );
                  })
                  .catch(e => {
                      console.log('carlos z editarCotizacion paso 8 err' );
                      //this.setState({ message: e.message });   
//                     $enviar = false;
                  }); 
             

            
    }      
////////////////////////END al editar se creara una nueva cotizacion, con un nuevo id de cotizacion
      
      //validacion de selects

document.addEventListener('change', (event) => {
  var elemenid = (`${event.target.id}`);
  
   //console.log(elemenid+`${event.target.id} ${event.target.value}`);


  
  if(elemenid=="dvm"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=(document.getElementById('dvmvariablo').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('dvmvariablo').value = dosDecimales(porcent_total);
   }
   
  if(elemenid=="damx"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=(document.getElementById('damxvariablo').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('damxvariablo').value = dosDecimales(porcent_total);
   }


   if(elemenid=="dox"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=(document.getElementById('doxvariablo').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('doxvariablo').value = dosDecimales(porcent_total);
   }


   if(elemenid=="dpy"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=(document.getElementById('dpyvariablo').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('dpyvariablo').value = dosDecimales(porcent_total);
   }

   if(elemenid=="dspei"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=(document.getElementById('dspeivariablo').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('dspeivariablo').value = dosDecimales(porcent_total);
   }

   if(elemenid=="dsp"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=(document.getElementById('dspvariablo').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('dspvariablo').value = dosDecimales(porcent_total);
   }


});
      
 function dosDecimales(n) {
  let t=n.toString();
  let regex=/(\d*.\d{0,2})/;
  return t.match(regex)[0];
}
      
  return (
    <Fragment>
    <div className="App">
      <header className = "App-header">
      <div className="App">

        <Header logOut={logOut} getUserInfo={getUserInfo}></Header>
        
        
    <div>
   
    
  </div>
    


  <div className="forma slider_tab .slider_tab mar_t_5">
        <div className="contenedor3 center">
            <div className="forma">               
                <h1 className="forma left_ t_center mar_t_10">
                    COTIZACION - DETALLE
                </h1>
            </div>
        </div>    
    </div>
    <div className="forma tit_it">
        <div className="contenedor3 center">
            <form className="forma orde_det"   >
                <div className="d30 left_">    
                    
                    <div className="forma inputs_filter mar_t_3">
                    <h4 className="forma t_left">Datos fiscales</h4> 
                        <div className="forma mar_b_2">
                            <label className="forma">Nombre del cliente (Razón Social)</label>
                            <input type="text" className="t_left" id="nombre" name="nombre" placeholder="Onda Gamma S.A de C.V."/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Giro MCC</label>
                            <select className="select t_left">
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

                        <h4 className="forma t_left">Datos del contacto del comercios</h4> 
                        <div className="forma mar_b_2">
                            <label className="forma">Nombre y Apellidos</label>
                            <input type="text" className="t_left" id="contacto" name="contacto" placeholder="Victor Erick Rodríguez Gil"/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">E-mail</label>
                            <input type="text" className="t_left" id="contactoemail" name="contactoemail" placeholder="erodriguez@ondagamma.com"/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Teléfono</label>
                            <input type="text" className="t_left" id="contactotel" name="contactotel" placeholder="55 1492 5259"/>
                        </div>
                    </div>
                </div>
                <div className="d70 left_">
                    <div className="d90 right_">
                        <table className="forma terminales o_c_d mar_t_7">
                            
                            <tbody className="forma" id="tablitaresultados">
                                <tr className="forma">
                                    <th className="t_left">
                                    MEDIO DE PAGO
                                    </th>
                                    <th>
                                    COMISIÓN VARIABLE
                                    </th>
                                    <th>
                                    COMISIÓN FIJA
                                    </th>
                                    <th>
                                    DESCUENTO
                                    </th>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="forma">
                    <div className="d90 center">
                        <div className="forma">
                            <input type="button" className="right_ mar_t_3 bot_value bot_value2" value="GENERAR NUEVA COTIZACIÓN 3" onClick={editarCotizacion} />
                        </div>
                    </div>
                </div>
            </form>  
        </div> 
    </div>
     
        
    </div>
      </header>
    </div>
    </Fragment>
  );
}

// Exporting component
export default UsersDetails;
