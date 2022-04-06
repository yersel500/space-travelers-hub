import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, rocketsData } from '../../redux/rockets/RocketsReducer';
import Rocket from './Rocket';

const Rockets = () => {
  const rocketStore = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      if (rocketStore.length === 0) {
        const api = await getRockets();
        dispatch(rocketsData(api));
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {rocketStore.map((rocket) => (
        <Rocket
          name={rocket.name}
          description={rocket.description}
          key={rocket.id}
          id={rocket.id}
          image={rocket.image}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

const RocketsList = () => (
  <div>
    <Rockets />
  </div>
);

export default RocketsList;
