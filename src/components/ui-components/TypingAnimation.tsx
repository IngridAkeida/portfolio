const TypingAnimation = ({ text }: { text: string }) => {

  return (
    <div className="w-max">
      <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-4">{text}</h1>
    </div>
  );
};

export default TypingAnimation;