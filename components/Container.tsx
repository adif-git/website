const Container: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto w-full px-5 py-10 md:p-16">
      {children}
    </div>
  );
};

export default Container;
