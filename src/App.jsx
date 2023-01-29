import { Header } from "./components/Header";
import { Post } from "./post";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Viana"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi!"
          />
          <Post
            author="Wilha boca berta"
            content="Moscando de num compra um mine pra mim"
          />
        </main>
      </div>
    </div>
  );
}
