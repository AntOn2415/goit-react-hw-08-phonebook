import { ProgressBar, ThreeDots, RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ProgressBar
      ariaLabel="progress-bar-loading"
      wrapperStyle={{
        position: 'absolute',
        top: -27,
        left: -4,
        borderRadius: '0px',
        zIndex: 10,
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
      height="20"
      width="60"
      radius="1"
      color="#27ae60"
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
        strokeColor="#27ae60"
        strokeWidth="5"
        animationDuration="0.75"
        width="60"
        visible={true}
      />
    </div>
  );
};

const LoaderForLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <RotatingLines
        strokeColor="#27ae60"
        strokeWidth="5"
        animationDuration="0.75"
        width="60"
        visible={true}
      />
    </div>
  );
};

export { Loader, LoaderThreeDots, LoaderRotatingLines, LoaderForLayout };
