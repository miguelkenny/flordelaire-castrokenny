import React, { useState } from 'react';
import { app } from '../firebase/Firebase';
import { getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        onAuthStateChanged,
        signInWithRedirect,
        GoogleAuthProvider,
        signOut
} from 'firebase/auth';

import Swal from 'sweetalert2';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const Auth = () => {
    const [usuarioGlobal, setUsuarioGlobal] = useState(null);
    const [estaRegistrandose, setEstaRegistrandose] = useState(false);
    let email = "";

    onAuthStateChanged(auth, (userFirebase) => {
        if(userFirebase){
            setUsuarioGlobal(userFirebase);
            email = auth.currentUser;
        } else {
            setUsuarioGlobal(null);
        }
    });

    function verifyRegister(email, pass){

        if(email !== "" && pass !== "" && pass.length >= 6){
            return true
        }
    }

    function verifyLogin(email, pass){
        if(email !== "" && pass !== ""){
            return true
        }
    }

    async function handlerSubmit(e){
        e.preventDefault()
        email=e.target.Email1.value;
        const password = e.target.Password1.value;
    
        if(estaRegistrandose){
            if(verifyRegister(email, password)){
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                Swal.fire("Registro", `Por seguridad, la contraseña no puede tener menos de 6 caracteres`, "info");
            }
        } else {
            if(verifyLogin(email, password)){
                signInWithEmailAndPassword(auth, email, password);
            } 
        } 
        
    }

    function signInWithGoogle(){
        signInWithRedirect(auth, googleProvider);
    }

    function signOutUser(){
        setEstaRegistrandose(false);
        signOut(auth);
        Swal.fire("Cerrar Sesión", `Sesión cerrada Exitosamente`, "success");
    }
    
    return (
        <div className="container">
            {usuarioGlobal ? (
                    <div className="col-auto text-end">
                        <span className="fs-5 text-white">Hola, Bienvenid@ a la tienda
                            <button className="btn btn-primary mx-2" onClick={() => signOutUser()}>Cerrar Sesión</button>
                        </span>
                    </div>
            ) : (
                <div>
                    <div className="col-auto">
                        <h4 className="text-white">{estaRegistrandose ? "Registrate" : "Inicia Sesion"}</h4>
                    </div>
                    <form className="row g-3 mb-4" onSubmit={handlerSubmit}>
                        <div className="col-auto">
                            <input 
                                type="email" 
                                className="form-control" 
                                id="Email1" 
                                aria-describedby="emailHelp"
                                placeholder="Email"
                            />
                        </div>
                        <div className="col-auto">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="Password1"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-warning">
                                {estaRegistrandose ? "Registrate" : "Inicia Sesion"}
                            </button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-primary" onClick={() => setEstaRegistrandose(!estaRegistrandose)}>
                                {estaRegistrandose ? ("¿Ya tienes cuenta? Inicia Sesion") : ("¿No tienes cuenta? Registrate")}
                            </button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-danger" onClick={() => signInWithGoogle()}>
                                Inicia sesion con Google
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}