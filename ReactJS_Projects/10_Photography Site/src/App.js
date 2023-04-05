import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/008/215/314/small/camera-dslr-line-pop-art-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg" alt="Company Logo" />
          <h1>fotografía</h1>
        </div>
      </header>
    
        <section className="gallery">
          <h1>Gallery</h1>
          <div className="image-row">
            <img src="https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/ecca467d-52d8-435f-8064-ab2fdca0966f/IMG_6316.JPG" alt="Image 1" width="200" height="50" />
            <img src="https://img.freepik.com/premium-photo/little-puppy-dog-abandoned-street_691560-1581.jpg" alt="Image 2" width="300" height="50" />
            <img src="https://coolwallpapers.me/picsup/3309354-golden-retriever-puppy-muzzle.jpg" alt="Image 3" width="200" height="50" />
            <img src="https://images.squarespace-cdn.com/content/v1/603520d5902dc63d3fbbb632/1614663757043-P9FR0PPOIM5D90KEOQMZ/fd8ab04683cc459fcced123daa1f4f38.jpg" alt="Image 4" width="300" height="100" />
            <img src="https://4kwallpapers.com/images/wallpapers/black-dog-cute-puppies-black-background-dark-amoled-5k-2560x1080-1507.jpg" alt="Image 5" width="300" height="100" />
            <img src="https://w0.peakpx.com/wallpaper/519/521/HD-wallpaper-waiting-labrador-black-white-puppy-dog-animal.jpg" alt="Image 6" width="300" height="100" />
            <img src="https://www.bulldogology.net/wp-content/uploads/2023/01/can-dogs-have-cantaloupe.jpg" alt="Image 6" width="300" height="100" />
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>For more information, please contact:</p>
          <ul>
            <li>Bhumika D M</li>
            <li>Email: bhumikadm@gmail.com</li>
            <li>Phone: +91 8729188027</li>
          </ul>
        </section>
      
    </div>
  );
}

export default App;
