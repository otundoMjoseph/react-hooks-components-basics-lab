import React from "react";
// import  

// function NavBar() {
//   return (
//     <nav>
//       <a href="#home">I'm a link!</a>
//     </nav>
//   );
// }

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}
function NavBar() {
  return (
    <nav>
      <a href="#about">I'm a link!</a>
    </nav>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      {<Home></Home>}
      {/* add your <About> component here */}
        {<About></About>}
    </div>
  );
}

export default App;
