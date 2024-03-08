'use client'

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';

const save ='bg-[#cededc] text-cyan-900 dark:bg-cyan-900 dark:text-gray-100'

const App = () => {
  return (      
    <div className=' bg-blue-700 md:bg-blue-500 xl:bg-blue-200 text-black font-amaranth transition-colors duration-500 flex flex-col mx-auto md:p-0 lg:max-w-7xl'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
