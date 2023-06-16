import './App.css'

export default function EstadiosCard(props) {
  return (
    <div className="tarjetaEmpleado">
      <div className="nombre">
        <h1>{props.nombre}</h1>
      </div>
      <div className="cargo">
        <h2>{props.equipo}</h2>
      </div>
      <div className="foto">
        <div className="contenedorFoto">
          <img src={props.foto} alt="Stadium picture" />
        </div>
      </div>
    </div>
  );
}
