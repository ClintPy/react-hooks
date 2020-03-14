import React from "react";

//routes
import Routes from "./routes";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="fonting">
      <Nav />
      <div className="container">
        <main>
          <Routes />
        </main>
      </div>
    </div>
  );
}

export default App;
