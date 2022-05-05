import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Landing from "./screens/Landing";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
