import { Link } from "react-router-dom"
import { REGIONS_DATA } from "../Regions_data" // Импорт с фигурными скобками, чтобы не было ошибок
import "./Batken.css"

function Batken() {

  const regionInfo = REGIONS_DATA.find(r => r.id === "batken") || {
    name: "Баткенская область",
    img: ""
  }

  return (
    <div className="region-detail">
      <div className="region-detail__container">
        

        <div className="region-detail__nav-bar">
          <Link to="/regions" className="region-detail__back-btn">
            <svg className="region-detail__back-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Назад к областям
          </Link>
        </div>


        <div className="region-detail__header">
          <div className="region-detail__emblem-wrapper">
            <img 
              src={regionInfo.img} 
              alt={`Герб ${regionInfo.name}`} 
              className="region-detail__emblem" 
            />
          </div>
          <h1>{regionInfo.name}</h1>
        </div>


        <div className="region-detail__tours-section">

          
          <div className="region-detail__placeholder">
            <p>Здесь будут отображаться только туры по <strong>{regionInfo.name}</strong></p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Batken