// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";
import logo from '../assets/img/logo.svg';
// Component
const Valida = () => {


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
                            <p className="forma t_center color_gr"><br/><br/>CUENTA VALIDADA EXITOSAMENTE<br/><br/>Se ha enviado un e-mail a tu bandeja de correo para generar tu nueva contraseña.</p>
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
