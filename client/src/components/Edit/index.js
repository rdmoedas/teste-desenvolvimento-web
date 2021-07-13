import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { useEffect, useState } from 'react';
import pokemonService from '../../services/pokemon';

function Edit(){

    let { asd } = useParams();

    return (
        <div className="App-header">
            <p>
               id: { asd }
                { console.log(asd) }

            </p>
            <form>
                <div className="d-flex flex-row-reverse">
                    <Link to="/lista" className="nav-link">
                        <button className="btn btn-danger">X</button>
                    </Link>
                </div>
                <h2 className="text-center mb-3">Editar pokemon</h2>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="number" name="id" className="form-control" value="" input="" readOnly/>
                </div>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Nome</label>
                    <input type="text" name="name" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Power</label>
                    <input type="number" name="power" className="form-control"/>
                </div>
                <div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                    
                    >
                        Atualizar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Edit