import { useRive } from 'rive-react';
import PropTypes  from 'prop-types';

const Rive = props =>{
  const params = {
    src: props.Animation,
    useDevicePixelRatio:true,
    autoplay: true,
  };
  const { RiveComponent, rive } = useRive(params);

  return (
    <RiveComponent
      style={{height:"1024px",width:"1024px"}}
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}

Rive.propTypes = {
  Animation: PropTypes.string,
};

export default Rive;