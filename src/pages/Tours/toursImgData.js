import img1 from "../../assets/images/tours/1.webp"
import img2 from "../../assets/images/tours/2.webp"
import img3 from "../../assets/images/tours/3.webp"
import img4 from "../../assets/images/tours/4.webp"
import img5 from "../../assets/images/tours/5.webp"
import img6 from "../../assets/images/tours/6.webp"
import img7 from "../../assets/images/tours/7.webp"
import img8 from "../../assets/images/tours/8.webp"
import img9 from "../../assets/images/tours/9.webp"
import img10 from "../../assets/images/tours/10.webp"
import img11 from "../../assets/images/tours/11.webp"
import img12 from "../../assets/images/tours/12.webp"
import img13 from "../../assets/images/tours/13.webp"
import img14 from "../../assets/images/tours/14.webp"
import img15 from "../../assets/images/tours/15.webp"
import img16 from "../../assets/images/tours/16.webp"
import img17 from "../../assets/images/tours/17.webp"
import img18 from "../../assets/images/tours/18.webp"
import img19 from "../../assets/images/tours/19.webp"
import img20 from "../../assets/images/tours/20.webp"
import img21 from "../../assets/images/tours/21.webp"
import img22 from "../../assets/images/tours/22.webp"
import img23 from "../../assets/images/tours/23.webp"


const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23
]


export const TOURS_IMAGES = images.map((image, index) => ({
  id: index + 1,
  image,
  title: `Фото №${index + 1}`
}))