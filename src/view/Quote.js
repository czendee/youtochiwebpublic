// Importing Libraries
// Importing Libraries
//import React, { Fragment } from "react";
import React, { Fragment, useState } from "react";

import alert from '../assets/img/adv2.svg';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


const { useRef } = React;

// Component
const Quote = (props) => {
    
   
  // var data = props.getUserInfo()
  //  return `${data.user.name} - ${data.role.name}`
    
    
      const formRef=useRef();
    var datosusuario ={};
    var  nombreusuario ="NADA";
    var  apellidousuario ="NADA";
    var  emailusuario ="NADA";
    var idusuario ="NADA";
   
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
         // datosusuario=jsonPayload;
          datosusuario= JSON.parse(jsonPayload);
          
          console.log(' datos usuario nombre 2: '+datosusuario.user.name);

          nombreusuario =datosusuario.user.name;
          apellidousuario =datosusuario.user.last_name;
          emailusuario =datosusuario.user.email;
          idusuario =datosusuario.user.id_user;
          console.log(' datos usuario nombre 2: '+nombreusuario);
          console.log(' datos usuario last nombre 2: '+apellidousuario);
          console.log(' datos usuario email  2: '+emailusuario);
          console.log(' datos usuario id 2: '+idusuario);
        return JSON.parse(jsonPayload);
      };



 //  const nombreusuario =datosusuario.name;
  // var data = props.getUserInfo()
  //  return `${data.user.name} - ${data.role.name}`
    
  
const querystring = window.location.search
const params = new URLSearchParams(querystring);


var nombre_clie = params.get('name_clie');
var girorfc = params.get('giro_rfc');
var rfc = params.get('rfc');
var Mcc = params.get('mcc');
var per_fiscal = params.get('per_fiscal');
var name_comer = params.get('name_comercial');
var web = params.get('p_web');
var nombre_contact = params.get('nom_ap');
var email = params.get('email');
var puesto = params.get('puesto');
var tel = params.get('tel');
var n_trans = params.get('numero_de_trans');
var n_ticket = params.get('ticket');


var meses1 = params.get('meses1');
var meses2 = params.get('meses2');
var meses3 = params.get('meses3');
var meses4 = params.get('meses4');

var experiencia = params.get('experiencia');


var medio_de_pago1 = params.get('medio_de_pago1');
var medio_de_pago2 = params.get('medio_de_pago2');
var medio_de_pago3 = params.get('medio_de_pago3');
var medio_de_pago4 = params.get('medio_de_pago4');
var medio_de_pago5 = params.get('medio_de_pago5');


var naturaleza_1 = params.get('naturaleza1');
var naturaleza_2 = params.get('naturaleza2');

var operativa_1 = params.get('operativa1');
var operativa_2 = params.get('operativa2');
var operativa_3 = params.get('operativa3');

var modelo = params.get('modeloa');

var adquisicion1 = params.get('adquisicion1');
var adquisicion2 = params.get('adquisicion2');
var adquisicion3 = params.get('adquisicion3');
var adquisicion4 = params.get('adquisicion4');
var adquisicion5 = params.get('adquisicion5');
var adquisicion6 = params.get('adquisicion6');
var adquisicion7 = params.get('adquisicion7');
var adquisicion8 = params.get('adquisicion8');
var adquisicion9 = params.get('adquisicion9');





var valor=0, puntaje=0, interc=0;

if(Mcc ==="Agencias de Viajes"){ valor=5; puntaje=1; }
if(Mcc ==="Aseguradoras"){ valor=2; puntaje=0.4; interc=1.54; }
if(Mcc ==="Beneficencia"){ valor=5; puntaje=1; interc=0.00; }
if(Mcc ==="Comida Rapida"){ valor=3; puntaje=0.6; interc=1.17; }
if(Mcc ==="Colegios y Universidades"){ valor=2; puntaje=0.4; interc=1.12; }
if(Mcc ==="Entretenimiento"){ valor=3; puntaje=0.6; interc=1.17; }
if(Mcc ==="Estacionamientos"){ valor=2; puntaje=0.4; interc=1.03; }
if(Mcc ==="Farmacias"){ valor=5; puntaje=1; }
if(Mcc ==="Gasolineras"){ valor=5; puntaje=1; }
if(Mcc ==="Gobierno"){ valor=3; puntaje=0.6 ; interc=1.03; }
if(Mcc ==="Hospitales"){ valor=3; puntaje=0.6; interc=1.53; }
if(Mcc ==="Hoteles"){ valor=4; puntaje=0.8; }
if(Mcc ==="Otros"){ valor=3.5 ; puntaje=0.7; interc=1.53; }
if(Mcc ==="Peaje"){ valor=2; puntaje=0.4 ; interc=1.17; }
if(Mcc ==="Restaurantes"){ valor=3; puntaje=0.6 ; interc=1.76; }
if(Mcc ==="Renta de Autos"){ valor=5; puntaje=1; }
if(Mcc ==="Supermercados"){ valor=5; puntaje=1 ; }
if(Mcc ==="Telecomunicaciones"){ valor=2; puntaje=0.4 ; interc=1.45; }
if(Mcc ==="Transporte Aereo"){ valor=3; puntaje=0.6; interc=1.51; }
if(Mcc ==="Transporte Terrestre de Pasajeros"){ valor=3; puntaje=0.6 ; interc=1.17; }
if(Mcc ==="Ventas al detalle (Retail)"){ valor=5; puntaje=1; }


