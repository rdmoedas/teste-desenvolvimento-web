import pokemonService from "../../services/pokemon";
import { Link } from "react-router-dom";

function TableTr(props) {
    return (
        <tr>
            <td>{props.children.pokemon.id}</td>
            <td>{props.children.pokemon.name}</td>
            <td>{props.children.pokemon.power}</td>
            <td>
                <Link to={`/${props.children.pokemon.id}`}>
                    <button className="btn btn-warning">Atualizar</button>
                </Link>
            </td>
            
            <td><button 
                    className="btn btn-danger" 
                    onClick={()=>{
                        return (
                            pokemonService.softDeletePokemon(props.children.pokemon.id),
                            props.children.setRefresh(true)
                        )}}
                >Delete
                </button>
            </td>
        </tr>
    )
}

export default TableTr;