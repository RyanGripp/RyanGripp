import './home.css';

function Home(){
    return(
        <div className="main">
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
            <div className='inicio'>
                <img src='/RyanGripp/SelfImage.jpg' alt='' className='selfimage'/>
                <h2 className='nome'>Ryan Gripp da Silva</h2>
                <div className='contato'>
                    <a target='blank' href='https://www.linkedin.com/in/ryan-gripp-da-silva-b430142b8/'>LinkedIn</a>
                    <a href='https://github.com/RyanGripp'>GitHub</a>
                </div>
            </div>
            <div className='projeto'>
                <img src='/RyanGripp/filmes.png' alt='' />
                <h3>Projeto de filmes utilizando ReactJS</h3>
                <p> Este projeto exibe uma seleção de filmes atualmente em catálogo, 
                    fornecendo uma variedade de informações sobre cada filme. Esses dados 
                    foram obtidos através de uma API fornecida pelo site <a target='blank' 
                    rel='external' href='https://api.themoviedb.org/'>https://api.themoviedb.org/</a>. 
                    O projeto permite aos usuários acessar páginas individuais para cada filme e 
                    adicionar aos favoritos, que são armazenados localmente utilizando o 
                    LocalStorage do navegador.
                </p>
                <a className='ver-projeto' target='blank' rel='external' href='https://ryangripp-filmes.netlify.app/'>
                Ver Projeto</a>
                <a className='ver-repositorio' target='blank' rel='external' href='https://github.com/RyanGripp/Api-Filmes'>
                Ver Repositorio</a>
            </div>
        </div>
    )
}

export default Home;