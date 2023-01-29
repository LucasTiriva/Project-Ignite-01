import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="../assets/arte.png"
      />

      <div className={styles.profile}>
        <strong>Wilian Santos</strong>
        <span>Motorista da FT Sementes</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
