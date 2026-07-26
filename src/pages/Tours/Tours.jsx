import { useState } from "react"
import "./Tours.css"
import { TOUR_DATA } from "./tourData"
import { TOURS_IMAGES } from "./toursImgData"

function Tours() {
  const [search, setSearch] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredTours = TOUR_DATA.filter((tour) => {
    const value = search.toLowerCase()
    return (
      tour.title.toLowerCase().includes(value) ||
      tour.region.toLowerCase().includes(value) ||
      tour.description.toLowerCase().includes(value)
    )
  })

  return (
    <main className="tours-page">
      <section className="tours-hero">
        <h1>Наши туры</h1>
        <p>
          Откройте Кыргызстан вместе с нами.
          Горы, озёра, природа и настоящие приключения.
        </p>
      </section>

      <section className="tours-container">
        <div className="tour-search">
          <input
            type="text"
            placeholder="🔎 Поиск тура..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="tours-grid">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <article className="tour-card" key={tour.id}>
                <h2>{tour.title}</h2>
                <p className="tour-card__description">
                  {tour.description}
                </p>
                <div className="tour-card__info">
                  <span>📍 {tour.region}</span>
                  <span>⏳ {tour.duration}</span>
                  <span>💰 {tour.price}</span>
                </div>
                <button className="tour-card__button">
                  Подробнее
                </button>
              </article>
            ))
          ) : (
            <p className="not-found">
              Туров не найдено
            </p>
          )}
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-title">
          Фото с наших туров
        </h2>
        <p className="gallery-description">
          Несколько фотографий из наших путешествий по Кыргызстану.
        </p>

        <div className="gallery-grid">
          {TOURS_IMAGES.map((photo) => (
            <div key={photo.id} className="gallery-card">
              <img
                src={photo.image}
                alt={photo.title}
                className="gallery-image"
                loading="lazy"
                decoding="async"
                onClick={() => setSelectedImage(photo.image)}
              />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="image-modal__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="image-modal__close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </main>
  )
}

export default Tours