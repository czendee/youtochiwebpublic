// Importing Libraries
// Importing Libraries
import React, { Component, lazy, Suspense,Fragment } from "react";
import logo from '../assets/img/logo.svg';
// Component
var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
class Recuperar extends Component {
    
    constructor(props){
        super(props)
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
                    <div className="form_inp forma mar_t_2 t_center">
                        <label>Igresa tu e-mail y te enviaremos un correo para recuperar tu contraseña.</label>
                    </div>
                   
                    <div className="form_inp forma mar_t_3">
                        <label>Usuario</label>
                        <input type="text" className="forma usuario" id="email" onChange={ e => this.email = e.target.value } placeholder="example@banwire.com" />
                    </div>
                    {
                        this.state.message !== ''? (
                        <p className="t_center forma alert_error">{this.state.message}</p>
                        ) : ''
                    }
                    <div className="form_inp forma">
                        <div className="mar_t_4 mar_b_4">
                            
                            <a onClick={this.restPass} className="forma submit_log bot_log_temp">ENVIAR</a>
                           {/*<input type="submit" className="forma submit_log" value="ENVIAR" />*/}
                        </div>
                        <div className="forma">
                            <a className="rec_c forma" href="/chargebacks/">REGRESAR</a>
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
export default Recuperar;
