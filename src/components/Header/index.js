import './header.css';

function Header(){
    return(
        <header>
            <h2>RYAN GRIPP DA SILVA</h2>
            <nav className='navegacao'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;