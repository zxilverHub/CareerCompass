import nuresPractitioner from './nurse practitionaer.webp'
import softwareDeveloper from './software engineer.webp'
import financialManger from './financial manager.jpg'

const Images = (id) => {
    switch(id) {
        case 1:
            return nuresPractitioner
        case 2:
            return financialManger
        case 3:
            return softwareDeveloper
    }
}

function CareerImagesImporter({id}) {
  return (
    <img src={Images(id)} />
  )
}

export default CareerImagesImporter