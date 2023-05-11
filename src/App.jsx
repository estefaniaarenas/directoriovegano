import restaurants from './data/restaurants.json'
import { Card } from './components';
import { Modal } from './components';
import { useState } from 'react';

export default function App() {
  const [clickRestaurant, setClickRestaurant] = useState(null)

  return (
    <div>
      <h1>Restaurantes</h1>
      <div className="list">
        {restaurants.map((restaurant,i) => (
          <Card key={i} restaurant={restaurant} modal={setClickRestaurant} />
        ))}

      </div>
      <Modal dataModal={clickRestaurant} cerrarModal={setClickRestaurant} />
    </div>
  )
}


