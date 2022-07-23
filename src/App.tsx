import { BrowserRouter } from "react-router-dom";
import Navigation from "routes/Navigation";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
