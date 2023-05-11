export const Card = ({ restaurant,modal }) => {
    return (
        <div className="card" key={restaurant.name}>
            <div className="image">
                <img src={`src/assets/images/${restaurant.image}`} alt="hola" />
                <p className="sub">{restaurant.type}</p>
            </div>


            <div className="title">
                <h2>{restaurant.name}</h2>
                <hr />
            </div>
            <div className="card_text">
                <span>{restaurant.address.map(branch => <p>{branch.street}</p>)}</span>
                <span>{restaurant.address[0].city}</span><br />
                <span>{restaurant.phoneNumbers.map((phone, i) => `${phone} ${restaurant.phoneNumbers.length > i + 1 ? ' - ' : ''}`)}</span>
                {/* <span>{restaurant.serviceType}</span> */}
                
            </div>
            
            <button onClick={()=>modal(restaurant)}>Leer más</button> 
          


        </div >

    );
}
