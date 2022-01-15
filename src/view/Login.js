// Importing Libraries
// Importing Libraries
import React, { Component, Fragment } from "react";
import logo from '../assets/img/logo.svg';

var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

// Component
class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            message : this.props.location.state?this.props.location.state.message: '',
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    };
    
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["email"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }
    }
    
    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
        
  
      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Debes iningresar tu e-mail";
      }
  
      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Ingresa un email válido";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Ingresa tu pasword";
      }
  
      this.setState({errors: errors});
      return formIsValid;
    }

    
   creaCotizacion = () => {
       console.log('creaCotizacion paso 1');
        const data = { numero : "122", name: "primero", ejecutivo:"MRCanceco01" };
        const requestInfo = {
            method: 'POST',
            body:JSON.stringify(data),
            headers: new Headers({
                'Content-Type':'application/json'
            }),
        };
     
        console.log('creaCotizacion paso 2');
/*
        if (!pattern.test(data.email)){
            this.setState({ message : 'El correo electronicó no es válido.' });  
@@ -27,7 +27,7 @@ const FiltroReportes= () => {
            return
        }
*/


        fetch('http://peaceful-retreat-91246.herokuapp.com/banwireapi/cotizaciones', requestInfo)
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            
            throw new Error("Error cotizacioness.");
        })
        .then( data => {
              console.log('data = ', data);
         })       
        .catch(e => {
            this.setState({ message: e.message });   
        });
       
       console.log('creaCotizacion paso 3');

    }
        
        
    traeCotizaciones = () => {
        const data = { numero : "122", name: "primero"};
        console.log('traeCotizaciones paso 1');
     

/*
        if (!pattern.test(data.email)){
            this.setState({ message : 'El correo electronicó no es válido.' });  
@@ -27,7 +27,7 @@ const FiltroReportes= () => {
            return
        }
*/
/*
                        <div className="mar_t_4 mar_b_4">
                        <input type="submit" className="forma submit_log bot_log_temp"  value="Lista Cotizaciones" onClick={this.traeCotizaciones}/>
                        </div>
                        <div className="mar_t_4 mar_b_4">
                        <input type="submit" className="forma submit_log bot_log_temp"  value="CREA COTIZACION" onClick={this.creaCotizacion}/>
                        </div>
*/

        fetch('http://peaceful-retreat-91246.herokuapp.com/banwireapi/cotizacionesbynumero2/NADA/NADA/NADA')
        .then(response =>{
            console.log('traeCotizaciones response  1');
            if(response.ok){
                return response.json()
            }
            
            throw new Error("Error cotizacioness.");
        })
        .then( data => {
            console.log('traeCotizaciones paso data 1');
              console.log('data = ', data);
         })
        .catch(e => {
            console.log('traeCotizaciones paso error 2');
            this.setState({ message: e.message });   
        });
        
        console.log('traeCotizaciones paso 3');

    }

        signIn = () => {

        const data = { email: this.email, password: this.password};
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

        if (!data.password) {
            this.setState({ message : 'Debes ingresar tu password.' }); 
            return
        }


        fetch('https://sandbox.banwire.com/auth/v1/account/login', requestInfo)
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            
            throw new Error("Accessos no válidos.");
        })

        .then(token => {
            
            localStorage.setItem("token-chargebacks-jwt", token.access_token);
//no refresh in the back             localStorage.setItem("token-chargebacks-refresh", token.refresh_token);
            this.props.history.push("/quote/home");
            return;
        })
        .catch(e => {
            this.setState({ message: e.message });   
        });
    }

        
    render() {
        

  return (
    <Fragment>
    <div className="App h_100">
    <header className = "App-header h_100">


    <div className="forma login h_100">
        <div className="contenedor3 center h_100">
            <div className="d50 center">
                <form className="d70 left_ form_log" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}> 

                    <img src={logo} className="center no_mov logo_log_" />
                    
                    <div className="form_inp forma mar_t_1">

                        <label>Usuario</label>
                        <input 
                            type="text" 
                            className="forma usuario" 
                            id="email" 
                            onChange={ e => this.email = e.target.value }
                            name="email"
                            placeholder="example@youtochi.com" />
                    </div>
                    <div className="form_inp forma mar_t_1">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="forma password" 
                            id="password" 
                            onChange={ e => this.password = e.target.value }
                            name="password" 
                            placeholder="*****************"/>
                    </div>
                    {
                        this.state.message !== ''? (
                        <p className="t_center forma alert_error">{this.state.message}</p>
                        ) : ''
                    }
                    <div className="form_inp forma">
                        <div className="mar_t_4 mar_b_4">
                        <input type="submit" className="forma submit_log bot_log_temp"  value="ACCEDER" onClick={this.signIn}/>
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
}
// Exporting component
export default Login;
