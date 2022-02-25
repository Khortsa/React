import {Personne} from './components/personne'

export default function App(){
  return(
    <div>
        <h1>Bonjour Monde</h1>
        <ul>
          <li> Example</li>
          <li id ='salut'>Salut</li>
        </ul>
        <Personne name = 'Jean'/>
    </div>
  )
}