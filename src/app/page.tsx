"use client"
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';


interface AppProps {
  darkMode: boolean;
}

const App: React.FC<AppProps> = ({ darkMode })  => {
  return (      
    <div className={`bg-[#E9D7CC] font-amaranth text-cyan-900 dark:bg-cyan-900 dark:text-gray-100 transition-colors duration-500 ${darkMode && 'dark'} md:p-0 flex flex-col mx-auto lg:max-w-7xl`}>
      <Header />
      <Main />
      <Footer />

      
    </div>
  );
};

export default App;
