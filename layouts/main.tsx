// UNUSED AT THE MOMENT

export default function Layout({
  children,
  fullscreen = false,
}: {
  children?: React.ReactNode;
  fullscreen?: boolean;
}) {
  // const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: fullscreen ? "100vh" : "auto",
        // backgroundColor: 'yellow',
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: 400,
          // backgroundColor: 'springgreen',
          // comment here for later use
        }}
      >
        {children}
      </div>
    </div>
  );
}

// export default Layout;
