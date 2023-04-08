import "./MiOrg.css"
import { useState } from "react"


const MiOrg = (props) => {
   console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", mostrar)
    //     actualizarMostrar(!mostrar)
    // }
    return <section className="orgSection">
        <h3 className="title">Mi organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostar} />
    </section>
}

export default MiOrg