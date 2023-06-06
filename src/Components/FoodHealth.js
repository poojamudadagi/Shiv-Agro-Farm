import React from 'react'

function FoodHealth() {
  return (
    <div classNam='foodhealth'>
      <div><div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/Heart-Healthy.jpg" className="block " width={'1400px'}  height={'500px'} alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>"Health Is Wealth"</h5>
        </div>
    </div>
    <div className="carousel-item">
      <img src="./images/foodyy.jpg" className="block " width={'1400px'} height={'500px'} alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>"Take care of your body. It’s the only place you have to live."</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/food-health.webp" className="block" width={'1400px'}  height={'500px'}  alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>“Eat breakfast like a king, lunch like a prince and dinner like a pauper”</h5>
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  <div className='food' id='cent'>
      Agriculture production is the process of cultivating animals or plants to produce yield for enhancing or sustaining human life.We use a vast array of agricultural products every day;this range comes from food and goes up to clothes and paper. Apart from this, flowers and ethanol gas are also produced by agriculture.<br></br> However, Agriculture production is a series of various activities that will result in the product eventually being sold.<br></br> Simply put, agriculture generates most of the world’s food and fabrics, with wool, cotton and leather all agricultural products. In addition, agriculture also provides timber for construction and paper products.
    </div>
    <div className='food' id='cent'>
    Environmental factors play the biggest role in agriculture production because they effect the crop, including climate, soil, water and properties.<br></br> These factors are a combination of environments that allows the farmers to grow the specific crops in some areas. <br></br>Therefore, agricultural production includes various activities: cultivating soil, raising and rearing, feeding, and managing animals, plantain, and harvesting crops. Apart from this, it includes Aquaculture (raising private aquatic animals), Floriculture (growing flowering plants), and Horticulture (growing fruits, vegetables, and plants).
    </div>
    </div>
  )
}

export default FoodHealth;
