import Bannar from "./components/Bannar/Bannar";
import NavBar from "./components/NavBar/NavBar";
import OurRecipes from "./components/OurRecipes/OurRecipes";

function App() {
  return (
    <div className="px-10">
      <header>
        <nav>
          <NavBar />
        </nav>
        <section>
          <Bannar />
        </section>
      </header>
      <main className="mt-24">
        <section>
          <OurRecipes />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
