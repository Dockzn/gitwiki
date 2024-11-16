import "./style.css"

// eslint-disable-next-line react/prop-types
function Button({onClick}) {
  return (
    <div>
        <button onClick={onClick}>Buscar</button>
        </div>
  )
}

export default Button