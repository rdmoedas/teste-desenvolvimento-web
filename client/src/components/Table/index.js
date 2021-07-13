import { useEffect, useState } from 'react';
import './table.css';
import TableTr from '../TableTr';
import pokemonService from '../../services/pokemon';

function Table() {

    const [pokemon, setPokemon] = useState([]);
    const [refresh, setRefresh] = useState(false);
  
    useEffect( () => {
      const callApi = async () => {
        const pokemonApi = await pokemonService.getPokemons();
        setPokemon(pokemonApi)
      }
      callApi()
      setRefresh(false)
    }, [refresh])

    return (
        <div className="table-responsive">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Power</th>
                        <th scope="col">Atualizar</th>
                        <th scope="col">Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.map((item)=>{
                        return (
                            <TableTr key={item.id}>{{pokemon: item, setRefresh: setRefresh}}</TableTr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;