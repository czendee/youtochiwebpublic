// Importing Libraries
// Importing Libraries
import React, { Component, lazy, Suspense,Fragment } from "react";
import logo from '../assets/img/logo.svg';
// Component

var pattern = new RegExp(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)
class Cambiar extends Component {

    constructor(props){
        super(props)
        this.state = {
            message : this.props.location.state?this.props.location.state.message: '',
        };
    }
    changePass = () => {
        const querystring = window.location.search
        const params = new URLSearchParams(querystring)
        const data = {token: atob(params.get('token')), email: atob(params.get('email')), password: this.password1};
        const requestInfo = {
            method: 'POST',
            body:JSON.stringify(data),
            headers: new Headers({
                'Content-Type':'application/json'
            }),
        };

        if(!pattern.test(this.password1)){
            this.setState({ message : 'El password no cuenta con las especificaciones mencionadas.' });  
            return
        }else if(this.password1 !== this.password2){
            this.setState({ message : 'El password no coincide.' });
            return
        }

        fetch('https://sandbox.banwire.com/auth/v1/account/change', requestInfo)
       .then(response =>{
           if(response.ok){
               return response.json()
           }
           throw new Error("No se pudo restablecer contraseña");
       })
       .then(token => {
        localStorage.setItem('token', token);
        this.props.history.push("/chargebacks");
        return;
        })
       .catch(e => {
            this.setState({ message: e.message });   
        });
    }

render() {
  return (
    <Fragment>
    <div className="App">
    <header className = "App-header">


    <div className="forma login">
        <div className="contenedor3 center">
            <div className="d50 left_">
                <form className="d70 left_ form_log"> 
                    <img src={logo} className="center no_mov logo_log_" />
                    <div className="form_inp forma mar_t_1 t_center mar_t_2">
                        <label>La nueva contraseña debe contener al menos 8 caracteres, con 1 letra mayúscula, 1 letra minúscula, 1 dígito, 1 carácter especial, sin espacios y con un carácter numérico.
  <br/><br/>Si estás restableciendo debe ser diferente a la última contraseña.</label>

  {/*Una contraseña que contiene al menos 1 mayúscula, 1 minúscula, 1 dígito, 1 carácter especial y tiene una longitud de al menos 10*/}
                       
                    </div>

                    <div className="form_inp forma mar_t_3">
                        <label>Nueva contraseña</label>
                        <input type="password" className="forma password" id="password1" onChange={ e => this.password1 = e.target.value } />
                    </div>
                    <div className="form_inp forma mar_t_1">
                        <label>Confirmar nueva contraseña</label>
                        <input type="password" className="forma password" id="password2" onChange={ e => this.password2 = e.target.value }/>
                    </div>
                    {
                        this.state.message !== ''? (
                        <p className="t_center forma alert_error">{this.state.message}</p>
                        ) : ''
                    }
                    <div className="form_inp forma">
                        <div className="mar_t_4 mar_b_4"><a onClick={this.changePass} className="forma submit_log bot_log_temp">CAMBIAR AHORA</a></div>
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
export default Cambiar;
