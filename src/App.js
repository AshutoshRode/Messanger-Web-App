
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Join from "./component/Join/Join.js"
import Chat from "./component/Chat/Chat.js"
const ENDPOINT = "http://localhost:4500/";

function App() {

  return (
    <div >

      <Router>
        <Routes>
          <Route exact path="/" Component={Join} />
          <Route path="/chat" Component={Chat} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
