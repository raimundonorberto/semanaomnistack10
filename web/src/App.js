import React, { useState, useEffect } from 'react';
import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [latitude, setLatidude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatidude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required value={latitude} />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required value={longitude} />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5597774?s=460&v=4" alt="Raimundo Lameira" />
              <div className="user-info">
                <strong>Raimundo Lameira</strong>
                <span>Java, ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor no Tribunal de Justiça do Estado do Pará. Estudando Spring Framework, javascript, node.js e React</p>
            <a href="https://github.com/raimundonorberto">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5597774?s=460&v=4" alt="Raimundo Lameira" />
              <div className="user-info">
                <strong>Raimundo Lameira</strong>
                <span>Java, ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor no Tribunal de Justiça do Estado do Pará. Estudando Spring Framework, javascript, node.js e React</p>
            <a href="https://github.com/raimundonorberto">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5597774?s=460&v=4" alt="Raimundo Lameira" />
              <div className="user-info">
                <strong>Raimundo Lameira</strong>
                <span>Java, ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor no Tribunal de Justiça do Estado do Pará. Estudando Spring Framework, javascript, node.js e React</p>
            <a href="https://github.com/raimundonorberto">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5597774?s=460&v=4" alt="Raimundo Lameira" />
              <div className="user-info">
                <strong>Raimundo Lameira</strong>
                <span>Java, ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor no Tribunal de Justiça do Estado do Pará. Estudando Spring Framework, javascript, node.js e React</p>
            <a href="https://github.com/raimundonorberto">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5597774?s=460&v=4" alt="Raimundo Lameira" />
              <div className="user-info">
                <strong>Raimundo Lameira</strong>
                <span>Java, ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor no Tribunal de Justiça do Estado do Pará. Estudando Spring Framework, javascript, node.js e React</p>
            <a href="https://github.com/raimundonorberto">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
