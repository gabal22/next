import { Hero, CarCard, CustomFilter, SearchBar } from "@/components";
import { getCars } from "@/utils";

export default async function Home() {
  const allCars = await getCars()
  const itsEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!itsEmpty ?
          <section>
            <div className="home__cars-wrapper">
              {allCars.map(car => <CarCard />)}
            </div>
          </section>
          :
          <section>Not found cars :( </section>
        }
      </div>
    </main>
  );
}
