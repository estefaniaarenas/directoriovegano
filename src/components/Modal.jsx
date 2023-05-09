
import { MapComponent } from "./MapComponent"
import { SocialButton } from "./SocialButton"

export const Modal = ({ dataModal, cerrarModal }) => {
    if (!dataModal) return null
    return (
        <div className="modalMask">
            <div className="modalBox">
                <div className="contenidoModal">

                    <div style={{ height: '200px', width: '100%' }}>

                        <MapComponent />
                    </div>
                    <div className="header">
                        <img src={`src/assets/images/${dataModal.image}`} alt="hola" />
                        <h3>{dataModal.name}</h3>
                    </div>
                    <h4>Horario</h4>
                    <hr></hr>
                    <span>{dataModal.schedules.map(schedule => (<div>
                        <p>{schedule.days.map((day, i) => `${day} ${schedule.days.length > i + 1 ? ' - ' : ''}`)}</p>
                        <ul>
                            <li>Apertura: {schedule.opening}</li>
                            <li>Cierre: {schedule.closing}</li>
                        </ul>

                    </div>))}</span>
                    < button onClick={() => cerrarModal(null)}>X</button>

                    <h4>Tipo de servicio</h4>
                    <hr></hr>
                    <ul>
                        {Object.keys(dataModal.serviceType).map(service => dataModal.serviceType[service] && <li>{service}</li>)}
                    </ul>
                    <h4>Calificación según google</h4>
                    <hr></hr>
                    <p>{dataModal.googleScore}</p>
                    <div className="iconosRedes">{dataModal.socialNetworks.map(({ channel, url }) => <SocialButton url={url} channel={channel} />)}</div>
                </div>
            </div>

        </div>
    )
}


