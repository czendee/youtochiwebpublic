// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";

import alert from '../assets/img/adv2.svg';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import download from '../assets/img/download.svg';

// Component
const Quotecreated = (props) => {
   
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



        const querystring = window.location.search
        const params = new URLSearchParams(querystring);


        var idcotizacion = params.get('idcotizacion');

   
         const requestInfo = {
                    method: 'GET',
        };  

   
               console.log('carlos z paso 1.0' );
       //fetch('http://peaceful-retreat-91246.herokuapp.com/banwireapi/cotizaciones', requestInfo)
   
//       window.open('https://sandbox.banwire.com/quote-back/banwireapi/traepdf/'+idcotizacion);
        console.log('carlos z paso 1.1' );
/*       fetch('https://sandbox.banwire.com/quote-back/banwireapi/traepdf', requestInfo)
       .then(response =>{
            console.log('carlos z quotecreated paso 1.1' );
            console.log(response);
              if(response.ok){
                 console.log('carlos z quotecreated paso 1.2' );
//                 return response.json();
//                 return response.blob();                 
                 return response.data;                 
              }else{
                 console.log('carlos zquotecreated  paso 1.3' );
              }

        })
        .then(data =>{
                         console.log('carlos z quotecreated paso   6' );
                        //this.ejecutivo ='carlosdata';
//                        tcampoejecutivo.value ='carlosdata33';
                      var file = new Blob([data.blob()], {type: 'application/pdf'});
                       console.log('carlos z quotecreated paso   7' );
                      var fileURL = window.URL.createObjectURL(file);
                       console.log('carlos z quotecreated paso   7.1' );
                      window.open(fileURL);          
                        console.log(data);
         })  
        .catch(e => {
            console.log('carlos z quotecreated paso 8 err' );   
        }); 
*/
   
   
    const ajustaurlpdfCotizacion = () => {
            console.log('carlos z ajustaurlpdfCotizacion paso 1.0' );
            var renglonurl = document.getElementById("divurl");
            console.log('carlos z ajustaurlpdfCotizacion paso 2.0' );
            var contenidoNuevo =renglonurl.innerHTML;
            console.log('carlos z ajustaurlpdfCotizacion paso 3.0' );
            const querystring02 = window.location.search;
            console.log('carlos z ajustaurlpdfCotizacion paso 4.0' );       
           const params02 = new URLSearchParams(querystring02);
            console.log('carlos z ajustaurlpdfCotizacion paso 5.0' );
            var idcotizacion02 = params02.get('idcotizacion');
            contenidoNuevo= contenidoNuevo.replace("traepdf","traepdf/"+ idcotizacion02+" ");
            console.log('carlos z ajustaurlpdfCotizacion paso 6.0' );
            document.createElement("divurl").innerHTML.innerHTML = contenidoNuevo;
            console.log('carlos z ajustaurlpdfCotizacion paso 7.0' );       
    }
   
    
    function muestraurlpdf() { 
       
                          const querystring05 = window.location.search
                          const params04 = new URLSearchParams(querystring05);


                          var idcotizacion02 = params04.get('idcotizacion');

                        var valurl='';
       
                              valurl= valurl+' <a href="javascript:window.open(\'https://sandbox.banwire.com/quote-back/banwireapi/traepdf/'+idcotizacion02+'\');"  className="left_ d33 icons_a download"> ';                             
                              valurl= valurl+'  Ver PDF     ';
                             valurl= valurl+' </a>';
                            return {__html: valurl};
                             
                             };


   
  return (
    <Fragment>
    <div className="App">
      <header className = "App-header">
      <div className="App">

        <Header logOut={logOut} getUserInfo={getUserInfo}></Header>
        
        
    <div>
   
  </div>
    


  <sections className="parallax">   
        <form className="forma validar">
            <div className="contenedor3 center pad_lr_30" id="divurl">  
                <h2 className="forma">
                    La Cotizacion ha sido creada <span id='texto_nivel'></span> 
                            <div className="d80 center" dangerouslySetInnerHTML={muestraurlpdf()}>
                                
                            </div>

                </h2>
                <div className="forma">
                    
                   
                    <div className="forma">
                        
                        

                        
                        <div className="forma mar_t_10 mar_b_10">

                            
                        </div>
                    </div>
                </div>

            </div>    
        </form>
    </sections>
     
        
    </div>
    <Footer></Footer>
      </header>
    </div>
    </Fragment>
  );
}
// Exporting component
export default Quotecreated;
