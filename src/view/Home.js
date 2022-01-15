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
                                <label className="forma"><span>*</span> Giro MCC</label>
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
                            <label className="forma"><span>*</span> Página Web del comercio</label>
                            <input className="forma obligatorio" type="text"  name="p_web" id="p_web" ref={p_web}  title='Por favor Ingrese Página web' />
                        </div>
                    </div>
                    
                    <div className="forma mar_t_5 mar_b_5 left_ cambio_t">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos del contacto del comercio</h3>
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

                    <div className="forma mar_t_5 mar_b_2 left_ cambio_t">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos de conversión</h3>
                        </div>
                        <div className="d70 left_ conversion_sec">
                             &nbsp;
                        </div>
                    </div>  

                    <div className="forma">
                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Número de transacciones por mes</label>
                                
                                
                                 <input className="forma obligatorio" type="number" id="numero_de_trans"  name="numero_de_trans" ref={numero_de_trans}  title='Por favor Ingrese Número de transacciones por mes' onChange={Changemonto} />
                            </div>
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Ticket promedio</label>
                                
                                
                                <input className="forma obligatorio" type="number" id="ticket"  name="ticket" ref={ticket}  title='Por favor Ingrese Ticket promedio' onChange={Changemonto} />

                            </div>
                            <div className="forma mar_t_3">
                                <div className="d80 center">
                                    <div className="d70 left_">
                                        <label className="forma">Monto procesado por mes:&nbsp;</label>
                                    </div>
                                    <div className="d30 left_ color_b monto_por_mes">
                                       <p>${monto_por_mes}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d50 left_ border_l_px mov100">
                            <div className="d80 center">    
                                
                                <div className="forma">
                                    <div className="d50 left_">
                                        <div className="d80 center">
                                            <div className="forma">
                                                <label className="forma"><span>*</span> Meses sin<br/>&nbsp;&nbsp;&nbsp;intereses</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d50 left_ color_fff">
                                        
                                        <div className="forma">
                                            <input className="input2 meses" type="checkbox" id="test1_" name="meses1" value="3 meses"/>
                                            <label for="test1_"> 3 meses</label>
                                        </div>
                                        <div className="forma">
                                            <input className="input2 meses" type="checkbox" id="test2_" name="meses2" value="6 meses" />
                                            <label for="test2_"> 6 meses</label>
                                        </div>   
                                        <div className="forma">
                                            <input className="input2 meses" type="checkbox" id="test3_" name="meses3" value="9 meses" />
                                            <label for="test3_"> 9 meses</label>
                                        </div>   
                                        <div className="forma">
                                            <input className="input2 meses" type="checkbox" id="test4_" name="meses4" value="12 meses"  />
                                            <label for="test4_"> 12 meses</label>
                                        </div>   
                                    </div>

                                    <div className="forma left_">
                                        <div className="d80 center">
                                            <div className="forma">
                                                <input className="input2 exp" type="checkbox" id="experiencia" name="experiencia" value="1" />
                                                <label className="forma" for="experiencia"><span>¿</span> Experiencia E-commerce <span>?</span></label>
                                            </div>
                                        </div>
                                    </div>
                                

                                </div>    
                            </div>
                        </div>

                        <div className="forma">
                            <div className="forma mar_t_5 mar_b_2 left_ cambio_t">
                                <div className="d30 left_">
                                   <h3 className="titulo forma fiscales"><span>*</span> Medios de pago</h3>
                                </div>
                                <div className="d70 left_ pago_sec">
                                     &nbsp;
                                </div>
                            </div> 
                            <div className="d80 center">      
                                <div className="forma">
                                    <div className="d33 left_ color_fff mov100">
                                        <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test1" name="medio_de_pago1" value="Visa / Master Card" />
                                            <label for="test1"> Visa / Master Card</label>
                                        </div>                                          
                                        <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test2" name="medio_de_pago2" value="AMEX" />
                                            <label for="test2"> AMEX</label>
                                        </div>   

                                        <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test3" name="medio_de_pago3" value="OXXO" />
                                            <label for="test3"> OXXO</label>
                                        </div> 
                                        <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test4" name="medio_de_pago4" value="Paycash" />
                                            <label for="test4"> Paycash</label>
                                        </div>
                                         <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test_5" name="medio_de_pago5" value="SPEI" />
                                            <label for="test_5"> SPEI</label>
                                        </div> 
                                        <div className="forma mar_t_2">
                                                <h3 className="titulo forma fiscales mar_b_1">Naturaleza</h3>
                                             </div>
                                             <div className="forma">
                                                 <input className="input2 natura" type="checkbox" id="test8" name="naturaleza1" value="Nacional" />
                                                 <label for="test8"> Nacional</label>
                                             </div>                                          
                                             <div className="forma">
                                                 <input className="input2 natura" type="checkbox" id="test9" name="naturaleza2" value="Internacional" />
                                                 <label for="test9"> Internacional</label>
                                             </div>                                                       
                                    </div>
                                    <div className="d33 left_ border_l_px color_fff mov100">
                                        <div className="d80 right_">
                                                <div className="forma">
                                                   <h3 className="titulo forma fiscales mar_b_1">Operativa</h3>
                                                </div>
                                            <div className="forma">
                                                <input className="input2 operat" type="checkbox" id="test5" name="operativa1" value="Cobro único" />
                                                <label for="test5"> Cobro único</label>
                                            </div>                                          
                                            <div className="forma">
                                                <input className="input2 operat" type="checkbox" id="test6" name="operativa2" value="Cobro recurrente automático" />
                                                <label for="test6"> Cobro recurrente automático</label>
                                            </div>   
                                            <div className="forma">
                                                <input className="input2 operat" type="checkbox" id="test7" name="operativa3" value="Cobro recurrente automático on demand" />
                                                <label for="test7"> Cobro on demand</label>
                                            </div>    
                                            
                                             <div className="forma mar_t_2 S2">
                                                <h3 className="titulo forma fiscales mar_b_1">Modelo</h3>
                                                                                       
                                                <div className="forma">
                                                    <input className="radio model" type="radio" name="modeloa" id="id4" value='Modelo Agregador' />
                                                    <label for="id4"> Módelo Agregador</label>
                                                </div> 
                                                <div className="forma">
                                                    <input className="radio model" type="radio" name="modeloa" id="id5" value='Modelo Integrador' />
                                                    <label for="id5"> Modelo Integrador</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d33 left_ border_l_px color_fff mov100">
                                        <div className="d80 right_">
                                            <div className="forma">
                                               <h3 className="titulo forma fiscales mar_b_1">Adquisición</h3>
                                            </div>
                                            <div className="forma">
                                                <input className="input2 adquisi" type="checkbox" id="test16" name="adquisicion1" value="Plataforma Web" />
                                                <label for="test16"> Plataforma Web</label>
                                            </div>                                          
                                            <div className="forma">
                                                <input className="input2 adquisi" type="checkbox" id="test17" name="adquisicion2" value="APP Movil" />
                                                <label for="test17"> APP Nativa</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 adquisi" type="checkbox" id="test18" name="adquisicion3" value="IVR" />
                                                <label for="test18"> IVR</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 adquisi" type="checkbox" id="test19" name="adquisicion4" value="Call Center Propio" />
                                                <label for="test19"> Call Center Propio</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 adquisi" type="checkbox" id="test20" name="adquisicion5" value="Call Center Comisión" />
                                                <label for="test20"> Call Center Comisión</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 adquisi" type="checkbox" id="test21" name="adquisicion6" value="Facers. Toma de datos por APP" />
                                                <label for="test21"> Facers.<br/>Toma de datos por APP</label>
                                            </div>   
                                            <div className="forma">
                                                <input className="input2 adquisi" type="checkbox" id="test22" name="adquisicion7" value="Facers. Toma de datos escrito" />
                                                <label for="test22"> Facers.<br/>Toma de datos escrito</label>
                                            </div>  
                                            <div className="forma">
                                                <input className="input2 adquisi" type="checkbox" id="test23" name="adquisicion8" value="Establecimiento" />
                                                <label for="test23"> Establecimiento</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 adquisi" type="checkbox" id="test24" name="adquisicion9" value="Solicitudes de Pago" />
                                                <label for="test24"> Solicitudes de Pago</label>
                                            </div> 
                                        </div>    
                                    </div>    
                                </div>
                            </div>
                        </div>
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
