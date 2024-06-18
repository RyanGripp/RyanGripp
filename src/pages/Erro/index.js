import {Link} from 'react-router-dom';
import './erro.scss';

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/RyanGripp/">Ir para Página inicial</Link>
        </div>
    )
}

export default Erro;