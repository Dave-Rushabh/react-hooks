import { useRef } from "react";
import Header from "./components/Header";
import PLP from "./components/PLP";

function App() {
  const appRef = useRef<{
    resetFilter: () => void;
    resetSort: () => void;
  } | null>(null);

  return (
    <>
      <Header
        title="Clothing > New Arrivals > For Her"
        btnText={"Clear all filters and sort"}
        onClick={() => {
          appRef.current?.resetFilter();
          appRef.current?.resetSort();
        }}
      />
      <PLP ref={appRef} />
    </>
  );
}

export default App;
