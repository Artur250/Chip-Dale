import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "./Home.css"



function Home() {

  const navigate = useNavigate()

  const { t } = useTranslation()



  return (

    <main className="home">



      <section className="about">

        <div className="about__container">


          <h2>
            {t("home.aboutTitle")}
          </h2>



          <p className="about__text">

            {t("home.aboutText")}

          </p>



          <h2>
            {t("home.servicesTitle")}
          </h2>



          <div className="about__grid">



            <div className="about__card">

              <h3>
                {t("home.services.author.title")}
              </h3>

              <p>
                {t("home.services.author.text")}
              </p>

            </div>




            <div className="about__card">

              <h3>
                {t("home.services.expedition.title")}
              </h3>

              <p>
                {t("home.services.expedition.text")}
              </p>

            </div>





            <div className="about__card">

              <h3>
                {t("home.services.guide.title")}
              </h3>

              <p>
                {t("home.services.guide.text")}
              </p>

            </div>



          </div>





          <p className="about__desc">

            {t("home.aboutDesc")}

          </p>


        </div>

      </section>







      <section className="services">


        <h2>
          {t("home.directions")}
        </h2>



        <div className="services-grid">





          <Link to="/tours" className="services__link">

            <div className="card">

              <h3>
                {t("home.cards.mountain.title")}
              </h3>

              <p>
                {t("home.cards.mountain.text")}
              </p>

            </div>

          </Link>





          <Link to="/tours" className="services__link">

            <div className="card">

              <h3>
                {t("home.cards.fishing.title")}
              </h3>

              <p>
                {t("home.cards.fishing.text")}
              </p>

            </div>

          </Link>





          <Link to="/tours" className="services__link">

            <div className="card">

              <h3>
                {t("home.cards.hunting.title")}
              </h3>

              <p>
                {t("home.cards.hunting.text")}
              </p>

            </div>

          </Link>





          <Link to="/tours" className="services__link">

            <div className="card">

              <h3>
                {t("home.cards.moto.title")}
              </h3>

              <p>
                {t("home.cards.moto.text")}
              </p>

            </div>

          </Link>






          <Link to="/tours" className="services__link">

            <div className="card">

              <h3>
                {t("home.cards.rent.title")}
              </h3>

              <p>
                {t("home.cards.rent.text")}
              </p>

            </div>

          </Link>







          <Link to="/tours" className="services__link">

            <div className="card">

              <h3>
                {t("home.cards.individual.title")}
              </h3>

              <p>
                {t("home.cards.individual.text")}
              </p>

            </div>

          </Link>







          <Link to="/tours" className="services__link">

            <div className="card">

              <h3>
                {t("home.cards.horse.title")}
              </h3>

              <p>
                {t("home.cards.horse.text")}
              </p>

            </div>

          </Link>







          <Link to="/tours" className="services__link">

            <div className="card">

              <h3>
                {t("home.cards.yurt.title")}
              </h3>

              <p>
                {t("home.cards.yurt.text")}
              </p>

            </div>

          </Link>





        </div>


      </section>









      <section className="hero">


        <h1>
          {t("home.heroTitle")}
        </h1>



        <p>

          {t("home.heroText")}

        </p>





        <button

          className="hero__btn"

          onClick={() => navigate("/tours")}

        >

          {t("home.button")}

        </button>




      </section>



    </main>

  )

}




export default Home