var pcash = (n_trans*n_ticket);





//operacion puntajes


var puntajeconvinacionterminal=0;

var puntajeconvinacionterminaltodos=0;
var puntajeconvinacionSecurewindow=0;
var puntajeconvinacionPagoPro=0;
var puntajeconvinacionPagoPro2_1=0;
var puntajeconvinacionPayCash=0;
var puntajeconvinacionOXXO=0;
var puntajeconvinacionSPEI=0;
var puntajeconvinacionTPV=0;



if((medio_de_pago1!== null) && (medio_de_pago2!== null) && (medio_de_pago3!== null) && (medio_de_pago4!== null) && (medio_de_pago5!== null) 
    && (operativa_1!== null) && (operativa_2!== null) && (operativa_3!== null) && (adquisicion1!== null) && (adquisicion2!== null) && (adquisicion3!== null) && (adquisicion4!== null) && (adquisicion5!== null) && (adquisicion6!== null) && (adquisicion7!== null) && (adquisicion8!== null) && (adquisicion9!== null)  ){
   puntajeconvinacionterminaltodos=(0.75);
}

if( ((medio_de_pago1!== null) || (medio_de_pago2!== null) || (medio_de_pago3!== null) || (medio_de_pago4!== null) || (medio_de_pago5!== null)) && ((operativa_1!== null) || (operativa_2!== null)) && ((adquisicion1!== null) || (adquisicion4!== null) || (adquisicion5!== null)) ){
   puntajeconvinacionSecurewindow = (0.3);
}
if(((medio_de_pago1!== null) || (medio_de_pago2!== null))  && ((operativa_1!== null) || (operativa_3!== null)) && ((adquisicion3!== null) || (adquisicion2!== null) || (adquisicion6!== null) || (adquisicion7!== null)  || (adquisicion9!== null)) ){
   puntajeconvinacionPagoPro=(0.75);
}
if(((medio_de_pago1!== null) || (medio_de_pago2!== null))  && (operativa_1!== null) && ((adquisicion1!== null) || (adquisicion2!== null))){
   puntajeconvinacionPagoPro2_1 = (0.45);
} 
if((medio_de_pago4!== null) && (operativa_1!== null) && (adquisicion2!== null) ){
   puntajeconvinacionPayCash=(0.15);
}
if((medio_de_pago3!== null) && (operativa_1!== null) && (adquisicion2!== null) ){
   puntajeconvinacionOXXO=(0.15);
} 
if((medio_de_pago5!== null) && (operativa_1!== null) && (adquisicion2!== null) ){
   puntajeconvinacionSPEI=(0.15);
}
if( ((medio_de_pago1!== null) || (medio_de_pago2!== null)) && (operativa_1!== null) && (adquisicion8!== null) ){
   puntajeconvinacionTPV=(0.75);
}

console.log(' puntajeconvinacionterminaltodos: '+puntajeconvinacionterminaltodos+' puntajeconvinacionSecurewindow: '+puntajeconvinacionSecurewindow+' puntajeconvinacionPagoPro: '+puntajeconvinacionPagoPro+' puntajeconvinacionPagoPro2_1: '+puntajeconvinacionPagoPro2_1+' puntajeconvinacionPayCash: '+puntajeconvinacionPayCash+' puntajeconvinacionOXXO: '+puntajeconvinacionOXXO+' puntajeconvinacionSPEI; '+puntajeconvinacionSPEI+' puntajeconvinacionTPV: '+puntajeconvinacionTPV )

puntajeconvinacionterminal = Math.max(puntajeconvinacionterminaltodos, puntajeconvinacionSecurewindow, puntajeconvinacionPagoPro, puntajeconvinacionPagoPro2_1, puntajeconvinacionPayCash, puntajeconvinacionOXXO, puntajeconvinacionSPEI, puntajeconvinacionTPV); 


var puntajemediopago=0;
/*

if(medio_de_pago1!== null ){
   puntajemediopago=puntajemediopago+(0.3);
} 
if(medio_de_pago2!== null ){
     puntajemediopago=puntajemediopago+(0.3);
} 
if(medio_de_pago3!== null ){
     puntajemediopago=puntajemediopago+(0.2);
} 
if(medio_de_pago4!== null ){
   puntajemediopago=puntajemediopago+(0.2);
} 
if(medio_de_pago5!== null ){
   puntajemediopago=puntajemediopago+(0.1);
} 

*/

