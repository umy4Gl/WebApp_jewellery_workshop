import NavBar from "./components/NavBar";
import MainPage from "./pages/Main_page";
import CatalogJew from "./pages/Catalog_jew";
import CatalogComp from "./pages/Catalog_comp"; 
import Auth from "./pages/Auth";
import Constructor from "./pages/Сonstructor";


function App() {
  return (
    <div>
      <NavBar />
      <main>
      {/* <MainPage />  */}
      {/* <CatalogJew/> */}
      {/* <CatalogComp /> */}
      {/* <Auth /> */}
      <Constructor />
      </main>
    </div>
  );
}

export default App;
