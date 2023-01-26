import { Header } from "./components/Header";
import { Post } from "./post";

import './global.css';

export function App() {
  return (
    <div>

      <Header />
      
      <Post
        author="Lucas Viana"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi!"
      />
      <Post 
        author="Wilha boca berta"
        content="Moscando de num compra um mine pra mim"
      />
    </div>
  );
}