var puntajeadquisicion=0;
var puntajeadquisicion1=0;
var puntajeadquisicion2=0;
var puntajeadquisicion3=0;
var puntajeadquisicion4=0;
var puntajeadquisicion5=0;
var puntajeadquisicion6=0;
var puntajeadquisicion7=0;
var puntajeadquisicion8=0;
var puntajeadquisicion9=0;

if(adquisicion1!== null){
    puntajeadquisicion1=0.2;
}
if(adquisicion2!== null){
    puntajeadquisicion2=0.3;
}
if(adquisicion3!== null){
    puntajeadquisicion3=0.2;
}
if(adquisicion4!== null){
    puntajeadquisicion4=0.4;
}
if(adquisicion5!== null){
    puntajeadquisicion5=0.5;
}
if(adquisicion6!== null){
    puntajeadquisicion6=0.4;
}
if(adquisicion7!== null){
    puntajeadquisicion7=0.5;
}
if(adquisicion8!== null){
    puntajeadquisicion8=0.5;
}
if(adquisicion9!== null){
    puntajeadquisicion9=0.1;
}

puntajeadquisicion = Math.max(puntajeadquisicion1, puntajeadquisicion2, puntajeadquisicion3, puntajeadquisicion4, puntajeadquisicion5, puntajeadquisicion6, puntajeadquisicion7, puntajeadquisicion8, puntajeadquisicion9); 


var puntajeoperativa=0;
if((operativa_1!== null) && (operativa_2!== null) && (operativa_3!== null)){
    puntajeoperativa=puntajeoperativa+(0.4);
}else if((operativa_1!== null) && (operativa_2!== null)){
    puntajeoperativa=puntajeoperativa+(0.4);
}else if((operativa_1!== null) && (operativa_3!== null)){
    puntajeoperativa=puntajeoperativa+(0.4); 
}else if( (operativa_2!== null) && (operativa_3!== null)){
    puntajeoperativa=puntajeoperativa+(0.4);       
}else if(operativa_1!== null ){
   puntajeoperativa=puntajeoperativa+(0.1);
}else if(operativa_2!== null ){
     puntajeoperativa=puntajeoperativa+(0.3);
}else if(operativa_3!== null ){
     puntajeoperativa=puntajeoperativa+(0.3);
}


var puntajenaturaleza=0;
if((naturaleza_1!== null ) && (naturaleza_2!== null )){
    puntajenaturaleza=0.4;
}else if(naturaleza_1!== null ){
    puntajenaturaleza=0.2;
}else if(naturaleza_2!== null ){
    puntajenaturaleza=0.4;
}


var puntajeper_fiscal=0;
if(per_fiscal== "Actividad Física con Actividad Empresarial" ){
    puntajeper_fiscal=0.25;
 }
 if(per_fiscal== "Persona Moral" ){
    puntajeper_fiscal=0.15;
 }  
 if(per_fiscal== "ONG Autorizada" ){
    puntajeper_fiscal=0.1;
 }     


var puntajemodelo=0;
if(modelo== "Modelo Agregador" ){
    puntajemodelo=0.5;
 } 
 if(modelo== "Modelo Integrador" ){
    puntajemodelo=0.1;
 } 



var puntajetiket=0;
if((n_ticket>0) && (n_ticket<=1000)){
   puntajetiket=0.24;
}else if((n_ticket>1000) && (n_ticket<=10000)){
     puntajetiket=0.12;
}else if((n_ticket>10000) && (n_ticket<=50000)){
     puntajetiket=0.12;
}else if((n_ticket>50000) && (n_ticket<=100000)){
   puntajetiket=0.18;
}else if(n_ticket>100000){
   puntajetiket=0.24;
} 




var puntajetrans_mensual=0;
if((n_trans>0) && (n_trans<=1000)){
   puntajetrans_mensual=0.07;
}else if((n_trans>1000) && (n_trans<=5000)){
     puntajetrans_mensual=0.14;
}else if((n_trans>5000) && (n_trans<=10000)){
     puntajetrans_mensual=0.21;
}else if((n_trans>10000) && (n_trans<=50000)){
   puntajetrans_mensual=0.21;
}else if(n_trans>50000){
   puntajetrans_mensual=0.28;
} 




var puntaprocesa_mensual=0;
if((pcash>0) && (pcash<=50000)){
   puntaprocesa_mensual=0.07;
}else if((pcash>50000) && (pcash<=100000)){
     puntaprocesa_mensual=0.07;
}else if((pcash>100000) && (pcash<=250000)){
     puntaprocesa_mensual=0.14;
}else if((pcash>250000) && (pcash<=500000)){
   puntaprocesa_mensual=0.14;
}else if((pcash>500000) && (pcash<=1000000)){
   puntaprocesa_mensual=0.21;
}else if((pcash>1000000) && (pcash<=5000000)){
   puntaprocesa_mensual=0.28; 
}else if((pcash>5000000) && (pcash<=10000000)){
   puntaprocesa_mensual=0.35; 
}else if(pcash>10000000){
   puntaprocesa_mensual=0.35;
}         




