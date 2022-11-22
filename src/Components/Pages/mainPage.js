import "../../Assets/bootstrap.min.css";
import Cardlist from "../cardlist.js";

console.log(process.env);

const MainPage = () => {
  return (
    <div className="container bg-light border py-4 text-center">
      <h2>Lista med inlägg hämtade från Firebase</h2>
      <Cardlist />
    </div>
  );
};

export default MainPage;
