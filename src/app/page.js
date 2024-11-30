import CardList from '@/components/client/cardlist/CardList';
import CategoryList from '@/components/client/categorylist/CategoryList';
import Feature from '@/components/client/feature/Feature';
import Menu from '@/components/client/menu/Menu';

const Home = () => {
  return (
    <>
      {/* HERO-SECTION */}
      <section className='hero'>
        <div className='container'>
          <h1>Hero Section</h1>
          <Feature />
        </div>
      </section>

      {/* CATEGORY-LIST */}
      <section>
        <div className='container'>
          <CategoryList />
        </div>
      </section>

      <section className=''>
        <div className='container'>
          {/* CARDLIST */}
          <CardList />
          <Menu />
        </div>
      </section>
    </>
  );
};

export default Home;
