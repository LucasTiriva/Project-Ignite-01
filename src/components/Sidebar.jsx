import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://scontent.fbfh17-1.fna.fbcdn.net/v/t1.6435-9/167432636_2787929361472874_5020091861625662252_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wD73QXQZBQ0AX9j9iTi&_nc_ht=scontent.fbfh17-1.fna&oh=00_AfAasqasTkfQtxPTJWmEH2drkYDllXtaJgYc5YR_r4nAXA&oe=640211FE"
        />
        <strong>Wilian Santos</strong>
        <span>Motorista da FT Sementes</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
