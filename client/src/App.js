import { useEffect, useState } from 'react';
import logo from './logo.svg';
import pokeball from './pokeball.svg';
import './App.css';
import pokemonService from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [name, setName] = useState("");
  const [power, setPower] = useState(0)
  const [refresh, setRefresh] = useState([])

  useEffect( () => {
    const callApi = async () => {
      const pokemonApi = await pokemonService.getPokemons();
      setPokemon(pokemonApi)
    }
    callApi()
  }, [refresh])

  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />
        <p>
          Olá mundo.
        </p>
        <p>
          Você conhece esses pokemons?
        </p>
        <div>
        { pokemon.map( (item)=>{
            return (
              <p key={item.id}> 
                {item.name} || {item.power} <button onClick={()=>{
                  pokemonService.softDeletePokemon(item.id)
                  setRefresh([]);                  
                  }}>Deletar</button>
              </p>
            )
          })}

        </div>
        <div>
          <form>
            <input type="text" name="name" id="" input={name}
            onChange={(event) => setName(event.target.value)}
            />
            <input type="number" name="power" id="" input={power}
            onChange={(event) => setPower(event.target.value)}
            />
            <div>
              <button type="submit" onClick={()=>{pokemonService.postPokemons({name: name, power: power})}}>Cadastrar</button>
            </div>
          </form>
        </div>

      </header>
    </div>
  );
}

export default App;
