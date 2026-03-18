import { useEffect, useState } from "react";

function App() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchFact = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
      const data = await res.json();

      setFact(data.text);
    } catch (error) {
      setFact("⚠️ Failed to load fact. Try again.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="app">
      <h1>🎲 Random Fun Fact</h1>

      <div className="card">
        {loading ? (
          <p>⏳ Loading fun fact...</p>
        ) : (
          <h3>{fact}</h3>
        )}

        <button onClick={fetchFact}>
          🔄 Get Another Fact
        </button>
      </div>
    </div>
  );
}

export default App;