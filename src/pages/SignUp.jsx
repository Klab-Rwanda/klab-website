import Navbar from "../Components/Navs/Navbar"
import "../../src/Components/styles/HomeWelcome.css";

const SignUp = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative p-4 py-12">
      <Navbar />
        <div className=" flex w-4/5 bg-blue rounded-xl mx-auto shadow-lg ">
          <div className=" welcomeBg w-1/2 ">
            <h2 className="font-bold text-white">Glad to see you!</h2>
          </div>
          <div className="w-1/2">
            <h2>Sign up here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              doloribus in vero nihil, voluptates praesentium quasi sunt
              nesciunt. Officia fugiat praesentium voluptates non, modi
              aspernatur repellendus saepe? Molestiae, temporibus architecto?
            </p>
          </div>
        </div>
      </div>
  );
}

export default SignUp
