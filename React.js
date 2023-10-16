import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Welcome to My App</h1>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
};

const Content = () => {
  return (
    <main>
      <h2>About</h2>
      <p>This is a sample React.js application.</p>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>© 2023 My App. All rights reserved.</p>
    </footer>
  );
};

// Combine the components to create the final UI
const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
