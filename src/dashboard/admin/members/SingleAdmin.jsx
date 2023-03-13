import Profile from "/public/assets/website/images/girl.jpg";

const SingleAdmin = () => {
  return (
    <section className="single-partner-container">
      <div className="partner-img">
        <img src={Profile} alt="" />
      </div>
      <div className="partner-info">
        <h1>UMURUNGI Nicole</h1>
        <p>umurunginicole@gmail.com</p>
        <p>+250788746373</p>
      </div>
      <div className="partner-about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit
          deleniti explicabo blanditiis consectetur fuga distinctio voluptate
          placeat ut temporibus perspiciatis, consequatur molestias optio
          voluptatem at, accusamus neque natus vero.
        </p>
      </div>
    </section>
  );
}

export default SingleAdmin
