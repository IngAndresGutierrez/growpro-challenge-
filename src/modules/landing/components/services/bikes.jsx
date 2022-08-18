import Antigua1 from '../../../../assets/bikes/antiguas/1.jpeg'
import Antigua2 from '../../../../assets/bikes/antiguas/2.jpeg'
import Antigua3 from '../../../../assets/bikes/antiguas/3.jpeg'

import Normales1 from '../../../../assets/bikes/normales/1.jpeg'
import Normales2 from '../../../../assets/bikes/normales/2.jpeg'
import Normales3 from '../../../../assets/bikes/normales/3.jpeg'

import Electrica1 from '../../../../assets/bikes/electricas/1.jpeg'
import Electrica2 from '../../../../assets/bikes/electricas/2.jpeg'
import Electrica3 from '../../../../assets/bikes/electricas/3.jpeg'

const MOCK_BIKES_LIST = [
  {
    category: 'Eléctricas',
    bikes: [
      {
        id: 1,
        name: 'Hot Road Bike',
        image: Electrica1,
      },
      {
        id: 2,
        name: 'Predator Pro',
        image: Electrica2,
      },
      {
        id: 3,
        name: 'Full Carbon Fiber',
        image: Electrica3,
      },
    ],
  },
  {
    category: 'Normales',
    bikes: [
      { id: 4, name: 'Road Bike', image: Normales1 },
      { id: 5, name: 'Pro', image: Normales2 },
      { id: 6, name: 'Carbon Fiber', image: Normales3 },
    ],
  },
  {
    category: 'Antiguas',
    bikes: [
      { id: 7, name: 'Hot Bike', image: Antigua1 },
      { id: 8, name: 'Predator', image: Antigua2 },
      { id: 9, name: 'Monareta', image: Antigua3 },
    ],
  },
]

export const getBikesService = () => {
  return MOCK_BIKES_LIST
}
