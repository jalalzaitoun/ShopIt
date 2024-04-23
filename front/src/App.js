import Headers from "./component/Layout/Header";
import Footer from "./component/Layout/footer";

import { Toaster } from "react-hot-toast";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useUserRoutes from "./component/routes/userRoutes";
import useAdminRoutes from "./component/routes/adminRoutes";
import NotFound from "./component/Layout/NotFound";

function App() {
  const userRoutes = useUserRoutes();
  const adminRoutes = useAdminRoutes();
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center"></Toaster>
        <Headers />

        <div className="container">
          <Routes>
            {userRoutes} {adminRoutes}
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