var total_puntajes =(puntaje+(puntajeconvinacionterminal)+(puntajeadquisicion)+(puntajeoperativa)+(puntajenaturaleza)+(puntajeper_fiscal)+(puntajemodelo)+(puntajetiket)+(puntajetrans_mensual)+(puntaprocesa_mensual));




console.log("puntaje mcc:"+puntaje);
console.log("puntajeconvinacionterminal :"+puntajeconvinacionterminal);
console.log("puntajeadquisicion :"+puntajeadquisicion);
console.log("puntajeoperativa :"+puntajeoperativa);
console.log("puntajenaturaleza :"+puntajenaturaleza);
console.log("puntajeper_fiscal :"+puntajeper_fiscal);
console.log("puntajemodelo :"+puntajemodelo);
console.log("puntajetiket :"+puntajetiket);
console.log("puntajetrans_mensual :"+puntajetrans_mensual);
console.log("puntaprocesa_mensual :"+puntaprocesa_mensual);

console.log("Total de puntajes"+total_puntajes);

var textoresult='';
var tipo_nivel='';

var valcheckbox='';
var corefraude='', tresdsecure='NO';

valcheckbox= '<input class="input2 meses" type="checkbox" id="test26" name="meses1" value="3DSecure"/>';
valcheckbox+= '<label for="test26">¿3DSecure?</label>';

  if(total_puntajes<=1){
  textoresult='** Nivel básico de seguridad. Opcional Sift Science: Score para Fraude 80. Actualizar expediente cada año';
  tipo_nivel ='MUY BAJO ';
  corefraude = '80';
  }
  if(total_puntajes>1 && total_puntajes<=2 ){
  textoresult='** Nivel básico de seguridad. Opcional Sift Science: Score para Fraude 75. Actualizar expediente seis meses';
  tipo_nivel ='BAJO ';
  corefraude = '75';
  }
  if(total_puntajes>2 && total_puntajes<=3 ){
  textoresult='** Nivel medio de seguridad. Opcional Sift Science: Score para Fraude 70 Monitorear mensualmente. Actualizar su expediente cada 6 meses (kyc). ';
  tipo_nivel ='MEDIO ';
  corefraude = '70';
  }
  if(total_puntajes>3 && total_puntajes<=4 ){
  textoresult='** Nivel alto de seguridad. Sift Science: Score para Fraude 70 + Uso de 3D Secure / Retención de 2 semanas de procesamiento, Fianza un mes de procesamiento sobre lo prospectado o liquidación tardía (una semana). Actualizar su expediente cada 6 meses, requieren la autorización por escrito del director comercial y de tecnología de pagos';
  tipo_nivel ='ALTO ';
   valcheckbox= '<input class="input2 meses" type="checkbox" id="test26" name="copyNewAddrToBilling" value="3DSecure" checked onclick="javascript: return false;"/>'; 
   valcheckbox+= '<label class="test26" for="test26">¿3DSecure?</label>';
   corefraude = '70';
   tresdsecure='SI';

  }
  if(total_puntajes>4){
  textoresult='** No operan / Operan por autorización de Comité y/o Dirección General';
  tipo_nivel ='MUY ALTO ';
  valcheckbox= '<input class="input2 meses" type="checkbox" id="test26" name="copyNewAddrToBilling" value="3DSecure" checked onclick="javascript: return false;"/>'; 
  valcheckbox+= '<label class="test26" for="test26">¿3DSecure?</label>';
  corefraude = '70';
  tresdsecure='SI';

  }


//validaciones por mcc

  if(Mcc=="Ventas al detalle (Retail)"){
  textoresult='** Nivel alto de seguridad. Sift Science: Score para Fraude 70 + Uso de 3D Secure / Retención de 2 semanas de procesamiento, Fianza un mes de procesamiento sobre lo prospectado o liquidación tardía (una semana). Actualizar su expediente cada 6 meses, requieren la autorización por escrito del director comercial y de tecnología de pagos';
  tipo_nivel ='ALTO ';
   valcheckbox= '<input class="input2 meses" type="checkbox" id="test26" name="copyNewAddrToBilling" value="3DSecure" checked onclick="javascript: return false;"/>'; 
   valcheckbox+= '<label class="test26" for="test26">¿3DSecure?</label>';
   corefraude = '70';
   tresdsecure='SI';
  }
    
  if(Mcc=="Farmacias" || Mcc=="Gasolineras"){
  textoresult='** No se puede trabajar con este giro por regulación';
  tipo_nivel ='ALTO ';
   valcheckbox= '<input class="input2 meses" type="checkbox" id="test26" name="copyNewAddrToBilling" value="3DSecure" checked onclick="javascript: return false;"/>'; 
   valcheckbox+= '<label class="test26" for="test26">¿3DSecure?</label>';
   corefraude = '70';
   tresdsecure='SI';
  }


function createcheckbox() { return {__html: valcheckbox};};


