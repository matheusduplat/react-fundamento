import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";
export function SideBar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={styles.cover}
        />
        <div className={styles.profile}>
          <img
            src="https://avatars.githubusercontent.com/u/47994682?v=4"
            alt=""
            className={styles.avatar}
          />
          <strong>Matheus Duplat</strong>
          <span>Wev Developers</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
