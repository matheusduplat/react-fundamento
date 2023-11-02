import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { SideBar } from "./components/SideBar";
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post author="Matheus" content="ola mundo" />
          <Post author="Alexia" content="ola mundo 2" />
        </main>
      </div>
    </>
  );
}
