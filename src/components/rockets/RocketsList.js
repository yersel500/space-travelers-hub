import Rocket from './Rocket';

const rocketData = [{
  id: '1',
  images: '',
  name: 'Falcon 1',
  description: 'Lorem Ipsum',
},
{
  id: '2',
  images: '',
  name: 'Falcon 2',
  description: 'Lorem Ipsum',
},
{
  id: '3',
  flickr_images: '',
  name: 'Falcon 3',
  description: 'Lorem Ipsum',
},
];

const RocketsList = () => {
  const rockets = rocketData.map((rocket) => (<Rocket data={rocket} key={rocket.rocket_id} />));
  return (
    <div>
      {rockets}
    </div>
  );
};

export default RocketsList;
