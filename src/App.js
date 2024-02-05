import './App.css';
import {Testimonio} from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Go-Tōbun no Hanayome</h1>
      <Testimonio
      nombre='Ichika Nakano'
      cargo='Ella '
      numero='número 1'
      testimonio='Es la primera hermana de las quintillizas Nakano. A pesar de la insignificante diferencia de edad entre ellas, ella asumió el papel de la hermana mayor de manera adecuada, ya que es lo suficientemente confiable como para actuar con confianza y ser una líder. Ella aspira a convertirse en actriz.'
      imagen='ichika' />
      <Testimonio
      nombre='Nino Nakano'
      cargo='Ella'
      numero='Número 2'
      testimonio='Es la segunda hermana de las quintillizas Nakano. Por lo general, actúa como la madre de la familia, cocina para ellas y se ocupa de sus necesidades médicas. Entre las cinco hermanas, ella es la que tiene la mayor hostilidad hacia Fuutarou Uesugi y a menudo se rebela contra él al principio de la serie.'
      imagen='nino'
      />
      <Testimonio
      nombre='Miku Nakano'
      cargo='Ella'
      numero='Número 3'
      testimonio='Es la tercera hermana de las quintillizas Nakano. Debido a la influencia de Fuutarou, ella es la primera de las hermanas en entablar amistad con él.'
      imagen='miku'
      />
      <Testimonio
      nombre='Yotsuba Nakano'
      cargo='Ella'
      numero='Número 4'
      testimonio='Es la cuarta hermana de las quintillizas Nakano. Ella tiene una personalidad brillante y alegre. Yotsuba es la única hermana que acepta a Fuutarou desde el principio y lo apoya de todo corazón en todo.'
      imagen='yotsuba'
      />
      <Testimonio
      nombre='Itsuki Nakano'
      cargo='Ella'
      numero='Número 5'
      testimonio='Es la quinta hermana de las quintillizas Nakano. Itsuki es seria y diligente, como también es glotona y llorona. Entre las quintillizas, Itsuki es la mas familiarizada con los miembros y la situación de la familia Uesugi.'
      imagen='itsuki'
      />
      </div>
    </div>
  );
}

export default App;
