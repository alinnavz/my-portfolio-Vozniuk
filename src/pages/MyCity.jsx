import { useEffect, useState } from "react";
import styles from "../styles/App.module.css";

export default function MyCity() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=d336c011b53f4908947141544261105&q=Kyiv&lang=uk"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Завантаження погоди...</h2>;
  }

  return (
    <div className={styles.cityPage}>
      <h1>Моє місто - Київ</h1>

      {/* 👇 ФОТО МІСТА */}
      <img
        src="/kyiv.jpg"
        alt="Київ"
        className={styles.cityImage}
      />

      <div className={styles.card}>
        <h2>Про місто</h2>
        <p>
          Київ - столиця України, одне з найстаріших і найкрасивіших міст Європи.
          Тут поєднується історія, сучасність і технологічний розвиток.
        </p>
      </div>

      <div className={styles.weatherCard}>
        <h2>Поточна погода</h2>

        <p><b>Місто:</b> {data.location.name}</p>
        <p><b>Країна:</b> {data.location.country}</p>

        <p className={styles.temp}>
          {data.current.temp_c}°C
        </p>

        <p>{data.current.condition.text}</p>

        <p>
          Координати: {data.location.lat}, {data.location.lon}
        </p>
      </div>
    </div>
  );
}