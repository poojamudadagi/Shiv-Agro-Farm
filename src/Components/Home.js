import React from 'react'

function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i1.wp.com/blogs.cfainstitute.org/investor/files/2017/06/Weekend-Reads-from-India-Agriculture-Sin-Stocks-and-Elon-Musk.png?fit=1200%2C628&ssl=1" className="d-block w-100" alt="..."  height='400px' width='200px'/>
    </div>
    <div className="carousel-item">
      <img src="https://www.indiaspend.com/h-upload/2022/07/26/760990-natural-farming-explained-1500.jpg" className="d-block w-100" alt="..."  height='400px' width='200px'/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1187320693/photo/the-farmer-holds-a-money-bag-on-the-background-of-plantations-lending-and-subsidizing-farmers.jpg?s=612x612&w=0&k=20&c=mpXsJO0x11Nro_AC6OdWXlfV9jYeiTOYKSMCZfFktco=" alt=''  height='400px' width='1390px'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 </div>
  )
}

export default Home
