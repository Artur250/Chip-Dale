import { useState } from "react"
import { useTranslation } from "react-i18next"
import "./Tours.css"

import toursData from "../../data/toursData.json"
import { TOURS_IMAGES } from "./toursImgData"

function Tours() {
  const { t } = useTranslation()

  const [search, setSearch] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedTour, setSelectedTour] = useState(null)

  // Поиск по заголовку, региону и описанию
  const filteredTours = toursData.filter((tour) => {
    const value = search.toLowerCase().trim()
    const title = t(`tours.${tour.key}.title`).toLowerCase()
    const region = t(`tours.${tour.key}.region`).toLowerCase()
    const description = t(`tours.${tour.key}.description`).toLowerCase()

    return title.includes(value) || region.includes(value) || description.includes(value)
  })

  // Безопасное извлечение программы текущего тура (работает и с объектом, и с массивом)
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
    <main className="tours-page">
      {/* Hero-секция */}
      <section className="tours-hero">
        <h1>{t("tours.hero.title")}</h1>
        <p>{t("tours.hero.description")}</p>
      </section>

      {/* Поиск и туры */}
      <section className="tours-container">
        <div className="tour-search">
          <input
            type="text"
            placeholder={t("tours.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="tours-grid">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
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
      </section>

      {/* Галерея */}
      <section className="gallery-section">
        <h2 className="gallery-title">{t("tours.gallery.title")}</h2>
        <p className="gallery-description">{t("tours.gallery.description")}</p>

        <div className="gallery-grid">
          {TOURS_IMAGES.map((photo) => (
            <div key={photo.id} className="gallery-card">
              <img
                src={photo.image}
                alt={photo.title || "Tour photo"}
                className="gallery-image"
                loading="lazy"
                decoding="async"
                onClick={() => setSelectedImage(photo.image)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Модальное окно с фото */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Preview"
            className="image-modal__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="image-modal__close" onClick={() => setSelectedImage(null)}>
            ✕
          </button>
        </div>
      )}

      {/* Модальное окно тура */}
      {selectedTour && (
        <div className="tour-modal" onClick={() => setSelectedTour(null)}>
          <div className="tour-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="tour-modal__close" onClick={() => setSelectedTour(null)}>
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
    </main>
  )
}

export default Tours