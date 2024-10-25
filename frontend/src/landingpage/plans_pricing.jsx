function Plans() {
  return (
    <div className="Container">
      <div className="plans">
        <div className="blue">
          <h3 className="py-4">Individuals & Business</h3>
          <div className="pb-3 btnss">
            <button type="button" class="btn  workplace-btn px-4 rounded-pill">
              Workplace
            </button>
            <button
              type="button"
              class="btn  disabled workplace-btn out px-4 rounded-pill"
            >
              Phone
            </button>
            <button
              type="button"
              class="btn  disabled workplace-btn out px-4 rounded-pill"
            >
              Events & Webinars
            </button>
            <button
              type="button"
              class="btn  disabled workplace-btn out px-4 rounded-pill"
            >
              Scheduler
            </button>
            <button
              type="button"
              class="btn  disabled workplace-btn  out px-4 rounded-pill"
            >
              Rooms
            </button>
          </div>
        </div>
        <div className="pricing ">
          <div className="card   m-4" id="first">
            <div className="header">
              <h3 className="head">Basic</h3>
              <p>1 user</p>
            </div>
            <h3 className="mt-4 fs-1">Free</h3>
            <button type="button" class="btn ">
              Sign Up
            </button>
            <hr />
            <p className="mt-4 my-1">
              <i class="fa-solid fa-check"></i> <b>Meetings</b> up to 40
              miniutes per meeting
            </p>
            <p className="my-1">
              <i class="fa-solid fa-check"></i> <b>100 Participants</b> per
              meeting
            </p>
            <p className="my-1">
              <i class="fa-solid fa-check"></i> <b>Team Chart</b>
              <i class="fa-solid fa-meteor p-1"></i>
            </p>
            <p className="my-1">
              <i class="fa-solid fa-check"></i> <b>Clip Basics</b> 5-2 miniute
              videos
            </p>
            <p className="my-1">
              <i class="fa-solid fa-check"></i> <b>Docs Basics</b> share up to
              10 docs
            </p>
            <p className="my-1 mb-4 ">
              <i class="fa-solid fa-check"></i> <b>Notes</b>
            </p>
          </div>
          <div className="cards">
            <div className="card m-3">
              <div className="header">
                <h3 className="head">Pro</h3>
                <p>1-9 users</p>
              </div>
              <h3 className="mt-4 fs-1">&#8377; 1100</h3>
              <p className="small text-muted">
                /month/user, billed annually or ₹1,300 billed monthly
              </p>
              <button type="button" class="btn ">
                Buy Now
              </button>
              <hr />
              <b className="mt-4">Everything of Basics and:</b>
              <p className=" my-1">
                <i class="fa-solid fa-check"></i> <b>Meetings</b> up to 30 hours
                per meeting
              </p>
              <p className="my-1">
                <i class="fa-solid fa-check"></i> <b>AI Companion</b>{" "}
                <i class="fa-solid fa-meteor p-1"></i>
              </p>
              <p className="my-1">
                <i class="fa-solid fa-check"></i> <b>Cloud Storage </b>5GB
              </p>
              <p className="my-1">
                <i class="fa-solid fa-check"></i> <b>Clips Plus</b> unlimited
                videos
              </p>
              <p className="my-1">
                <i class="fa-solid fa-check"></i> <b>Docs Basics</b> share up to
                100 docs
              </p>
              <p className="my-1 mb-4 ">
                <i class="fa-solid fa-check"></i> <b>Notes</b>
              </p>
            </div>
            <div className="card m-3">
              <div className="header">
                <h3 className="head">Business</h3>
                <p>10-250 users</p>
              </div>
              <h3 className="mt-4 fs-1">&#8377; 1665</h3>
              <p className="small text-muted">
                /month/user, billed annually or ₹1,999 billed monthly
              </p>
              <button type="button" class="btn ">
                Buy Now
              </button>
              <hr />
              <b className="mt-4">Everything of Pro and:</b>

              <p className="my-1">
                <i class="fa-solid fa-check"></i> <b>300 Participants</b> per
                meeting
              </p>
              <p className="my-1">
                <i class="fa-solid fa-check"></i>
                <b> Whiteboard </b>Unlimited boards
              </p>
              <p className="my-1">
                <i class="fa-solid fa-check"></i> <b>Clip Basics</b> 5-2 miniute
                videos
              </p>
              <p className="my-1">
                <i class="fa-solid fa-check"></i> <b>Docs Basics</b> share up to
                500 docs
              </p>
              <p className="my-1 mb-4 ">
                <i class="fa-solid fa-check"></i> <b>Scheduler</b>{" "}
                <i class="fa-solid fa-meteor p-1"></i>
              </p>
            </div>
            <div className="card m-3">
              <div className="header">
                <h3 className="head">Business Plus</h3>
                <p>10-250 users</p>
              </div>
              <p className="fw-bold  mt-3 text-muted">
                Contact us for pricing information and more
              </p>
              <button type="button" class="btn ">
                Contact Us
              </button>
              <hr />
              <b className="mt-3">Everything of Bussiness and:</b>

              <p className="my-1">
                <i class="fa-solid fa-check"></i> <b>Cloud storage</b> 10GB
              </p>
              <p className="my-1">
                <i class="fa-solid fa-check"></i> <b> Phone </b> Global select
              </p>
              <p className="my-1 ">
                <i class="fa-solid fa-check"></i> <b>Translated Captions</b>
              </p>
              <p className="my-1  ">
                <i class="fa-solid fa-check"></i> <b>Reservations</b>
              </p>
              <p className="my-1 mb-4 ">
                <i class="fa-solid fa-check"></i> <b>Visitor Management</b>
                <i class="fa-solid fa-meteor p-1"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="enjoy-apps mx-md-5">
          <div className="row">
            <div className="col-12 col-md-6 p-5">
              <h3 className="my-5 ">Enjoy Essential Apps for free!</h3>
              <p className="fs-5 ">
                The perfect all-in-one app suite to take meeting notes, engage
                your team with interactive activities, deliver insights to
                improve customer conversations, and more!
              </p>
              <button type="button" class="btn btn-primary rounded-pill px-4 ">
                Learn More
              </button>
            </div>
            <div className="col-12 col-md-6 ">
              <img
                src="essential.svg"
                className="image"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="row stories">
          <div className="col col-md-4 story-f col-12">
            <img src="story.jpeg" className="story-image" />
          </div>
          <div className="col col-md-8 story-s col-12">
            <p className="p-md-5 pt-5 pb-0 fs-md-5 m-md-5 mb-md-0">
              I never get asked about how to use Zoom - people just get accounts
              and I never hear from them again, all I see is the usage on the
              dashboard go up continuously.
            </p>
            <p className="fw-bold fs-6 pt-3">GREG MARTIN, DIRECTOR OF NASDAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Plans;
