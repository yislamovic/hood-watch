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
              <p className>Click <a href="/new">here</a> to post a report that everyone can see!</p>
              <p className="more-info" id="new-point-1">Make your own report about anything in your community! 🖊</p>
              <p className="more-info" id="new-point-2">View reports of other users from around the world! 🌎 </p>
              <p className="more-info" id="new-point-3">Comment and Leave a Like on other reports! 🗣</p>
              <p className="more-info" id="new-point-4">Make Meaningful Relationships! 😊 💕</p>
            </div>
        </div>

      <div className="map-box">
      <div className="visit-title-up">
      <h3>View Map</h3>
      </div>
      
      <div className="visit-text-up">
         <p className="more-info" id="map-point-1">Make your own report about anything in your community! 🖊</p>
         <p className="more-info" id="map-point-2">View reports of other users from around the world! 🌎 </p>
         <p className="more-info" id="map-point-3">View reports of other users from around the world! 🌎 </p>
         <p className="more-info" id="map-point-4">View reports of other users from around the world! 🌎 </p>
      </div>
      <p className="click-here">Click <a href="/map">here</a> view a map of where reports were based on.</p>
         

      </div>
      <div className="delete-box">
      <div className="visit-title-down">
      <h3>Delete Report</h3>
      </div>
      <div className="visit-text-down">
       <p>Click <a href="/delete">here</a> to delete any reports you have submitted.</p>
       <p className="more-info" id="delete-point-1">Delete A Report That You Don't Want Posted Anymore 🚫</p>
       <p className="more-info" id="delete-point-2">Sometimes We Make Mistakes and That's Ok 🙂 </p>
      </div>
      </div>
      <div className="update-box">
      <div className="visit-title">
      <h3>Update Report</h3>
      </div>
       <p>Click <a href="/update">here</a> to update any reports you have submitted</p>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;