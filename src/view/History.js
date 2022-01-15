// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";
import edit from '../assets/img/edit.svg';
import download from '../assets/img/download.svg';
import trash from '../assets/img/trash.svg';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import calendario from '../assets/img/cal.jpg';
import sombra_tab from '../assets/img/sombra3.png';

// Component
const History = (props) => {
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
    
    ///////////////////////////////////////////////////////////////////////////////////////////Hacerlo en onload
    ///START
    
        //logic to execute when onload the new screen  
    const querystring = window.location.search
    const params = new URLSearchParams(querystring);
    
    
    
    
     var cotizacion_id = params.get('idcotizacion');
     var ejecutivo_p = params.get('ejecutivo');
     var negocio_p = params.get('namenegocio');
     var contacto_p = params.get('contactoname');
    var mes_p = params.get('montomes');
    var startf_p = params.get('startf');
    var endf_p = params.get('endf');
    var parlistamcc = params.get('listamcc');
    
    
    function textoInputFieldEjecutivo()  {    console.log('carlos z textoInputFieldEjecutivo paso 1:'+ejecutivo_p );
//                                          '<label className="forma">Ejecutivo</label> <input type="text" name="ejecutivo" id="ejecutivo" value ="'+ejecutivo_p+'"/>'
                                          
                                          if (ejecutivo_p == null){
                                                // your code here.
                                              
                                                  return {__html: '<label className="forma">Ejecutivo</label> <input type="text" name="ejecutivo" id="ejecutivo" value =""/>'};
                                         
                                            }else{

                                                   return {__html: '<label className="forma">Ejecutivo</label> <input type="text" name="ejecutivo" id="ejecutivo" value ="'+ejecutivo_p+'"/>'};
                                                                                         
                                            }
                                         };
    
    function textoInputFieldId()  {    console.log('carlos z textoInputFieldId paso 1:'+cotizacion_id );
//                                          '                            <label className="forma">Id Cotización</label>     <input type="text" name="idcotizacion" id="idcotizacion"  />'
                                          if (cotizacion_id == null){
                                                // your code here.
                                              
                                                  return {__html: '<label className="forma">Id Cotización</label>     <input type="text" name="idcotizacion" id="idcotizacion" value =""/>'};
                                         
                                            }else{

                                                  return {__html: '<label className="forma">Id Cotización</label>     <input type="text" name="idcotizacion" id="idcotizacion" value ="'+cotizacion_id+'"/>'};
                                                                                         
                                            }

                                     };
    
        function textoInputFieldNegocio()  {    console.log('carlos z textoInputFieldNegocio paso 1:'+negocio_p );
//                                          '                            <label className="forma">Negocio</label>     <input type="text" name="namenegocio" id="namenegocio"  />'
                                          if (negocio_p == null){
                                                // your code here.
                                              
                                                    return {__html: '<label className="forma">Negocio</label>     <input type="text" name="namenegocio" id="namenegocio" value =""/>'};
                                             
                                            }else{

                                                          return {__html: '<label className="forma">Negocio</label>     <input type="text" name="namenegocio" id="namenegocio" value ="'+negocio_p+'"/>'};                                                                                         
                                            }



                                     };
                                
            function textoInputFieldContacto()  {    console.log('carlos z textoInputFieldContacto paso 1:'+contacto_p );
                                          if (contacto_p == null){
                                                // your code here.
                                              
                                                    return {__html: '<label className="forma">Contacto</label>     <input type="text" name="contactoname" id="contactoname" value =""/>'};
                                             
                                            }else{

                                                          return {__html: '<label className="forma">Contacto</label>     <input type="text" name="contactoname" id="contactoname" value ="'+contacto_p+'"/>'};                                                                                         
                                            }



                                     };
    
            function textoInputFieldMes()  {    console.log('carlos z textoInputFieldMes paso 1:'+mes_p );
                                          if (mes_p == null){
                                                // your code here.
                                              
                                                    return {__html: '<label className="forma">Monto por Mes</label>     <input type="text" name="montomes" id="montomes" value =""/>'};
                                             
                                            }else{

                                                          return {__html: '<label className="forma">Monto por Mes</label>     <input type="text" name="montomes" id="montomes" value ="'+mes_p+'"/>'};                                                                                         
                                            }



                                     };

    
    if((cotizacion_id!== null) || (ejecutivo_p!== null)
      || (negocio_p!== null)
      || (contacto_p!== null)
      || (mes_p!== null)
       || (parlistamcc!== null)
      ){
             console.log('carlos z onload paso 1' );
                const requestInfo = {
                    method: 'GET',
              };   
        
           var valeId="NADA";
          if((cotizacion_id== null) || cotizacion_id===""){
              
          } else{              
              valeId =cotizacion_id;
          }
      
           var valeEjecutivo="NADA";
          if( (ejecutivo_p== null) || ejecutivo_p ==="" ){
              
          } else{              
              valeEjecutivo =ejecutivo_p;
          }
           var valeNamenegocio="NADA";
          if((negocio_p== null) || negocio_p ===""){
              
          } else{              
              valeNamenegocio =negocio_p;
          }      
          var valeContacto="NADA";
          if((contacto_p == null) || contacto_p ===""){
              
          } else{              
              valeContacto =contacto_p;
          }
          var valeMontomes="NADA";
          if((mes_p== null) || mes_p ===""){
              
          } else{
              valeMontomes =mes_p;
          }
      
          var valeListammc="NADA";
          if(parlistamcc === "" || parlistamcc ==="Seleciona tu opción"){
              
          } else{
              valeListammc =parlistamcc;
          }
           console.log('carlos z paso 2.5:' +laUrlmandar);
          var laUrlmandar='https://sandbox.banwire.com/quote-back/banwireapi/cotizacionesbynumero2/'+valeId+'/'+valeNamenegocio+'/'+valeEjecutivo+'/'+valeContacto+'/'+valeMontomes +'/NADA/NADA/'+valeListammc;
          console.log('carlos z paso 2.6:' +laUrlmandar);

                fetch(laUrlmandar, requestInfo)
                .then(response =>{
                    console.log('carlos z paso 3' );
                    
                    console.log(response);
                    if(response.ok){
                        console.log('carlos z paso 4' );
                        //this.messajin = 'Si encontro algo';
                        return response.json()
                    }
                    console.log('carlos z paso 5' );
                    throw new Error("Accessos no válidos.");
//                });
                })
                .then(data =>{
                         console.log('carlos z paso 6' );
                        //this.ejecutivo ='carlosdata';
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
                    var algo =0;
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
                          res= res.replace("20 / 03 / 2020", "<td>"+data[i].creadoen+"</td>");
                          res= res.replace("Ejecutivo 1", "<td>"+data[i].ejecutivo);
                          res= res.replace("Negocio 1","<td>"+data[i].datoscliente.razonsocial+"</td>");
                          res= res.replace("Contacto 1","<td>"+data[i].datoscliente.contacto.nombrecon+"</td>");
                          res= res.replace("100000","<td>"+data[i].datoscliente.montoprocesadopormes+"</td><TD>");
                          res= res.replace("quotedetails","quotedetails?cotizacion="+ data[i].numero+" ");
                          res= res.replace("traepdf","traepdf/"+ data[i].numero+" ");
                          
                          
                          
                          console.log('carlos z  function updateTable paso 4.3:' +res); 
                           console.log('carlos z  function updateTable paso 4.4' );
                          
                           // tablitaContainer.appendChild(div);
                          tablitaContainer.insertAdjacentHTML("beforeend", res);
                          algo =1;

                      }//end for for each data
                       if (algo ==1){
                          console.log('carlos z  function updateTable paso 4.4: .L.antes remove' ); 
                          document.getElementById("rengloncito").innerHTML= 
                          
                                                    '  <td>          </td>'+
                                                    '<td>                            </td>'+
                                                    '<td>                            </td>'+
                                                    '<td>                            </td>'+
                                                    '<td>                            </td>'+
                                                    '<td>                            </td>'+
                                                    '<td>                            </td> '+                   
                                                    '<td>                            </td>';
                          console.log('carlos z  function updateTable paso 4.5 remove rengloncito' ); 
                           
                        }//hubo algo
                        console.log('carlos z paso 7' );
                })      
                .catch(e => {
                    console.log('carlos z paso 8 err' );
                    //this.setState({ message: e.message });   
                });           

        
    }
    


    
    //END
    /////////////////////////////////////////////////////////////////////////////////////////////Hacerlo en onload
        
    
    
      const buscarCotizacion = () => {

        
        
        console.log('carlos z paso 1' );
                const requestInfo = {
                    method: 'GET',
              };


        
         console.log('carlos z paso 2+' );
      
          const tcampoejecutivo = document.getElementById("ejecutivo");
          const tcamponamenegocio = document.getElementById("namenegocio");
      
          const tcampoidcotizacion = document.getElementById("idcotizacion");
          const tcampocontactoname = document.getElementById("contactoname");
          const tcampomontomes = document.getElementById("montomes");
      
          const tcampostartf = document.getElementById("startf");
          const tcampoendf = document.getElementById("endf");
          
          const tcampolistamcc = document.getElementById("listamcc");
          
          

          console.log('carlos z paso 2.1:' +tcampoejecutivo.value);
          console.log('carlos z paso 2.2:' +tcampoidcotizacion.value);
          console.log('carlos z paso 2.3:' +tcampocontactoname.value);
          console.log('carlos z paso 2.4:' +tcampomontomes.value);
          console.log('carlos z paso 2.5:' +tcamponamenegocio.value); 
      console.log('carlos z paso 2.6:' +tcampostartf.value);
      console.log('carlos z paso 2.7:' +tcampoendf.value);
          console.log('carlos z paso 2.8:' +tcampolistamcc.value);
      
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
          
          var valeListammc="NADA";
          if(tcampolistamcc.value === ""){
              
          } else{
              valeListammc =tcampolistamcc.value;
          }
          
      
           console.log('carlos z paso 2.5:' +laUrlmandar);
          laUrlmandar='https://sandbox.banwire.com/quote-back/banwireapi/cotizacionesbynumero2/'+valeId+'/'+valeNamenegocio+'/'+valeEjecutivo+'/'+valeContacto+'/'+valeMontomes +'/'+tcampostartf.value+'/'+tcampoendf.value+'/'+valeListammc;
          console.log('carlos z paso 2.6:' +laUrlmandar);
//                fetch('http://peaceful-retreat-91246.herokuapp.com/banwireapi/cotizacionesbynumero2/20200800007/NADA/NADA', requestInfo)
//                fetch('https://sandbox.banwire.com/quote-back/banwireapi/cotizacionesbynumero2/20200800007/NADA/NADA', requestInfo)
                fetch(laUrlmandar, requestInfo)
                .then(response =>{
                    console.log('carlos z paso 3' );
                    
                    console.log(response);
                    if(response.ok){
                        console.log('carlos z paso 4' );
                        //this.messajin = 'Si encontro algo';
                        return response.json()
                    }
                    console.log('carlos z paso 5' );
                    throw new Error("Accessos no válidos.");
//                });
                })
                .then(data =>{
                         console.log('carlos z paso 6' );
                        //this.ejecutivo ='carlosdata';
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
                          res= res.replace("quotedetails","quotedetails?cotizacion="+ data[i].numero+" ");
                           res= res.replace("traepdf","traepdf/"+ data[i].numero+" ");
                          
                          
                          console.log('carlos z  function updateTable paso 4.3:' +res); 
                           console.log('carlos z  function updateTable paso 4.4' );
                          
                           // tablitaContainer.appendChild(div);
                          tablitaContainer.insertAdjacentHTML("beforeend", res);
                          
                          console.log('carlos z  function updateTable paso 4.4: ..antes remove' ); 
                          document.getElementById("rengloncito").remove();
                          console.log('carlos z  function updateTable paso 4.5 remove rengloncito' ); 
                      }//end for for each data
                    
                        console.log('carlos z paso 7' );
                })      
                .catch(e => {
                    console.log('carlos z paso 8 err' );
                    //this.setState({ message: e.message });   
                });                    
        
        //this.messajin = 'buscarCotizacion paso 44';
        
        };
  return (
    <Fragment>
    <div className="App">
      <header className = "App-header">
      <div className="App">

        <Header logOut={logOut} getUserInfo={getUserInfo}></Header>
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
                <form className="forma inputs_filter mar_t_3" action='quotes'>

                        <div className="d16 left_" dangerouslySetInnerHTML={textoInputFieldId()}>

                        </div>
                        <div className="d16 left_"  dangerouslySetInnerHTML={textoInputFieldEjecutivo()}> 
                            
                        </div>
                        
                        <div className="d16 left_" dangerouslySetInnerHTML={textoInputFieldNegocio()}>

         
                        </div>
     
                        <div className="d16 left_">
                            <label className="forma">Giro MCC</label>
                            <select className="select"   name="listamcc" id="listamcc">
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
                        <div className="d16 left_"  dangerouslySetInnerHTML={textoInputFieldContacto()}> 
                        </div>
                        <div className="d16 left_"  dangerouslySetInnerHTML={textoInputFieldMes()}> 
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
                                <input type="date" id="startf" name="startf" value="2020-09-09" min="2018-01-01"  />
                            </div>
                            <div className="d16 left_">
                                <label className="forma">Fecha final</label>
                                <input type="date" id="endf"  name="endf" value="2020-09-09" min="2018-01-01"  />
                            </div>
                            <div className="d50 left_">
                                <div className="d97 right_">
                                  
                                    <input type="submit" className="right_ mar_t_3 bot_value" value="FILTRAR " />
                                    
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
        <div className="contenido_tabs forma">
        
            
            <div className="forma">
                <div className="d90 center">
                <table className="forma tab_repo">
                    <tbody className="forma doce" id="tablitaresultados">
                        <tr className="forma" id="renglonencabezado">
                            <th>
                                ID
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
                        <tr className="forma" id="rengloncito">
                            <td>
                                D22SG-JG
                            </td>
                            <td>
                                20 / 03 / 2020
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
                                <a href="javascript:window.open('https://sandbox.banwire.com/quote-back/banwireapi/traepdf');" className="left_ d33 icons_a">
                                    <img src={download} /> 
                                </a>
                                <a href="" className="left_ d33 icons_a">
                                    <img src={trash} /> 
                                </a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>    
            </div>
        <div className="bord_tab_top forma">&nbsp;</div>
        <img src={sombra_tab} className="center forma" />
        
        
        </div>
        
   
    

      </div>
      <Footer></Footer>
      </header>
    </div>
    </Fragment>
  );
}

// Exporting component
export default History;
