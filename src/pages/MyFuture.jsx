import styles from "../styles/App.module.css";

export default function MyFuture() {
  return (
    <div className={styles.futurePage}>
      <h1>Мій розвиток</h1>

      <section className={styles.card}>
        <h2>Робота мрії</h2>
        <p>
          Я бачу себе як Backend або Fullstack розробницю, яка створює
          надійні, швидкі та масштабовані веб-додатки.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Мої 3 кроки</h2>

        <ul>
          <li>📌 Вивчити Python та писати чистий код</li>
          <li>📌 Освоїти SQL та роботу з базами даних</li>
          <li>📌 Створити реальні backend-проєкти</li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>Мій напрям</h2>
        <p>
          Backend-розробка, тому що мені цікаво, як працює логіка сайтів і API.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Мотивація</h2>
        <p>
          “Головне - не швидкість, а постійний рух вперед.”
        </p>
      </section>
    </div>
  );
}