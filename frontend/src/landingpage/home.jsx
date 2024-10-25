import { useState, useEffect } from "react";

function Home() {
  let texts = [
    "Find what you need when you need it with ",
    "Identify, execute, & complete your priorities with ",
    "Transform your information into action with ",
  ];
  const [text, setText] = useState(texts[0]);

  useEffect(() => {
    const changePage = () => {
      setText((prevText) => {
        if (prevText === texts[0]) {
          return texts[1];
        } else if (prevText === texts[1]) {
          return texts[2];
        } else {
          return texts[0];
        }
      });
    };

    const interval = setInterval(changePage, 4000); // Change text every 8 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="Container">
      <div className="row p-4 home">
        <div className="col col-md-6 p-md-5">
          <h1 className="fw-bold">
            {text} <span style={{ color: "blue" }}>AI Companion</span>
          </h1>
          <p className="fw-bold py-md-3">
            Accomplish more with Zoom Workplace: your AI-first work platform
            featuring AI Companion 2.0, included at no extra cost.*
          </p>
          <button type="button" className="btn btn-primary rounded-pill px-4">
            Plans & Pricing
          </button>
          <button
            type="button"
            className="btn text-primary fw-bold ml-5 rounded-pill discover-btn"
          >
            {" "}
            Discover Zoom Workspace
            <i class="fa-solid fa-angle-right icon-dis"></i>
          </button>
        </div>
        <div className="col col-md-6 ">
          <div className="row">
            <div className="col col-6 d-flex-left ">
              <img src="sSlide1-2.png" className="ai-left" />
              <img
                src="sSlide3-3.jpg"
                style={{
                  maxWidth: "14rem",
                  minHeight: "12rem",
                  marginTop: "100px",
                }}
              />
            </div>
            <div className="col col-6 d-flex-right">
              <img className="right-img" src="sSlide3-1.jpg" />
              <img src="sSlide3-4.png" className="ai-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="zoom">
        <h1>Zoom</h1>
      </div>
      <div className="blue text-white text-center ">
        <h3 className="py-4">
          The AI-first work platform for human connection
        </h3>
        <div className="pb-3 btnss">
          <button type="button" class="btn  workplace-btn px-4 rounded-pill">
            Zoom Workplace
          </button>
          <button
            type="button"
            class="btn  disabled workplace-btn out px-4 rounded-pill"
          >
            AI Companion
          </button>
          <button
            type="button"
            class="btn  disabled workplace-btn out px-4 rounded-pill"
          >
            Business Services
          </button>
          <button
            type="button"
            class="btn  disabled workplace-btn out px-4 rounded-pill"
          >
            Developer Ecosystem
          </button>
        </div>
      </div>
      <div className="workplace pt-md-5">
        <div className="row">
          <div className="col col-md-5 col-12 p-4">
            <img src="workspace_img.png" style={{ maxWidth: "100%" }} />
          </div>
          <div className="col col-md-7 col-12 p-5">
            <h1 className="fw-bold">
              <span className="text-primary">Zoom</span> Workplace
            </h1>
            <p className="fw-bold">
              Make teamwork more meaningful across hybrid teams with modern
              collaboration solutions.{" "}
              <a href="#" className="text-decoration-none">
                {" "}
                Learn more
              </a>
            </p>{" "}
            <div className="row text-primary fw-bold pb-2">
              <div className="col ">
                <i class="fa-solid fa-video"></i> &nbsp;&nbsp; Meetings
              </div>
              <div className="col">
                <i class="fa-brands fa-telegram"></i>&nbsp;&nbsp;Productivity
              </div>
            </div>
            <div className="row  text-primary fw-bold pb-2">
              <div className="col">
                <i class="fa-solid fa-comments"></i> &nbsp;&nbsp;Team Chats
              </div>
              <div className="col">
                <i class="fa-solid fa-heart"></i> &nbsp;&nbsp;Employee
                Engagement
              </div>
            </div>
            <div className="row  text-primary fw-bold pb-2">
              <div className="col">
                <i class="fa-solid fa-phone"></i> &nbsp;&nbsp;Phone
              </div>
              <div className="col">
                <i class="fa-solid fa-desktop"></i> &nbsp;&nbsp;Flexibal
                Workplace
              </div>
            </div>
            <div className="row  text-primary fw-bold pb-2">
              <div className="col">
                <i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;Mail & Calender
              </div>
              <div className="col">
                <i class="fa-brands fa-servicestack"></i> &nbsp;&nbsp;Workvivo
              </div>
            </div>
            <div className="row  text-primary fw-bold pb-2">
              <div className="col">
                <i class="fa-solid fa-clock"></i> &nbsp;&nbsp;Schedular
              </div>
              <div className="col">
                <i class="fa-solid fa-diagram-project"></i> &nbsp;&nbsp;App
                Marketplace
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
