import React from 'react'
import img from '../../assets/IctChamber.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/AppProvider'

const PatnerCard = () => {

  const {partners} = useContext(AuthContext);

  return (
    <>{partners.map((item) => {
      return (
        <div className="bg-slate-300 w-full h-full rounded-3xl flex justify-center items-center mx-auto">
          <img src={item.profile} alt="" className=" w-20 rounded-xl" />
        </div>
      );
    })}
    </>
  );
}

export default PatnerCard