import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Landing from "./screens/Landing";
import SearchResults from "./screens/SearchResults";
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/search-results" element={<SearchResults />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
