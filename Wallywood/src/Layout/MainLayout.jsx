import { Outlet } from "react-router-dom";
import { Navigation } from '../Components/Navigation/Navigation'
import style from '../Layout/MainLayout.module.scss'
import { Footer } from "../Components/Footer/Footer";

export const MainLayout = () => {

  return (
    <main className={style.layoutStyle}>
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
};
