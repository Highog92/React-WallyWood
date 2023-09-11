import { Outlet } from "react-router-dom";
import { Navigation } from '../Components/Navigation/Navigation'
import style from '../Layout/MainLayout.module.scss'
export const MainLayout = () => {

  return (
    <main className={style.layoutStyle}>
      <Navigation />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};
