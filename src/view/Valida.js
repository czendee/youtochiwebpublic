// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";
import logo from '../assets/img/logo.svg';

// Component

const Valida = () => {
    var message = ""
    // recuperamos el querystring
    const querystring = window.location.search
    // usando el querystring, creamos un objeto del tipo URLSearchParams
    const params = new URLSearchParams(querystring)   

    const data = { token: atob(params.get('token')), email: atob(params.get('email'))};
   
    const requestInfo = {
        method: 'POST',
        body:JSON.stringify(data),
        headers: new Headers({
            'Content-Type':'application/json'
        }),
    };

    fetch('https://sandbox.banwire.com/auth/v1/account/active', requestInfo)
    .then(response =>{
        if(response.ok){

            return response.json()   
        }
        else if( response.status == 400){
          throw new Error("Error al validar la cuenta");
        } 

    })
    .then(token => {
        // localStorage.setItem('token', token);
        this.props.history.push("/home");
        return;
    })
    .catch(e => {
        message =  "Error al validar la cuenta"; 
    });


  return (
    <Fragment>
    <div className="App">
    <header className = "App-header">
    <div className="forma login">
        <div className="contenedor3 center">
            <div className="d50 left_">
                <form className="d70 left_ form_log"> 
                    <img src={logo} className="center no_mov logo_log_" />
                    <div className="forma">
                        {/* { 
                            {message} === '' ? (<p id="" className="forma t_center color_gr"><br/><br/>CUENTA VALIDADA EXITOSAMENTE<br/><br/>Por último revisa tu bandeja de correo para generar tu nueva contraseña.</p>): (<p id="" className="forma t_center color_gr"><br/><br/>PROBLEMA AL VALIDAR TU CUENTA<br/><br/>Verifique con el administrador.</p>)
                        } */}
                        <p id="" className="forma t_center color_gr"><br/><br/>CUENTA VALIDADA EXITOSAMENTE<br/><br/>Por último revisa tu bandeja de correo para generar tu nueva contraseña.</p>
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
export default Valida;
