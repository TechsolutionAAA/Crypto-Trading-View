import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from "react"

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App bg-[#ff9d00]">
      <Header setShow={setShow} />
      <Content />
      <Footer />
      {show ?
        <div className="navbar1 absolute top-[30%] min-w-[200px] right-0">
          <ul className="text-white">
            <li>Home</li>
            <li>Indicators</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAG</li>
          </ul>
        </div>
        : <></>
      }
    </div>
  );
}

export default App;
