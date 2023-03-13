import PartnerLogo from "/public/assets/website/images/ictChamber.svg";

const SinglePartner = () => {
  return (
    <section className="single-partner-container">
      <div className="partner-img">
        <img src={PartnerLogo} alt="" />
      </div>
      <div className="partner-info">
        <h1>ICT Chamber</h1>
        <p>info@ictchamber.rw</p>
        <p>+250 781 161 487</p>
      </div>
      <div className="partner-about">
        <h2>About</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit deleniti explicabo blanditiis consectetur fuga distinctio voluptate placeat ut temporibus perspiciatis, consequatur molestias optio voluptatem at, accusamus neque natus vero.</p>
      </div>
    </section>
  );
}

export default SinglePartner;
