import { useSelector } from 'react-redux';

const Rockets = () => {
  const myState2 = useSelector((state) => state);
  console.log(myState2);
  return (
    <div>Rockets page</div>
  );
};

export default Rockets;
