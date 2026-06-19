import { useNavigate } from "react-router-dom"
import "./Home.css"


function Home() {
    const navigate = useNavigate()

  return (
    <main className="home">


      <section className="about">
  <div className="about__container">

    <h2>Кто мы?</h2>

    <p className="about__text">
      <span>«Чип и Дейл»</span> — команда, которая создаёт
      путешествия по самым красивым местам Кыргызстана.
    </p>

    <div className="about__grid">

      <div className="about__card">
        <h3>🌄 Природа</h3>
        <p>Горы, озёра, долины и дикие маршруты.</p>
      </div>

      <div className="about__card">
        <h3>🧭 Опыт</h3>
        <p>Организуем туры и экспедиции по всему Кыргызстану.</p>
      </div>

      <div className="about__card">
        <h3>🤝 Атмосфера</h3>
        <p>Безопасные поездки с комфортом и поддержкой.</p>
      </div>

    </div>

    <p className="about__desc">
      Мы помогаем увидеть настоящую природу Кыргызстана,
      почувствовать свободу и получить эмоции, которые остаются надолго.
    </p>

  </div>
</section>

      <section className="services">
        <h2>Наши направления</h2>

        <div className="services-grid">

          <div className="card">
            <h3>🏔 Горные туры</h3>
            <p>Путешествия по самым красивым местам страны.</p>
          </div>

          <div className="card">
            <h3>🎣 Рыбалка</h3>
            <p>Организация рыболовных выездов и туров.</p>
          </div>

          <div className="card">
            <h3>🦌 Охота</h3>
            <p>Подготовленные маршруты для любителей охоты.</p>
          </div>

          <div className="card">
            <h3>🏍 Мототуры</h3>
            <p>Поездки на мотоциклах по живописным маршрутам.</p>
          </div>

          <div className="card">
            <h3>🛵 Аренда мотоциклов</h3>
            <p>Техника в аренду с сопровождением гидов.</p>
          </div>

          <div className="card">
            <h3>🏕 Индивидуальные туры</h3>
            <p>Маршруты под ваши интересы и пожелания.</p>
          </div>

          <div className="card">
          <h3>🐎 Прогулка на лошадях</h3>
          <p>Конные маршруты по горам и живописным долинам Кыргызстана.</p>
          </div>

          <div className="card">
          <h3>⛺ Юрты и этно-туризм</h3>
          <p>Проживание в юртах, знакомство с кочевой культурой и бытом.</p>
          </div>

        </div>

      </section>

    <section className="hero">

    <h1>Открой Кыргызстан вместе с нами</h1>

    <p>
        Горы, озёра, рыбалка, охота, мототуры и настоящие приключения.
        Мы создаём маршруты, которые запоминаются на всю жизнь.
    </p>

   <button
          className="hero__btn"
          onClick={() => navigate("/tours")}
        >
          Посмотреть туры
        </button>

    </section>
    </main>
  )
}

export default Home