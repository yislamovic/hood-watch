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
            <div className="visit-title">
               <h3>Post Report</h3>
            </div>
            <div className="visit-text">
              <p class="click-here">Click <a href="/new">here</a> to post a report that everyone can see!</p>
              <ul class="info-list">
                <ol>hello</ol>
                <ol>hello</ol>
                <ol>hello</ol>
                <ol>hello</ol>
              </ul>
            </div>
        </div>

      <div className="heatmap-box">
      <div className="visit-title">
      <h3>View Map</h3>
      </div>
      <p>Click <a href="/map">here</a> view a map that highlights areas as 'safe' or 'concerning' based on the reports that've been sent in.</p>
      </div>
      <div className="delete-box">
      <div className="visit-title">
      <h3>Delete Report</h3>
      </div>
      <div className="visit-text">
       <p>Click <a href="/delete">here</a> to delete any reports you have submitted.</p>
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