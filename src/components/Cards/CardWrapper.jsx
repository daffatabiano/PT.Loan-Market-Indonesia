export default function CardWrapper({ children }) {
  return (
    <div className="bg-white p-4 drop-shadow-lg rounded relative h-full">
      {children}
    </div>
  );
}
