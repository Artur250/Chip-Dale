import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { REGIONS_DATA } from "../Regions_data"
import toursData from "../../../data/toursData.json"
import "../../Tours/Tours.css"
import "./Batken.css"

function Batken() {
  const { t } = useTranslation()
  const [selectedTour, setSelectedTour] = useState(null)

  const regionInfo = REGIONS_DATA.find(
    (r) => r.id === "batken"
  ) || {
    name: "regions.batken",
    img: ""
  }

  // Фильтруем туры, относящиеся к Баткенской области
  const batkenTours = toursData.filter((tour) => tour.regions.includes("batken"))

  const getProgramList = () => {
    if (!selectedTour) return []
    const programData = t(`tours.${selectedTour.key}.program`, { returnObjects: true })
    if (Array.isArray(programData)) return programData
    if (typeof programData === "object" && programData !== null) {
      return Object.values(programData)
    }
    return []
  }

  const programList = getProgramList()

  return (
    <div className="region-detail">
      <div className="region-detail__container">
        {/* Кнопка назад */}
        <div className="region-detail__nav-bar">
          <Link to="/regions" className="region-detail__back-btn">
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
          <h1>{t(regionInfo.name)}</h1>
        </div>

        {/* Секция туров */}
        <div className="region-detail__tours-section">
          <p className="region-detail__title" style={{ textAlign: "center", marginBottom: "30px", fontSize: "20px" }}>
            {t("region.tours")} <strong>{t(regionInfo.name)}</strong>
          </p>

          <div className="tours-grid">
            {batkenTours.length > 0 ? (
              batkenTours.map((tour) => (
                <article className="tour-card" key={tour.id}>
                  <h2>{t(`tours.${tour.key}.title`)}</h2>
                  <p className="tour-card__description">
                    {t(`tours.${tour.key}.description`)}
                  </p>

                  <div className="tour-card__info">
                    <span>📍 {t(`tours.${tour.key}.region`)}</span>
                    <span>⏳ {t(`tours.${tour.key}.duration`)}</span>
                    <span>☀️ {t(`tours.${tour.key}.season`)}</span>
                    <span>⚡ {t(`tours.${tour.key}.difficulty`)}</span>
                    <span>💰 {t(`tours.${tour.key}.price`)}</span>
                  </div>

                  <button
                    className="tour-card__button"
                    onClick={() => setSelectedTour(tour)}
                  >
                    {t("tours.more")}
                  </button>
                </article>
              ))
            ) : (
              <p className="not-found">{t("tours.notFound")}</p>
            )}
          </div>
        </div>
      </div>

      {/* Модальное окно тура */}
      {selectedTour && (
        <div className="tour-modal" onClick={() => setSelectedTour(null)}>
          <div
            className="tour-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tour-modal__close"
              onClick={() => setSelectedTour(null)}
            >
              ✕
            </button>

            <h2>{t(`tours.${selectedTour.key}.title`)}</h2>
            <p>{t(`tours.${selectedTour.key}.fullDescription`)}</p>

            <div className="tour-modal__info">
              <span>⏳ {t(`tours.${selectedTour.key}.duration`)}</span>
              <span>☀️ {t(`tours.${selectedTour.key}.season`)}</span>
              <span>⚡ {t(`tours.${selectedTour.key}.difficulty`)}</span>
              <span>💰 {t(`tours.${selectedTour.key}.price`)}</span>
            </div>

            <h3 className="tour-modal__program-title">{t("tours.program")}</h3>

            {programList.map((item, index) => (
              <div key={index} className="tour-day">
                <h4>
                  {item.day}: {item.title}
                </h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Batken