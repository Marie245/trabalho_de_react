import { Link } from "react-router-dom";
import "./style.css";
import bts from '../Img/logo.png'
export const Menu = () => {
    return (
        <>
        <header>
           <img src={bts} alt="bts "  id="bts "/>
            <nav className='menu'>
            <ul>

            <li><Link to="/" id="home">Home</Link></li>
            <li><Link to="/servicos" id="servico">Serviços</Link></li>
            <li><Link to="/contatos" id="contato">Contatos</Link></li>
            </ul>
              </nav>
              <Link to="/contatos" id="pedido"><h3>FAÇA SEU PEDIDO</h3></Link>
        
        </header>
        </>
    )
};