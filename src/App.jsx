import restaurants from './data/restaurants.json'
import { Card } from './components';
import { Modal } from './components';
import { useState } from 'react';

export default function App() {

  const [clickRestaurant, setClickRestaurant] = useState(null)


  return (
    <div>
      <div className="list">
        <h1>Restaurantes</h1>
        {restaurants.map((restaurant) => (
          <Card restaurant={restaurant} modal={setClickRestaurant} />
        ))}

      </div>
      <Modal dataModal={clickRestaurant} cerrarModal={setClickRestaurant} />
    </div>
  )
}


