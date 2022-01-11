import './loading-screen.scss';
import { FC } from "react";

const LoadingScreen: FC = () => {
  return (
    <div className="loading-screen">
      <h1 className="loading-text">loading...</h1>
    </div>
  );
};

export default LoadingScreen;