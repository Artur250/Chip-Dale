import { useNavigate } from "react-router-dom"
import "./Home.css"
import { Link } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

  return (
    <main className="home">


<section className="about">
  <div className="about__container">

    <h2>Кто мы?</h2>

    <p className="about__text">
      Команда <span>«Чип и Дейл»</span> — это энтузиасты и профессиональные гиды, влюбленные в первозданную природу Кыргызстана. Мы не просто организуем поездки, мы открываем для вас скрытые жемчужины Тянь-Шаня, куда редко добираются обычные туристы. Наш опыт позволяет превращать сложные экспедиции в доступные и незабываемые приключения.
    </p>

    <h2>Наши услуги</h2>
    <div className="about__grid">

      <div className="about__card">
        <h3>🏔 Авторские туры</h3>
        <p>Разрабатываем уникальные маршруты: от высокогорных перевалов до уединенных озер, подбирая локации под ваши интересы.</p>
      </div>

      <div className="about__card">
        <h3>🏕 Экспедиции</h3>
        <p>Для тех, кто хочет глубже погрузиться в дикую природу. Берем на себя всю логистику, снаряжение и организацию полевого быта.</p>
      </div>

      <div className="about__card">
        <h3>🚙 Сопровождение</h3>
        <p>Обеспечиваем полную безопасность и комфорт на протяжении всего пути. С нами вы можете полностью сосредоточиться на эмоциях.</p>
      </div>

    </div>

    <p className="about__desc">
      Мы верим, что горы — это место силы. Наша задача — помочь вам увидеть настоящий, дикий Кыргызстан, почувствовать его масштаб и увезти домой не просто фотографии, а воспоминания, которые останутся с вами на всю жизнь.
    </p>

  </div>
</section>
      <section className="services">
  <h2>Наши направления</h2>

  <div className="services-grid">
    <Link to="../Tours" className="services__link">
      <div className="card">
        <h3>🏔 Горные туры</h3>
        <p>Путешествия по самым красивым местам страны.</p>
      </div>
    </Link>

    <Link to="../Tours" className="services__link">
      <div className="card">
        <h3>🎣 Рыбалка</h3>
        <p>Организация рыболовных выездов и туров.</p>
      </div>
    </Link>

    <Link to="../Tours" className="services__link">
      <div className="card">
        <h3>🦌 Охота</h3>
        <p>Подготовленные маршруты для любителей охоты.</p>
      </div>
    </Link>

    <Link to="../Tours" className="services__link">
      <div className="card">
        <h3>🏍 Мототуры</h3>
        <p>Поездки на мотоциклах по живописным маршрутам.</p>
      </div>
    </Link>

    <Link to="../Tours" className="services__link">
      <div className="card">
        <h3>🛵 Аренда мотоциклов</h3>
        <p>Техника в аренду с сопровождением гидов.</p>
      </div>
    </Link>

    <Link to="../Tours" className="services__link">
      <div className="card">
        <h3>🏕 Индивидуальные туры</h3>
        <p>Маршруты под ваши интересы и пожелания.</p>
      </div>
    </Link>

    <Link to="../Tours" className="services__link">
      <div className="card">
        <h3>🐎 Прогулка на лошадях</h3>
        <p>Конные маршруты по горам и живописным долинам Кыргызстана.</p>
      </div>
    </Link>

    <Link to="../Tours" className="services__link">
      <div className="card">
        <h3>⛺ Юрты и этно-туризм</h3>
        <p>Проживание в юртах, знакомство с кочевой культурой и бытом.</p>
      </div>
    </Link>
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
// Проверка подвзяки git
export default Home