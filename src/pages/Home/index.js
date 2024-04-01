import './home.css';

function Home() {
    return (
        <div className="main">
            <div className='inicio'>
                <div className='selfimage'>
                    <img src='/RyanGripp/SelfImage.jpg' alt='' />
                </div>
                <div className='nome'>
                    <h2>Ryan Gripp da Silva</h2>
                    <p>Olá, sou um desenvolvedor web com formação em Técnico em Informática pelo CEFET/RJ e atualmente estou 
                        cursando Bacharelado em Sistemas de Informação, também no CEFET/RJ. Com mais de 6 anos de experiência 
                        na área de desenvolvimento de software, possuo habilidades que incluem HTML, CSS, JavaScript, PHP, 
                        React, SQL, Node.js, Java, C e C++, além de conhecimentos básicos em Vtex e Wordpress.
                    </p>
                    <p>
                        Estou sempre em busca de aprimorar minhas habilidades e acompanhar as últimas tendências tecnológicas 
                        para garantir que meu trabalho esteja sempre alinhado com os mais altos padrões da indústria.
                    </p>
                </div>
                <div className='contato'>
                    <a target='blank' href='https://www.linkedin.com/in/ryan-gripp-da-silva-b430142b8/' className='linkedin'>
                        <i class="fa-brands fa-linkedin"></i>
                        <span>Linkedin</span>
                    </a>
                    <a href='https://github.com/RyanGripp' className='github'>
                        <i class="fa-brands fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
            <div className='fundo-azul'>
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
                        Ver Repositorio
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;