function createNivel() { return {__html: textoresult};};
function textoNivel()  { return {__html: tipo_nivel};};





//validaciones para tazas fijas y variables
var tazatarjeta_var=0, tazaamex_var=0, tazaoxxo_var=0, tazapaycash_var=0, tazaspei_var=0, tazastorepay_var=0;
var tazatarjeta_fija=0, tazaamex_fija=0, tazaoxxo_fija=0, tazapaycash_fija=0, tazaspei_fija=0, tazastorepay_fija=0;

if(experiencia!== null){

    tazatarjeta_var=2.75;
    tazaamex_var=4.25;
    tazaoxxo_var=2.5;
    tazapaycash_var=0;
    tazaspei_var=2.5;
    tazastorepay_var=2.5;


    tazatarjeta_fija=2.50;
    tazaamex_fija=2.50;
    tazaoxxo_fija=2.50;
    tazapaycash_fija="20.00";
    tazaspei_fija=2.50;
    tazastorepay_fija=2.50;


}else{
    tazatarjeta_var=2.9;
    tazaamex_var=2.9;
    tazaoxxo_var=2.9;
    tazapaycash_var=0;
    tazaspei_var=2.9;
    tazastorepay_var=2.9;


    tazatarjeta_fija=2.5;
    tazaamex_fija=2.5;
    tazaoxxo_fija=2.5;
    tazapaycash_fija="20.00";
    tazaspei_fija=2.5;
    tazastorepay_fija=2.5;
}


var content = '';

if(medio_de_pago1!== null ){
     content += '<tr class="forma">';
     content += '<td class="d25 left_"><b>'+medio_de_pago1+'</b></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num porcen" id="dvm_input" placeholder="'+(tazatarjeta_var)+'%" value="'+(tazatarjeta_var)+'"/></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num peso" placeholder= "'+(tazatarjeta_fija)+'"/></td>';
     content += '<td class="d25 left_ nopad"><select class="forma" name="Descuento Visa/MasterCard" id="dvm"><option value="0">0%</option><option value="0.05">5%</option><option value="0.1">10%</option><option value="0.15">15%</option></select></td>';
     content += '</tr>';

}
if(medio_de_pago2!== null ){
     content += '<tr class="forma">';
     content += '<td class="d25 left_"><b>'+medio_de_pago2+'</b></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num porcen" id="damx_input" placeholder="'+(tazaamex_var)+'%" value="'+(tazaamex_var)+'"/></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num peso" placeholder= "'+(tazaamex_fija)+'"/></td>';
     content += '<td class="d25 left_ nopad"><select class="forma" name="Descuento AMEX" id="damx" ><option value="0">0%</option><option value="0.05">5%</option><option value="0.1">10%</option><option value="0.15">15%</option></select></td>';
     content += '</tr>';

}
if(medio_de_pago3!== null ){
     content += '<tr class="forma">';
     content += '<td class="d25 left_"><b>'+medio_de_pago3+'</b></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num porcen" id="dox_input" placeholder="'+(tazaoxxo_var)+'%" value="'+(tazaoxxo_var)+'"/></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num peso" placeholder= "'+(tazaoxxo_fija)+'"/></td>';
     content += '<td class="d25 left_ nopad"><select class="forma" name="Descuento OXXO" id="dox" ><option value="0">0%</option><option value="0.05">5%</option><option value="0.1">10%</option><option value="0.15">15%</option></select></td>';
     content += '</tr>';
     
}
if(medio_de_pago4!== null ){
     content += '<tr class="forma">';
     content += '<td class="d25 left_"><b>'+medio_de_pago4+'</b></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num porcen" id="dpy_input" placeholder="'+(tazapaycash_var)+'%" value="'+(tazapaycash_var)+'"/></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num peso" placeholder= "'+(tazapaycash_fija)+'"/></td>';
     content += '<td class="d25 left_ nopad"><select class="forma" name="Descuento Paycash" id="dpy" ><option value="0">0%</option><option value="0.05">5%</option><option value="0.1">10%</option><option value="0.15">15%</option></select></td>';   
     content += '</tr>';    

}
if(medio_de_pago5!== null ){
     content += '<tr class="forma">';
     content += '<td class="d25 left_"><b>'+medio_de_pago5+'</b></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num porcen" id="dspi_input" placeholder="'+(tazaspei_var)+'%" value="'+(tazaspei_var)+'"/></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num peso" placeholder= "'+(tazaspei_fija)+'"/></td>';
     content += '<td class="d25 left_ nopad"><select class="forma" name="Descuento SPEI" id="dspi" ><option value="0">0%</option><option value="0.05">5%</option><option value="0.1">10%</option><option value="0.15">15%</option></select></td>';
     content += '</tr>';    

}



     content += '<tr class="forma">';
     content += '<td class="d25 left_"><b>Store Pay</b></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num porcen" id="dstp_input" placeholder="'+(tazastorepay_var)+'%" value="'+(tazastorepay_var)+'" /></td>';
     content += '<td class="d25 left_ pad_none"><input type="number" class="inp_num peso" placeholder= "'+(tazastorepay_fija)+'"/></td>';
     content += '<td class="d25 left_ nopad"><select class="forma" name="Descuento Store Pay" id="dstp" ><option value="0">0%</option><option value="0.05">5%</option><option value="0.1">10%</option><option value="0.15">15%</option></select></td>';
     content += '</tr>';



