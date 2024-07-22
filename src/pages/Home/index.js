import './home.scss';

function Home() {
    return (
        <div className="main">
            <div className='inicio'>
                <div className='perfil-img'>
                    <img src='/RyanGripp/img/foto.jpg' alt='' />
                </div>
                <div className='apresentacao'>
                    <h2>Ryan Gripp da Silva</h2>
                    <p>Olá, sou um desenvolvedor web com formação em Técnico em Informática pelo CEFET/RJ e atualmente estou
                        cursando Bacharelado em Sistemas de Informação, também no CEFET/RJ.
                    </p>
                    <p>Com mais de 6 anos de experiência na área de desenvolvimento de software, possuo habilidades que incluem
                        HTML, CSS, JavaScript, PHP, React, SQL, Node.js, Java, C e C++, além de conhecimentos básicos em Vtex e
                        Wordpress.
                    </p>
                    <p>Estou sempre em busca de aprimorar minhas habilidades e acompanhar as últimas tendências tecnológicas
                        para garantir que meu trabalho esteja sempre alinhado com os mais altos padrões da indústria.
                    </p>
                </div>
                <div className='contato'>
                    <a target='blank' href='https://www.linkedin.com/in/ryan-gripp-da-silva-b430142b8/' className='linkedin'>
                        <i class="fa-brands fa-linkedin"></i>
                        <span>Linkedin</span>
                    </a>
                    <a target='blank' href='https://github.com/RyanGripp' className='github'>
                        <i class="fa-brands fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
            <div className='projetos'>
                <h2 className='titulo'>Projetos</h2>
                <div className='projetos-container'>
                    <div className='projeto-card'>
                        <img src='/RyanGripp/img/projeto-filmes.png' alt='' />
                        <h3>Projeto de filmes utilizando ReactJS</h3>
                        <p>
                            Este projeto exibe uma seleção de filmes atualmente em catálogo,
                            fornecendo uma variedade de informações sobre cada filme. Esses dados
                            foram obtidos através de uma API disponível em: <a target='blank'
                                rel='external' href='https://api.themoviedb.org/'>https://api.themoviedb.org/</a>.
                            O projeto permite aos usuários buscar os filmes através da barra de pesquisa,
                            acessar páginas individuais para cada filme e adicionar e remover dos favoritos,
                            que são armazenados localmente utilizando o LocalStorage do navegador.
                        </p>
                        <a className='ver-projeto' target='blank' rel='external' href='https://ryangripp-filmes.netlify.app/'>
                            Ver Projeto
                        </a>
                        <a className='ver-repositorio' target='blank' rel='external' href='https://github.com/RyanGripp/Api-Filmes'>
                            Ver Repositório
                        </a>
                    </div>

                    <div className='projeto-card'>
                        <img src='/RyanGripp/img/projeto-cadastra.png' alt='' />
                        <h3>Projeto de Loja de Roupas</h3>
                        <p>
                            Este projeto consiste em um teste que eu fiz para uma vaga de desenvolvedor front-end na empresa Cadastra,
                            onde eu tive que desenvolver uma loja de roupas utilizando TypeScript, HTML e CSS, sendo totalmente 
                            responsivo para cada tamanho de tela. O projeto mostra as roupas disponíveis e permite ao usuário 
                            ordená-las por preço e data, filtrar por cor, tamanho e preço, que são pegos dinamicamente de todos 
                            os produtos do banco de dados, além de permitir adicionar e remover do carrinho.
                        </p>
                        <a className='ver-projeto' target='blank' rel='external' href='https://ryangripp-cadastra.netlify.app/'>
                            Ver Projeto
                        </a>
                        <a className='ver-repositorio' target='blank' rel='external' href='https://github.com/RyanGripp/desenvolvedor-cadastra'>
                            Ver Repositório
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;