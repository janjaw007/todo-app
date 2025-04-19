function Main({ children }) {
  return (
    <div className="overflow-hidden max-w-96 md:max-w-xl w-dvw mx-auto flex flex-col gap-y-1">
      {children}
    </div>
  );
}

export default Main;
