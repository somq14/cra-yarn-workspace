import { message } from "core";
import { message as packageMessage } from "package";

function App() {
  return (
    <div className="App">
      {message} {packageMessage}
    </div>
  );
}

export default App;
