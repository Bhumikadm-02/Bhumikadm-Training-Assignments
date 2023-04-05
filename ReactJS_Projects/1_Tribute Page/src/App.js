import React from 'react';

function TributePage() {
  return (
    <div class="tribute">
      {/* Header */}
      <header class="head">
        <h1>Shreya Ghoshal</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfx8N38IpGnnE1gOoTeuiUEEjou8kB2kxIg&usqp=CAU.jpg" alt="Image not coming" width="300" height="250" />
        <p>Indian Playback Singer</p>

      </header>

      {/* Main Content */}
      
        {/* About */}
        <section class="about">
          <h2>About Shreya Ghoshal</h2>
          <p>
            Shreya Ghoshal (born 12 March 1984) is an Indian singer. Noted for her wide vocal
            range and versatility,<br></br> she is one of the most prolific and popular singers of India.
            Shreya Ghoshal is an Indian playback singer<br></br> who has sung in many
            Bollywood films. She has won numerous awards for her singing.<br></br>
          </p>
        </section>

        {/* Career */}
        <section class="career">
          <h2>Career</h2>
          <p>
            Shreya Ghoshal started her career by participating in the reality show
            Sa Re Ga Ma Pa. Ghoshal's first recording was "Ganraj Rangi Nachato", which
            is a cover version of a Marathi song originally sung by Lata Mangeshkar.
            Her first studio album was Bendhechhi Beena, which was released on 1 January
            1998, with 14 tracks. Some of her earlier albums are O Tota Pakhi Re,
            Ekti Katha (1999), and Mukhor Porag (2000). Ghoshal recorded Bengali studio
            album Rupasi Raate (2002). Ghoshal recorded devotional songs in albums
            like Banomali Re (2002), and later, Krishna Bina Ache Ke (2007).She got her 
            first break in Bollywood with the song "Bairi Piya" from the film Devdas. 
            Since then, she has sung many popularsongs in Bollywood, including "Agar 
            Tum Mil Jao", "Teri Ore", "Sun Raha Hai Na Tu", and "Deewani Mastani".
          </p>
        </section>

        {/* Awards */}
        <section class="award">
          <h2>Awards</h2>
          <p>
            Shreya Ghoshal has won numerous awards for her singing, including four
            National Film Awards, five Filmfare Awards, and many others. She has also
            been honored with the prestigious Padma Shri award by the Indian
            government in recognition of her contribution to music.
          </p>
        </section>
      

      {/* Footer */}
      <footer class="foo">
        <p>
          This tribute page is created by Bhumika D M.
        </p>
      </footer>
    </div>
  );
}

export default TributePage;
