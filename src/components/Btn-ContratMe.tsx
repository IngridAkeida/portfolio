const BtnContratMe: React.FC = () => {
  return (
    <button className="animate-wiggle animate-fill-forwards animate-infinite bg-cyan-950 hover:bg-cyan-700 text-gray-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      onClick={() => window.open("mailto:ingridsanchesp@gmail.com", "_blank")}>
      Email Me 📧
    </button>
  );
};

export default BtnContratMe;