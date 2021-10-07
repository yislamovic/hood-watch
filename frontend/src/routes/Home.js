import "../styles/Home.css";
import neighbourhoodImage from "../assets/cartoon-street.jpeg"

function Home() {

  return (
    <>
    <div className="home-container">
    <div className="home-title">
     <h1>Welcome to Neighbourhood Watch</h1>
     </div>
    <div className="home-header" style={{ backgroundImage: `url(${neighbourhoodImage})`}}></div>
    <div className="about-container">
      <div className="header-and-text-holder">
      <div className="about-header-container">
        <h3 className="about-header">About Us</h3>
      </div>
      </div>
      <div className="space-text-container">
      <div className="mini-space-text-container-1">
       <span className="space-text" id="space-text-1"><b>Our app is...</b></span>
       <span className="pink-line"></span>
       <span className="space-text" id="space-text-2">designed to join all our communities together!</span>
      </div>
      <div className="mini-space-text-container-2">
       <span className="space-text" id="space-text-3"><b>Our mission is...</b></span>
       <span className="pink-line"></span>
       <span className="space-text" id="space-text-4">to create a safe enviroment to report anything in!</span> 
       </div>
       <div className="mini-space-text-container-3">
       <span className="space-text" id="space-text-5"><b>We greatly appreciate...</b></span>
       <span className="pink-line"></span>
       <span className="space-text" id="space-text-6">your constant support and user feedback!</span> 
       </div>
       </div>


     </div>
    
      <div className="home-ref">
        
        <div className="visit-header">
        <h2>Explore</h2>
        </div>

      <div className="visit-container">
        
        <div className="report-box">
            <div className="visit-title-down">
               <h3>Post Report</h3>
            </div>
            <div className="visit-text-down">
              <p className="more-info" id="new-point-1">Click <a href="/new">here</a> to post a report that everyone can see!</p>
              <p className="more-info" id="new-point-2">Make your own report about anything in your community! 🖊</p>
              <p className="more-info" id="new-point-3">View reports of other users from around Toronto! 🌎 </p>
              <p className="more-info" id="new-point-4">Comment and Leave a Like on other reports! 🗣</p>
              <p className="more-info" id="new-point-5">Form Friendships! 😊 💕</p>
            </div>
        </div>
      <div className="map-box">
      <div className="visit-title-up">
      <h3>View Map</h3>
      </div>
      <div className="visit-text-up">
         <p className="more-info" id="map-point-1">Click <a href="/map">here</a> to view a map of where reports were based on!</p>
         <p className="more-info" id="map-point-2">Shows locations of where reports were made! 😲</p>
         <p className="more-info" id="map-point-3">An immersive experience with an Interactive Map API! 📡 </p>
         <p className="more-info" id="map-point-4">View all the users of our app! 😁</p>
         <p className="more-info"></p>
      </div>
     </div>
     <div className="delete-box">
          <div className="visit-title-down">
            <h3>Your Reports</h3>
          </div>
          <div className="visit-text-down">
            <p className="more-info" id="delete-point-1">Click <a href="/userposts">here</a> to view the reports you've submitted.</p>
            <p className="more-info" id="delete-point-2">All reports appear in a list! 📝</p>
            <p className="more-info" id="delete-point-3">View all of your reports! 🏃</p>
            <p className="more-info" id="delete-point-4">Delete reports that you don't want public anymore!</p>
            <p className="more-info" id="delete-point-5">Update any of your reports! </p>
          </div>
        </div>
      <div className="update-box">
        <div className="visit-title-up">
          <h3>All Reports</h3>
        </div>
        <div className="visit-text-up">
           <p className="more-info" id="up-point-1">Click <a href="/posts">here</a> to view other people's reports!</p>
           <p className="more-info" id="up-point-2">Be alert of current news and topics! 📰</p>
           <p className="more-info" id="up-point-2">Write comments on reports! 🗣</p>
           <p className="more-info" id="up-point-3">Please keep comments appropriate in our forums! 🙏</p>
           <p className="more-info" id="up-point-4">Vote on comments you like or dislike! 👍  👎</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Home;