import { Link } from "react-router-dom"
import { REGIONS_DATA } from "../Regions_data" // Импорт с фигурными скобками, чтобы не было ошибок
import { useTranslation } from "react-i18next"
import "./Osh.css"

function Osh() {
const { t } = useTranslation()


  const regionInfo = REGIONS_DATA.find(
    r => r.id === "osh"
  ) || {
    name: "regions.osh",
    img: ""
  }

  return (
   
    <div className="region-detail">

      <div className="region-detail__container">


        {/* Кнопка назад */}

        <div className="region-detail__nav-bar">

          <Link 
            to="/regions" 
            className="region-detail__back-btn"
          >

            <svg 
              className="region-detail__back-svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >

              <path 
                d="M19 12H5M5 12L12 19M5 12L12 5" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />

            </svg>


            {t("region.back")}


          </Link>

        </div>



        {/* Баннер области */}

        <div
          className="region-detail__header"
          style={{
            backgroundImage: `url(${regionInfo.img})`
          }}
        >

          <h1>
            {t(regionInfo.name)}
          </h1>


        </div>




        {/* Секция туров */}

        <div className="region-detail__tours-section">


          <div className="region-detail__placeholder">


            <p>

              {t("region.tours")}

              {" "}

              <strong>
                {t(regionInfo.name)}
              </strong>


            </p>


          </div>


        </div>



      </div>


    </div>

  )
}

export default Osh