import Navbar from './components/Navbar';
import Container from './components/Container';
import data from './data';

function App() {
  const items = data.map((item, id) =>{
    return (
      <Container
            key={id}
            img={item.imageUrl}
            location={item.location}
            title={item.title}
            date={item.endDate}
            description={item.description}
            link ={item.googleMapsUrl}
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      <section>
        {items}
      </section>
    </div>
  );
}

export default App;
