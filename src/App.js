import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Landing from "./screens/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
