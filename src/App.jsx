import './App.css'
import EstadiosCard from './EstadiosCard';

const estadios = [
  { nombre: 'Camp Nou', equipo: 'FC Barcelona' , foto: 'https://www.fcbarcelona.com/photo-resources/2021/08/09/276ad270-e5c6-453d-8d9f-212417ad7cb3/Camp-Nou-3.jpg?width=1200&height=750'},
  { nombre: 'Santiago Bernabeu', equipo: 'Real Madrid CF' , foto:'https://media.cntraveler.com/photos/5e66a338b93f0800081a6f28/16:9/w_2560,c_limit/santiago-bernabe%CC%81u-stadium-madrid-2020-GettyImages-1194733745.jpg' },
  { nombre: 'Stamford Bridge', equipo: 'Chelsea Football Club' , foto:'https://www.thesun.co.uk/wp-content/uploads/2023/03/2023-general-view-inside-stadium-804206041.jpg' },
  { nombre: 'Doroteo Guamuch Flores', equipo: 'Seleccion de Guatemala' , foto:'https://cdn.republica.gt/082022/1661972638002.webp?cw=698&ch=500&extw=jpg' }
];

function App() {

  {/*const [listaEstadios, setListaEstadio] = useState([]);*/}

  return (
      <div className='contenedor'>
            {estadios.map((el, i) => {
              return <EstadiosCard key={i} nombre={el.nombre} equipo={el.equipo} foto={el.foto}> </EstadiosCard>;
            })}
      </div>
  )
}

export default App
