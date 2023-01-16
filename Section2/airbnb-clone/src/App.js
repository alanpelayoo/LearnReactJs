import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';


function App() {
  const cards = data.map(item => {
      return (
          <Card 
              key={item.id}
              image={item.coverImg}
              rating={item.stats.rating}
              reviewcount={item.stats.reviewCount}
              country={item.location}
              title={item.title}
              price={item.price}
              openSpots = {item.openSpots}
              /// that equals {...item} whis is not equal to item = {item}
          />
      )
  }) 
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <section className='cards-list'>
        {cards}
      </section>

    </div>
  );
}

export default App;