function createMarkup() { return {__html: content}; };

 

//const gettypicodeInfo = () => {
//function to validate the submit, will be based on the fact of the creat cotizaciones en el BACK
   var handleSubmit= (e) => {
       e.preventDefault();
       var $enviar = true;

         console.log('carlos z paso 0' );
         var message = ""
         var arrayadqui = [adquisicion1, adquisicion2, adquisicion3, adquisicion4, adquisicion5, adquisicion6, adquisicion7, adquisicion8, adquisicion9];
         var arrayoperativa = [operativa_1, operativa_2, operativa_3];
         var arraynaturaleza= [naturaleza_1, naturaleza_2];
         var arraymeses= [meses1, meses2, meses3, meses4];

         var tot_adquisicion = '', tot_operativa = '', tot_naturaleza = '', tot_meses = '', i;

         //adqusicion
         for(i = 0; i < arrayadqui.length; i++){
               if(arrayadqui[i]!== null){
                 tot_adquisicion += arrayadqui[i];
                } 
               if(i < (arrayadqui.length -1)){
                 if(arrayadqui[i+1]!== null){
                   tot_adquisicion += ", ";
                 }
               }
         } 
         //operativa
         for(i = 0; i < arrayoperativa.length; i++){
               if(arrayoperativa[i]!== null){
                 tot_operativa += arrayoperativa[i];
                } 
               if(i < (arrayoperativa.length -1)){
                 if(arrayoperativa[i+1]!== null){
                   tot_operativa += ", ";
                 }
               }
         }
         //naturaleza
         for(i = 0; i < arraynaturaleza.length; i++){
               if(arrayoperativa[i]!== null){
                 tot_naturaleza += arraynaturaleza[i];
                } 
               if(i < (arraynaturaleza.length -1)){
                 if(arraynaturaleza[i+1]!== null){
                   tot_naturaleza += ", ";
                 }
               }
         }
         //meses sin intereses
         for(i = 0; i < arraymeses.length; i++){
               if(arraymeses[i]!== null){
                 tot_meses += arraymeses[i];
                } 
               if(i < (arraymeses.length -1)){
                 if(arraymeses[i+1]!== null){
                   tot_meses += ", ";
                 }
               }
         }  

         //var arraymedios= [medio_de_pago1, medio_de_pago2, medio_de_pago3, medio_de_pago4, medio_de_pago5];

         var arraymediodepago1 = '', arraymediodepago2 = '', arraymediodepago3 = '', arraymediodepago4 = '', arraymediodepago5 = '', arraymediodepago6=''; 


      
      
         if(medio_de_pago1!== null ){
          var tazatarjetadescuento = document.getElementById('dvm').value;
                      
         arraymediodepago1 = { mediodepago: medio_de_pago1, comisionvariable: tazatarjeta_var, comisionvariabletipo: "PORCENTAJE", comisionfija: tazatarjeta_fija, comisionfijatipo: "MONTO", estatus: "ACTIVO",descuento: tazatarjetadescuento };
         }
         if(medio_de_pago2!== null ){
           var tazaamexdescuento = document.getElementById('damx').value;
   
         arraymediodepago2 = { mediodepago: medio_de_pago2, comisionvariable: tazaamex_var, comisionvariabletipo: "PORCENTAJE", comisionfija: tazaamex_fija, comisionfijatipo: "MONTO", estatus: "ACTIVO",descuento: tazaamexdescuento };
         }
         if(medio_de_pago3!== null ){
          var tazaoxxodescuento = document.getElementById('dox').value;            
         arraymediodepago3 = { mediodepago: medio_de_pago3, comisionvariable: tazaoxxo_var, comisionvariabletipo: "PORCENTAJE", comisionfija: tazaoxxo_fija, comisionfijatipo: "MONTO", estatus: "ACTIVO",descuento: tazaoxxodescuento };
         }
         if(medio_de_pago4!== null ){
          var tazapydescuento = document.getElementById('dpy').value;
          
         arraymediodepago4 = { mediodepago: medio_de_pago4, comisionvariable: tazapaycash_var, comisionvariabletipo: "PORCENTAJE", comisionfija: tazapaycash_fija, comisionfijatipo: "MONTO", estatus: "ACTIVO",descuento: tazapydescuento };
         }
         if(medio_de_pago5!== null ){
            
          var tazaspeidescuento = document.getElementById('dspi').value;
         arraymediodepago5 = { mediodepago: medio_de_pago5, comisionvariable: tazaspei_var, comisionvariabletipo: "PORCENTAJE", comisionfija: tazaspei_fija, comisionfijatipo: "MONTO", estatus: "ACTIVO",descuento: tazaspeidescuento };
         }
      
          
          var tazastpdescuento = document.getElementById('dstp').value;         
         arraymediodepago6 = { mediodepago: "Store Pay", comisionvariable: tazastorepay_var, comisionvariabletipo: "PORCENTAJE", comisionfija: tazastorepay_fija, comisionfijatipo: "MONTO", estatus: "ACTIVO",descuento: tazastpdescuento };

//           var nombre_jecutivo= "EjeErik" +nombreusuario;
       var nombre_jecutivo=  nombreusuario;
       var apellido_jecutivo= apellidousuario;
       var email_jecutivo= emailusuario;
       var id_jecutivo= idusuario;
       var ejecutivoidentifier = id_jecutivo +nombre_jecutivo;
       
       var stringpcash = pcash +"";

          const data = {
             name: name_comer,
             numero: "2020082000407",
             ejecutivo: ejecutivoidentifier,
             datosejecutivo: {
                ejecutivoemail: email_jecutivo,
                ejecutivoname: nombre_jecutivo,
                ejecutivolast: apellido_jecutivo,
                 ejecutivoid: id_jecutivo
             }, 
             datoscliente: {
                 name1: nombre_clie,
                 razonsocial: nombre_clie,
                 rfc: rfc,
                 nombrecomercial: name_comer,
                 tipofiscal: per_fiscal,
                 girorfc: girorfc,
                 girorfccodigo: girorfc,
                 girommc : Mcc,
                 paginaweb: web,
                 comercionuevo:"SI",
                 reactivacion:"NO",
                 contacto:{
                     nombrecon: nombre_contact,
                     puesto: puesto,
                     telefonocon: tel,
                     emailcon: email
                 },
                 message: "LeescrubreloRegFee2Total15eCupon90",
                 transaccionespormes: n_trans,
                 ticketpromedio: n_ticket,
                 mesessinintereses: tot_meses,
                 montoprocesadopormes: stringpcash,
                 canaladquisicion: tot_adquisicion,
                 tipodecargo: "tipodecargo",
                 operativa: tot_operativa,
                 naturaleza: tot_naturaleza,
                 canalcobro:"banorte"
             },
             datosevaluacion: {
                 evaluador: "rcamacho",
                 message: textoresult,
                 fechahora: "90000",
                 estatus: "pendiente",
                 giromcc: puntaje,
                 naturaleza: puntajenaturaleza,
                 ticketpromedio: puntajetiket,
                 numerotxnmensual: puntajetrans_mensual,
                 procesamientomanual: puntaprocesa_mensual,
                 mediospago: "",
                 operativa: puntajeoperativa,
                 riesgonivel: tipo_nivel,
                 riesgoaction: "FRaude nivel "+corefraude+"...",
                 riesgoscorefraude: corefraude,
                 riesgomonitoreo: "MENSUAL",
                 riesgoactualizarexpediente: "6",
                 riesgoactualizarexpedienteunidad: "meses",
                 sistemassiftscience: "SI",
                 sistemas3dsecure: tresdsecure,
                 sistemasestatus: "ACTIVO"

             },
                 costo:
                 [
                 arraymediodepago1,
                 arraymediodepago2,
                 arraymediodepago3,
                 arraymediodepago4,
                 arraymediodepago5,
                 arraymediodepago6
                 ],

             fechahoracreacion: " ",
             status: "ACTIVA"
         };

           console.log('carlos z paso 0.1' );
                 const requestInfo = {
                     method: 'POST',
         //            mode: 'no-cors',
                     body:JSON.stringify(data),
                     headers: new Headers({
                         'Content-Type':'application/json'

                     }),
                 };

                 console.log('carlos z paso 0.2' );
                 //fetch('http://peaceful-retreat-91246.herokuapp.com/banwireapi/cotizaciones', requestInfo)
                 fetch('https://sandbox.banwire.com/quote-back/banwireapi/cotizaciones', requestInfo)
                 .then(response =>{
                      console.log('carlos z paso 1.1' );
                      console.log(response);
                        if(response.ok){
                           console.log('carlos z paso 1.2' );
                           $enviar = true;

                           return response.json();

                        }else{
                           console.log('carlos z paso 1.3' );
                           $enviar = false;
                        }

                 })  
                  .then(data =>{
                       console.log('carlos z  resultado de la crfeacion   paso 1.333333' );
                       for (var i = 0; i < data.length; i++) { 
//                             console.log('carlos z  resultado de la crfeacion   paso 1.366666' );
//                             document.getElementById('idcotizacion').value =data[i].numero;
                       }    
                     document.getElementById('idcotizacion').value =data.numero;
                     console.log('carlos z  resultado de la crfeacion   paso 1.66544444' );

                       //asignar en esta variable hidden un valor para enviarlo a la otra screen
                       //cotizacionidvalor
                       formRef.current.submit(); //document.forms[0].submit();
                       console.log('carlos z paso 10- respuesta sera submit' );
                  })
                  .catch(e => {
                      console.log('carlos z paso 8 err' );
                      //this.setState({ message: e.message });   
                     $enviar = false;
                     
                  }); 
             console.log('carlos z paso 9- respuesta sera submit o no enviar 66666' );
              console.log(JSON.stringify(data));
/*              if($enviar){
                  console.log('carlos z paso 10- respuesta sera submit' );
                 //asignar en esta variable hidden un valor para enviarlo a la otra screen
                 //cotizacionidvalor
                  formRef.current.submit(); //document.forms[0].submit();
              }else{
                 console.log('carlos z paso 10- respuesta sera no enviar' );
                 return $enviar;
              }
*/
           return $enviar;
           $enviar = false;
                 
      
      
};
   //END  handleSubmit= (e) =>

