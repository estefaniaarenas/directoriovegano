
export const Modal = ({ dataModal, cerrarModal }) => {
    if (!dataModal) return null
    return (
        <div className="modalMask">
            <div className="modalBox">
                <div className="contenidoModal">
                    <h3>{dataModal.name}</h3>
                    <p>Horario</p>
                    <span>{dataModal.schedules.map(schedule => (<div>
                        <ul>
                            <li>{schedule.days.map((day, i) => `${day} ${schedule.days.length > i + 1 ? ' - ' : ''}`)}</li>
                            <li>{schedule.opening}</li>
                            <li>{schedule.closing}</li>

                        </ul>
                    </div>))}</span>
                    < button onClick={() => cerrarModal(null)}>X</button>

                    <p>Tipo de servicio</p>
                    <ul>
                        {Object.keys(dataModal.serviceType).map(service => dataModal.serviceType[service] && <li>{service}</li>)}
                    </ul>
                    <p>Calificación según google</p>
                    <p>{dataModal.googleScore}</p>

                </div>
            </div>

        </div>
    )
}


