import "./Colaborador.css"

const Colaborador = (props) => {
    return <div className="colaborador">
        <div className="encabezado">
            <img src={props.imagen} alt="Harland"/>
            
         </div>
         <div className="info">
            <h4>Harland Lohora</h4>
            <h5>Instructor</h5>

         </div>

    </div>
}


export default Colaborador