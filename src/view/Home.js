// Importing Libraries
// Importing Libraries
import React, { Fragment, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
// Component

class HomeClass extends React.Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state={
            name_clie: '',
            loading:false,
            pokemon:[],
            url:'https://pokeapi.co/api/v2/pokemon/'
        }
    }
    componentDidMount(){
        this.getPokemon();
    }
    getPokemon = () => {
            this.setState({loading:true})
            fetch(this.state.url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pokemon: res.results,
                    url: res.next,
                    loading:false
                })

         });
    };

}

const { useRef } = React;

const Home = (props) => {





const name_clie = useRef();
const giro_rfc = useRef();
const rfc = useRef();
const mcc = useRef();
const per_fiscal = useRef();
const name_comercial = useRef();
const p_web = useRef();
const nom_ap = useRef();
const email = useRef();
const puesto = useRef();
const tel = useRef();
const numero_de_trans = useRef();
const ticket = useRef();
const formRef=useRef();



const [monto_por_mes, setmonto_por_mes] = useState('0.00');;
var Changemonto= (e) => {
    var n_ticket = (ticket.current.value);
    var n_trans = (numero_de_trans.current.value);
    var monto_procesado =(n_ticket*n_trans);
    setmonto_por_mes(currencyFormat(monto_procesado));
 };   

var handleSubmit= (e) => {
    e.preventDefault();
    var $enviar = true;

  
    /*
    console.log(name_clie.current.value);
    console.log(giro_rfc.current.value);
    console.log(rfc.current.value);
    console.log(mcc.current.value);
    console.log(per_fiscal.current.value);
    console.log(name_comercial.current.value);
    console.log(p_web.current.value);
    console.log(nom_ap.current.value);
    console.log(email.current.value);
    console.log(puesto.current.value);
    console.log(tel.current.value);
    console.log(numero_de_trans.current.value);
    console.log(ticket.current.value);

    */



        if(name_clie.current.value==''){
            alert(name_clie.current.title);
            name_clie.current.focus();
            $enviar = false;
            return $enviar; 
        }
        if(giro_rfc.current.value==''){
            alert(giro_rfc.current.title);
            giro_rfc.current.focus();
            $enviar = false;
            return $enviar; 
        }   
        if(rfc.current.value==''){
            alert(rfc.current.title);
            rfc.current.focus();
            $enviar = false;
            return $enviar; 
        }else if(validaRFC(rfc.current.value)==false ){
            alert("Formato RFC incorrecto");
            rfc.current.focus();
            $enviar = false;
            return $enviar; 
        }    
        if(mcc.current.value==''){
            alert(mcc.current.title);
            mcc.current.focus();
            $enviar = false;
            return $enviar; 
        }    
        if(per_fiscal.current.value==''){
            alert(per_fiscal.current.title);
            per_fiscal.current.focus();
            $enviar = false;
            return $enviar; 
        }    
        if(name_comercial.current.value==''){
            alert(name_comercial.current.title);
            name_comercial.current.focus();
            $enviar = false;
            return $enviar; 
        }    
        if(p_web.current.value==''){
            alert(p_web.current.title);
            p_web.current.focus();
            $enviar = false;
            return $enviar; 
        }    
        if(nom_ap.current.value==''){
            alert(nom_ap.current.title);
            nom_ap.current.focus();
            $enviar = false;
            return $enviar; 
        }else if(validarSiletra(nom_ap.current.value) ){
            alert("Este campo solo acepta caracteres Alfabéticos");
            nom_ap.current.focus();
            $enviar = false;
            return $enviar; 
        }

        if(email.current.value==''){
            alert(email.current.title);
            email.current.focus();
            $enviar = false;
            return $enviar; 
        }    
        if(puesto.current.value==''){
            alert(puesto.current.title);
            puesto.current.focus();
            $enviar = false;
            return $enviar; 
        }    
        if(tel.current.value==''){
            alert(tel.current.title);
            tel.current.focus();
            $enviar = false;
            return $enviar; 
        }else if(validarSiNumero(tel.current.value) ){
            alert("Este campo solo acepta caracteres numericos");
            tel.current.focus();
            $enviar = false;
            return $enviar; 
        }

        if(numero_de_trans.current.value==''){
            alert(numero_de_trans.current.title);
            numero_de_trans.current.focus();
            $enviar = false;
            return $enviar; 
        }    
        if(ticket.current.value==''){
            alert(ticket.current.title);
            ticket.current.focus();
            $enviar = false;
            return $enviar; 
        }    


        //meses sin intereses
        var meses = document.getElementsByClassName("meses");
        var i, mcheck=0;
        for (i = 0; i < meses.length; i++) {
            if (meses[i].checked) {
            mcheck = 1;
            }
        }
        if(!mcheck){
            alert('Seleccione cantidad de Meses sin intereses');
            document.getElementsByClassName("meses")[0].focus();
            $enviar = false;
            return $enviar;
        }

        //medios de pago
        var medios_dep = document.getElementsByClassName("medios_dp");
        var i, mdpcheck=0;
        for (i = 0; i < medios_dep.length; i++) {
            if (medios_dep[i].checked) {
             mdpcheck = 1;
            }
        }
        if(!mdpcheck){
            alert('Seleccione Medios de pago');
            document.getElementsByClassName("medios_dp")[0].focus();
            $enviar = false;
            return $enviar;
        }


        // naturaleza
        var naturale = document.getElementsByClassName("natura");
        var i, naturacheck=0;
        for (i = 0; i < naturale.length; i++) {
            if (naturale[i].checked) {
            naturacheck = 1;
            }
        }
        if(!naturacheck){
            alert('Seleccione Naturaleza');
            document.getElementsByClassName("natura")[0].focus();
            $enviar = false;
            return $enviar;
        }


        //operativa
        var operativ = document.getElementsByClassName("operat");
        var i, operativcheck=0;
        for (i = 0; i < operativ.length; i++) {
            if (operativ[i].checked) {
            operativcheck = 1;
            }
        }
        if(!operativcheck){
            alert('Seleccione Operativa');
            document.getElementsByClassName("operat")[0].focus();
            $enviar = false;
            return $enviar;
        }


        // Modelo
        var model = document.getElementsByClassName("model");
        var i, modelcheck=0;
        for (i = 0; i < model.length; i++) {
            if (model[i].checked) {
            modelcheck = 1;
            }
        }
        if(!modelcheck){
            alert('Seleccione Modelo');
            document.getElementsByClassName("model")[0].focus();
            $enviar = false;
            return $enviar;
        }

        //Adquisición
        var adqui = document.getElementsByClassName("adquisi");
        var i, adquicheck=0;
        for (i = 0; i < adqui.length; i++) {
            if (adqui[i].checked) {
            adquicheck = 1;
            }
        }
        if(!adquicheck){
            alert('Seleccione Adquisición');
            document.getElementsByClassName("adquisi")[0].focus();
            $enviar = false;
            return $enviar;
        }

        if($enviar){
            formRef.current.submit(); //document.forms[0].submit();
        }


};


function validarSiletra(letra){    
    if (!/^[a-zA-Z\xc0-\xff ]+$/.test(letra)){
        return true;
    }else{
        return false;
    }
}



function validarSiNumero(numero){    
    if (!/^([0-9])*$/.test(numero)){
        return true;
    }else{
        return false;
    }
}


function currencyFormat(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


function validaRFC(rfc){
  let pattern = /^[a-zA-Z]{3,4}(\d{6})((\D|\d){2,3})?$/;
  let rfc_ = rfc;
  return pattern.test(rfc_);
}

//fin submit
   
      var logOut = () => {
        localStorage.clear();
        props.history.push("/quote");
        return
      };
/*
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
      
      
       in the header tag this was used <Header logOut={logOut} getUserInfo={getUserInfo}></Header> 
      
      idea que no funciono:
      
      var getUserInfo = () => {
       
        var jsonPayload = {
            data : {
                name: 'carlos',
                role: 'admin'
            }
        }
        console.log(jsonPayload)
          return jsonPayload;
      }; 
*/

    
  return (
    <Fragment>
    <div className="App">
      <header className = "App-header">
      <div className="App">

        
        <Header logOut={logOut} ></Header>  
        
    <div>
   
    
  </div>
    


  <sections className="parallax">   
        
        <form className="forma validar" ref={formRef} id='userForm' name='' action='quote' onSubmit={handleSubmit} >
            <div className="contenedor3 center pad_lr_30">  
                <h2 className="forma">
                    Por favor llena los campos solicitados<br/><small><span>*</span> Campos necesarios</small>
                </h2>
                <div className="forma">
                    <div className="forma mar_t_1  mar_b_3 cambio_t">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos fiscales</h3>
                        </div>
                        <div className="d70 left_ fiscales_sec">
                         &nbsp;
                        </div>
                    </div>
                    <div className="forma">
                       <div className="d50 left_ mov100">
                        <div className="d80 center">

                            <label className="forma"><span>*</span> Nombre del cliente (Razón Social)</label>
                            <input className="forma " type="text" name="name_clie" id="name_clie" ref={name_clie} title='Por favor Ingrese Nombre del cliente' maxlength="50"/>
                        </div>
                        </div>

                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Giro RFC</label>
                                
                                <input className="forma obligatorio" type="text" name="giro_rfc" id="giro_rfc"  ref={giro_rfc} title='Por favor Ingrese Giro RFC'/>
                            </div>
                        </div>
                    </div>
                    <div className="forma">   
                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> RFC</label>
                                <input className="forma obligatorio" type="text" name="rfc" id="rfc" ref={rfc} title='Por favor Ingrese RFC'/>
                            </div>
                        </div>

                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Giro </label>
                                <select className="forma obligatorio" name="mcc" id="mcc" ref={mcc}  title='Por favor Selecione Giro MCC'>
                                        <option value=''>Seleciona tu opción</option>
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
                        </div>
                    </div>  
 
                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Personalidad fiscal</label>
                                <select className="forma obligatorio" name="per_fiscal" id="per_fiscal" ref={per_fiscal}  title='Por favor Selecione Personalidad fiscal'>
                                        <option value=''>Seleciona tu opción</option>
                                        <option>Actividad Física con Actividad Empresarial</option>
                                        <option>Persona Moral</option>
                                        <option>ONG Autorizada</option>
                                </select>
                            </div>
                        </div>
                
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Nombre comercial</label>
                            <input className="forma obligatorio" type="text" name="name_comercial" id="name_comercial" ref={name_comercial}  title='Por favor Ingrese Nombre comercial' maxlength="50" />
                        </div>
                    </div>
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Página Web </label>
                            <input className="forma obligatorio" type="text"  name="p_web" id="p_web" ref={p_web}  title='Por favor Ingrese Página web' />
                        </div>
                    </div>
                    
                    <div className="forma mar_t_5 mar_b_5 left_ cambio_t">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos del contacto de la Empresa</h3>
                        </div>
                        <div className="d70 left_ personales_sec">
                         &nbsp;
                        </div>
                    </div>

                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Nombre(s) y Apellidos</label>
                            <input className="forma obligatorio" type="text" id="nom_ap"  name="nom_ap" ref={nom_ap}  title='Por favor Ingrese Nombre y Apellidos' maxlength="50" />
                        </div>
                    </div>
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> E-mail</label>
                            <input className="forma obligatorio" type="email" id="email"  name="email" ref={email}  title='Por favor Ingrese E-mail' maxlength="50"/>
                        </div>
                    </div>
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Puesto</label>
                            <input className="forma obligatorio" type="text" id="puesto"  name="puesto" ref={puesto}  title='Por favor Ingrese Puesto' maxlength="30" />
                        </div>
                    </div>
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Teléfono</label>
                            <input className="forma obligatorio" type="tel" id="tel"  name="tel" ref={tel}  title='Por favor Ingrese Teléfono' maxlength="10" />
                        </div>
                    </div>



                    <div className="forma">

                        <div className="forma mar_t_10 mar_b_10">
                            <input type="submit" className="cotizar"/>
                        </div>
                    </div>
                </div>

            </div>    
        </form>
        
    </sections> 
     <Footer></Footer>
        
    </div>
      </header>
    </div>
    </Fragment>
  );
}

// Exporting component
export default Home;