//document.getElementById("tabla_cotizador").innerHTML = "Paragraph changed!";


//validacion de selects

document.addEventListener('change', (event) => {
  var elemenid = (`${event.target.id}`);
  
   //console.log(elemenid+`${event.target.id} ${event.target.value}`);



  
  if(elemenid=="dvm"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=tazatarjeta_var;//(document.getElementById('dvm_input').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('dvm_input').value = dosDecimales(porcent_total);
   }
   
  if(elemenid=="damx"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=tazaamex_var;//(document.getElementById('damx_input').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('damx_input').value = dosDecimales(porcent_total);
   }


   if(elemenid=="dox"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=tazaoxxo_var;//(document.getElementById('dox_input').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('dox_input').value = dosDecimales(porcent_total);
   }


   if(elemenid=="dpy"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=tazapaycash_var;//(document.getElementById('dpy_input').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('dpy_input').value = dosDecimales(porcent_total);
   }

   if(elemenid=="dspi"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=tazaspei_var//(document.getElementById('dspi_input').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('dspi_input').value = dosDecimales(porcent_total);
   }

   if(elemenid=="dstp"){
    var porciento=(`${event.target.value}`);
    var cantvariacion=tazastorepay_var;//(document.getElementById('dstp_input').value);
    var porcent_total= (cantvariacion*porciento);
    porcent_total = (cantvariacion-porcent_total)
    document.getElementById('dstp_input').value = dosDecimales(porcent_total);
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
    


  <sections className="parallax">   
       
     <form className="forma validar"  ref={formRef} id='cotizacionForm' name='' action='quotecreated' onSubmit={handleSubmit} >
     
    
            <div className="contenedor3 center pad_lr_30">  
                <h2 className="forma">
                    Nivel de riesgo <span id='texto_nivel' dangerouslySetInnerHTML={textoNivel()}></span> 

                    <img className="adv" src={alert} id='img_icono'/>
                </h2>
                <div className="forma">
                    <div className="forma mar_b_3">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos de sistemas</h3>
                        </div>
                        <div className="d70 left_ sistems_sec">
                         &nbsp;
                        </div>
                    </div>
                    <div className="forma">
                       <div className="d50 left_ mov100 line_r_1">
                        <div className="d80 center">
                            <input className="input2 meses" type="checkbox" id="test25" name="meses1" value="SiftScience" checked/>
                            <label id="right" className="test25 right_" for="test25">¿SiftScience?</label>
                        </div>
                        </div>

                        <div className="d50 left_ mov100">
                            <div className="d80 center" dangerouslySetInnerHTML={createcheckbox()}>
                                
                            </div>
                        </div>
                        <div className="forma mar_t_5 left_">
                        <div className="forma">
                           <h3 className="titulo forma fiscales t_center" id='texto_ley' dangerouslySetInnerHTML={createNivel()}></h3>
                        </div>
                    </div>
                    </div>
                    

                    <div className="forma mar_t_5 mar_b_5 left_">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos de costos</h3>
                        </div>
                        <div className="d70 left_ conversion_sec">
                         &nbsp;
                        </div>
                    </div>

                    <div className="forma">
                        <table className="forma t_center" border="1" bordercolor="#a7adb2">
                            <thead className="forma center">
                                <tr className="forma">
                                    <td className="d25 left_"><b>Medio de pago</b></td>
                                    <td className="d25 left_">Comisión variable</td>
                                    <td className="d25 left_">Comisión fija</td>
                                    <td className="d25 left_">Descuento</td>
                                </tr>
                            </thead>





 
                            <tbody className="forma" id="tabla_cotizador" dangerouslySetInnerHTML={createMarkup()}>

                           

                                
                            </tbody> 



                        </table>
                    </div>
                    
                    <div className="forma">
                        
                        

                        
                        <div className="forma mar_t_10 mar_b_10">
                            
                            
                             <input type="submit" className="cotizar"  id='propuesta' value="PROPUESTA"/>
                               
                               <input type="hidden" className="cotizar"  id='idcotizacion' name='idcotizacion'value="890"/>
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
export default Quote;
