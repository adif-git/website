export default function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto w-full px-5 py-16 md:p-16">
      {children}
    </div>
  );
}
