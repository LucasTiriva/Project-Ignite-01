import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            clasName={styles.avatar}
            src="https://scontent.fbfh17-1.fna.fbcdn.net/v/t1.6435-9/167432636_2787929361472874_5020091861625662252_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wD73QXQZBQ0AX9j9iTi&_nc_ht=scontent.fbfh17-1.fna&oh=00_AfAasqasTkfQtxPTJWmEH2drkYDllXtaJgYc5YR_r4nAXA&oe=640211FE"
          />
          <div clasName={styles.authorInfo}>
            <strong>Lucas Viana</strong>
            <span>Wed Developer</span>
          </div>
        </div>

        <time title="04 de fevereiro as 20:04h" dateTime="2022-02-04 20:04:20">
          Publicado há 1h
        </time>
      </header>
      <div clasName={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}
