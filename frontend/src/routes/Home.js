import "../styles/Home.css";
import neighbourhoodImage from "../assets/cartoon-street.jpeg"
function Home() {

  return (
    <>
    <div className="home-container">
    <div className="home-header" style={{ backgroundImage: `url(${neighbourhoodImage})`}}>
      <div className="home-title">
     <h1>Welcome to Neighbourhood Watch</h1>
     </div>

      <div className="about-container">
        <p>Welcome to the neighbourhood watch 🕵 🦉 ! Our app is dedicated to creating more safe and positive spaces by informing users of many good/concerning things that may take place in their areas ✅ . Please feel free to report anything that may take place in your community 📝 . Feel free to <b><a href="/register">Register Here</a></b> to create an account. If you already have an account you can <b><a href="/login">Login Here</a></b>. Our users are slowly growing in number and we would love your feeback 📈 . Feel feel to email us at <b>AskTheWatchers3@gmail.com</b> if you have any burning questions 🔥 . Enjoy your say and thanks for checking us out! Stay watchin' folks!!! 👁 👁  </p>
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
              <p className="more-info" id="new-point-3">View reports of other users from around the world! 🌎 </p>
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
            <h3>Delete Report</h3>
          </div>
          <div className="visit-text-down">
            <p className="more-info" id="delete-point-1">Click <a href="/delete">here</a> to delete any reports you have submitted.</p>
            <p className="more-info" id="delete-point-2">Delete a report that you don't want posted anymore! 🚫</p>
            <p className="more-info" id="delete-point-3">Deletion process is quick and efficient! 🏃</p>
            <p className="more-info" id="delete-point-4">Please keep content appropriate in our forums! 🙏</p>
            <p className="more-info" id="delete-point-5">We all make mistakes! 🙂 </p>
            
         </div>
        </div>
      <div className="update-box">
        <div className="visit-title-up">
          <h3>Update Report</h3>
        </div>
        <div className="visit-text-up">
           <p className="more-info" id="up-point-1">Click <a href="/update">here</a> to update any reports you have submitted!</p>
           <p className="more-info" id="up-point-2">Update a report that you want to change! 🔄</p>
           <p className="more-info" id="up-point-3">Please keep content appropriate in our forums! 🙏</p>
           <p className="more-info" id="up-point-4">We all make mistakes! 🙂</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Home;