/** @format */

import "./App.css";
import Sidebar from "./pages/sidebar";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className='App'>
      <div className='app_body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
