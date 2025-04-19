function AppLayout({ children }) {
  return (
    <div className=" bg-amber-200 grid grid-rows-[auto_1fr] h-dvh">
      {children}
    </div>
  );
}

export default AppLayout;
