"use client"
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';

const Page = () => {
  return (      
    <div className={`bg-[#cededc] font-amaranth text-cyan-900 dark:bg-cyan-900 dark:text-gray-100 transition-colors duration-500 ${'dark'} md:p-0 flex flex-col mx-auto lg:max-w-7xl`}>
      <Header />
      <Main />
      <Footer />

      
    </div>
  );
};

export default Page;
