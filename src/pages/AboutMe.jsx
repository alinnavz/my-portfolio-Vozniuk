import styles from "../styles/AboutMe.module.css";
import photo from "../assets/alina.jpg";

export default function AboutMe() {
  return (
    <div className={styles.container}>

      {/* 👇 БЛОК З ФОТО */}
      <div className={styles.header}>
        <img src={photo} alt="Alina" className={styles.photo} />

        <div>
          <h1 className={styles.title}>Про мене</h1>
          <p>
            Мене звати Аліна. Я студентка спеціальності "Комп’ютерні науки" у НУБіП.
            Я тільки починаю свій шлях у програмуванні та рухаюсь у напрямку Python.
          </p>

          <p>
            Я цілеспрямована, допитлива і люблю розбиратися, як працюють системи.
            Мене мотивує створення корисних і красивих цифрових продуктів.
          </p>
        </div>
      </div>

      {/* 💡 ЦІННОСТІ */}
      <section className={styles.card}>
        <h2>Мої цінності</h2>
        <ul>
          <li>✔ Постійне навчання</li>
          <li>✔ Практика важливіша за теорію</li>
          <li>✔ Розвиток щодня</li>
        </ul>
      </section>

      {/* 💼 ПРОЄКТИ */}
      <section className={styles.card}>
        <h2>Мої проєкти</h2>

        <div className={styles.projects}>
          <div>
            <h3>HTML + CSS</h3>
            <a href="https://github.com/alinnavz/html-css-landing" target="_blank">
              Landing Page
            </a>
          </div>

          <div>
            <h3>JavaScript</h3>
            <a href="https://github.com/alinnavz/js-arrayMoreMethods-Vozniuk" target="_blank">
              Array Methods
            </a>
          </div>

          <div>
            <h3>React</h3>
            <a href="https://github.com/alinnavz/color-app-Vozniuk" target="_blank">
              Color App
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}