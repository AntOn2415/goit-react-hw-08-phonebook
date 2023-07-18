import { ProgressBar, ThreeDots, RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ProgressBar
      height="420%"
      width="105%"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{
        position: 'absolute',
        top: -42,
        left: 0,
        borderRadius: '10px',
        zIndex: 1,
      }}
      wrapperClass="progress-bar-wrapper"
      borderColor=""
      barColor="rgb(244, 68, 46, 0.6)"
    />
  );
};

const LoaderThreeDots = () => {
  return (
    <ThreeDots
      height="110%"
      width="60"
      radius="1"
      color="#777"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

const LoaderRotatingLines = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="#fff"
        strokeWidth="5"
        animationDuration="0.75"
        width="60"
        visible={true}
      />
    </div>
  );
};

export { Loader, LoaderThreeDots, LoaderRotatingLines };
