import { Button, Paper } from '@mui/material';
import { useEffect } from 'react';
import './Sidebar.css'

const Sidebar = () => {


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=945&locationId=15187312&lang=en_PH&rating=true&nreviews=5&writereviewlink=true&popIdx=true&iswide=false&border=true&display_version=2";
    script.async = true;
    script.onload = function () {
      // If you need to do something after load, do it here
      // this.loadtrk = true; // Not usually needed
    };
    document.getElementById('TA_selfserveprop945')?.appendChild(script);
    // Cleanup: remove script on unmount
    return () => {
      document.getElementById('TA_selfserveprop945')?.removeChild(script);
    };
  }, []);
  return (
    <div className="sidebar">

      <Button variant='contained' className='sidebar-button' size='large'>{new Date().getFullYear()} Price List</Button>
      <Button variant='contained' className='sidebar-button' size='large'>Book Now !!</Button>
      <div>
      <div id="TA_selfserveprop945" className="TA_selfserveprop" >
        <ul id="0rwCSgGrNLO" className="TA_links GKbbEp">
          <li id="IsdxhVQlTnP" className="n8vjOmth3I">
            <a target="_blank" href="https://www.tripadvisor.com.ph/Hotel_Review-g1587920-d15187312-Reviews-Blue_Ribbon_Dive_Resort-Mabini_Batangas_Province_Calabarzon_Region_Luzon.html">
              <img src="https://www.tripadvisor.com.ph/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor" />
            </a>
          </li>
        </ul>
      </div>
      </div>
      <div id="block-7">
        <img
          src="https://blueribbondivers.com/wp-content/uploads/2024/12/SDI-5-Star-Square2-250x250-1.jpg"
          alt="SDI 5-Star"
          width={250}
          height={250}
          loading="lazy"
          decoding="async"
          srcSet="
            https://blueribbondivers.com/wp-content/uploads/2024/12/SDI-5-Star-Square2-250x250-1.jpg 250w,
            https://blueribbondivers.com/wp-content/uploads/2024/12/SDI-5-Star-Square2-250x250-1-150x150.jpg 150w
          "
          sizes="(max-width: 250px) 100vw, 250px"
        />
      </div>

      {/* Recent Blog Posts */}
      <div id="recent-posts-3">
        <p>From The Blog</p>
        <ul>
          <li>
            <a href="https://blueribbondivers.com/bargibants-pygmy-seahorse-filmed-in-anilao-philippines/">
              Bargibant’s Pygmy Seahorse Filmed in Anilao, Philippines
            </a>
          </li>
          <li>
            <a href="https://blueribbondivers.com/juvenile-wunderpus-photogenicus-filmed-on-a-blackwater-dive-in-anilao/">
              Juvenile Wunderpus Photogenicus filmed on a Blackwater Dive in Anilao
            </a>
          </li>
          <li>
            <a href="https://blueribbondivers.com/get-20-off-accommodation-and-10-off-fun-dives-this-february/">
              Get 20% off Accommodation and 10% off fun dives this February!
            </a>
          </li>
          <li>
            <a href="https://blueribbondivers.com/taal-volcano-update-business-as-usual-at-blue-ribbon/">
              Taal Volcano Update – Business as Usual at Blue Ribbon
            </a>
          </li>
          <li>
            <a href="https://blueribbondivers.com/gearing-up-for-xmas-at-blue-ribbon-dive-resort/">
              Gearing up for Xmas at Blue Ribbon Dive Resort
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
