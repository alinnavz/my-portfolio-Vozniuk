import { Link } from "react-router-dom";
export default function Header({ theme, setTheme }) {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      alignItems: "center"
    }}>
      <h2>Моє портфоліо</h2>

      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/about">Про мене</Link>
        <Link to="/my-city">Моє місто</Link>
        <Link to="/my-future">Майбутнє</Link>
      </nav>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        style={{ padding: "8px 12px" }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}