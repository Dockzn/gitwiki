import "./style.css"

function Repos({repo}) {
  return (
    <div className="Repos">
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <a href={repo.html_url} target="_blank">Ver Repositório</a> <br/>
        <a href="#" className="Remover">Remover</a>
        <hr/>
    </div>
  )
}

export default Repos