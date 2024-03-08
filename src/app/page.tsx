import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';

const App = () => {
  return (      
    <div className='bg-[#cededc] text-cyan-900 dark:bg-cyan-900 dark:text-gray-100 font-amaranth transition-colors duration-500 flex flex-col mx-auto md:p-0 lg:max-w-7xl'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
