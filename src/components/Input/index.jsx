import "./style.css";

// eslint-disable-next-line react/prop-types
function Input({value, onChange}) {
  return (

    <div className="input-container">
      <input placeholder="Digite o nome de usúario do Github"value={value} onChange={onChange}/>
      </div>

  )
}

export default Input;