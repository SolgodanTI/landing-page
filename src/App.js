
import './App.css';
import Card from './Components/Card.js';
import TipoServ from './Components/TipoServ.js';


function App() {
  return (
    <div className='App'>
      <TipoServ />

      <h1 className="header-dirigido">Dirigido a:</h1>

      <div classname='msg-solicitarCotizacion'>
        <p >Todos nuestros clientes pueden solicitar una cotización on-line, tambien pueden solicitar una visita para realizar un diagnóstico y/o levantamiento de cotización</p>
      </div>
      <div className='cards-container'>

        <Card
          title='Gerentes de Mantenimiento'
          photo='04'
          msg='Mantenimiento y restauración con Garantía de Sistemas existentes, programas de mantenimiento preventivo vs. reactivo, Experiencia en colocación estratégica de camaras.'
        />
        <Card
          title='Empresas con equipo CCTV'
          photo='02'
          msg='CCTV para plantas industriales, equipos de Gama media y alta, Certificaciones necesarias incluyendo REPSE, cobertura a nivel nacional, Atención cuidadosa a los sistemas de grabación'
        />
        <Card
          title='Empresas que esten evaluando CCTV'
          photo='03'
          msg='Especialistas en CCTV para plantas industrialesTrabajos sin anticipo, precios competitivos, proyectos de cualquier tamaño, Poliza para tener todo al 100% todo el tiempo'
        />
      </div>
    </div>
  );
}

export default App;
