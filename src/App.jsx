import MiApi from './assets/components/MiApi';
import './App.css';

function App() {
  return (
    <>
      <header id="welcome" className="py-5 text-center bg-light">
        <div className="container">
          <h1 className="display-4"><i className="fa-solid fa-earth-americas"></i> Países y Territorios del mundo <i className="fa-solid fa-earth-americas"></i></h1>
          <p className="lead">
          </p>
        </div>
      </header>
      <main id="features" className="py-5">
        <div className="container">
          <div className="row">
            <MiApi />
          </div>
        </div>
      </main>
      <footer className="text-center bg-light text-muted">
        <h6 className="text-uppercase fw-bold mb-4 py-5">
          <i className="fa-solid fa-earth-americas"></i> Países y Territorios del mundo <i className="fa-solid fa-earth-americas"></i>
        </h6>
      </footer>
    </>
  )
}

export default App;
