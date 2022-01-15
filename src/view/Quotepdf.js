// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";

import alert from '../assets/img/adv2.svg';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// Component
const Quotepdf = (props) => {
   
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

        idcotizacion=340001;
   
         const requestInfo = {
                    method: 'GET',
        };  

               console.log('carlos z paso 1.0' );
       //fetch('http://peaceful-retreat-91246.herokuapp.com/banwireapi/cotizaciones', requestInfo)
       fetch('https://sandbox.banwire.com/quote-back/banwireapi/traepdf/'+idcotizacion, requestInfo)
       .then(response =>{
            console.log('carlos z quotecreated paso 1.1' );
            console.log(response);
              if(response.ok){
                 console.log('carlos z quotecreated paso 1.2' );
                 return response.json();

              }else{
                 console.log('carlos zquotecreated  paso 1.3' );
              }

        })
        .then(data =>{
                         console.log('carlos z quotecreated paso   6' );
                        //this.ejecutivo ='carlosdata';
//                        tcampoejecutivo.value ='carlosdata33';
                        console.log(data);
         })  
        .catch(e => {
            console.log('carlos z quotecreated paso 8 err' );   
        }); 



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
            <div className="contenedor3 center pad_lr_30">  
                <h2 className="forma">
                    Obtener el PDF de la Cotizacion <span id='texto_nivel'></span> 

             
                </h2>
                <div className="forma">
                    
                   
                    <div className="forma">
                        
                        

                        
                        <div className="forma mar_t_10 mar_b_10">
                            <input type="button" className="cotizar" id='propuesta' value="Obten PDF"/>
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
export default Quotepdf;
