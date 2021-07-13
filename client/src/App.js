import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import Table from './components/Table';
import Edit from './components/Edit';
import pokeball from './pokeball.svg';
import './App.css';
import pokemonService from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [refresh, setRefresh] = useState([])

  useEffect( () => {
    const callApi = async () => {
      const pokemonApi = await pokemonService.getPokemons();
      setPokemon(pokemonApi)
    }
    callApi()
  }, [refresh])

  return (
    <Router className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/lista">
          <Table/>
        </Route>
        <Route patch="/:id" children={<Edit/>}>
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect( () => {
    const callApi = async () => {
      const pokemonApi = await pokemonService.getPokemons();
      setPokemon(pokemonApi)
    }
    callApi()
  }, [refresh])

  return (
    <div className="App-header">
        <img src={pokeball} className="App-logo w-25" alt="logo" />
        <p>
          Você conhece esses pokemons?
        </p>
    </div>
  );
}

function Create() {
  const [name, setName] = useState("");
  const [power, setPower] = useState(0)
  return (
    <div className="App-header">
      <form>
      <div className="d-flex flex-row-reverse">
        <Link to="/lista" className="nav-link">
            <button className="btn btn-danger">X</button>
        </Link>
      </div>
      <h2 className="text-center mb-3">Cadastre seu pokemon</h2>

        <div className="mb-3">
          <label htmlFor="id" className="form-label mx-3">Nome</label>
          <input type="text" name="name" className="form-control" id="" input={name}
          onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label mx-3">Power</label>
          <input type="number" name="power" className="form-control" id="" input={power}
          onChange={(event) => setPower(event.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit" onClick={()=>{pokemonService.postPokemons({name: name, power: power})}}>Cadastrar</button>
        </div>

      </form>
    </div>
  );
}

function Dashboard(props) {

  return (
    <div className="App-header">
      <h2></h2>
      <div className="table-responsive">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Power</th>
                        <th scope="col">Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={props.children.id}>
                        <td>{props.name}</td>
                        <td>{props.power}</td>
                        {console.log(props.children)}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default App;
