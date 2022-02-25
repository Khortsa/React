import './personne.css'

export function Personne(props){
    console.log(props);
    return <p>Nom: {props.name}</p>
}