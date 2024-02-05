import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import bagsPng from '../assets/bags.png';
import BagsSvg from '../assets/bags.svg';
import sonomaJpg from '../assets/Sonoma.jpg';
import chromaWebp from '../assets/Chroma.webp';

type Props = {
  msg: string;
};

export const App = ({ msg }: Props) => {
  // if (__PLATFORM__ === 'desktop') {
  //   return <div>IS DESKTOP PLATFORM</div>;
  // }
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>IS MOBILE PLATFORM</div>;
  // }

  return (
    <main data-testId={'App'} className={classes.paddingContainer}>
      <p data-testId={'Platform'}>Platform - {__PLATFORM__}</p>
      <div>
        <img src={bagsPng} alt="bags-png" width={50} height={50} />
        {/* <img src={bagsSvg} alt="bags-svg" width={50} height={50} /> */}
        <BagsSvg width="50" height="50" stroke="blue" />
        <img src={sonomaJpg} alt="sonomaJpg" width={50} height={50} />
        <img src={chromaWebp} alt="chromaWebp" width={50} height={50} />
      </div>
      <h1 className={classes.h1}>Hello World !!</h1>
      <div>msg:{msg}</div>
      <div
        style={{ display: 'flex', gap: '1em', padding: '1em', fontSize: '2em' }}
      >
        <Link to="/about" style={{ color: 'green' }}>
          about
        </Link>
        <Link to="/shop">shop</Link>
      </div>

      <Outlet />
    </main>
  );
};
