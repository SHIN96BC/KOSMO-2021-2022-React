import AxiosGet from "./components/AxiosGet";
import AxiosPost from "./components/AxiosPost";
import AxiosDelete from "./components/AxiosDelete";
import FetchGet from "./components/FetchGet";
import FetchPost from "./components/FetchPost";
import FetchDelete from "./components/FetchDelete";

function App() {
  return (
    <div className="App">
      {/* 안녕 스프링! */}
      {/* <AxiosGet/> */}
      {/* <AxiosPost/> */}
      {/* <AxiosDelete/> */}
      {/* <FetchGet/> */}
      {/* <FetchPost/> */}
      <FetchDelete/>
    </div>
  );
}
// http://127.0.0.1:8080/rest_addr/create.json
export default App;
