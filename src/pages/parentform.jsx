
import Navbar from "../Components/Navs/Navbar";
import Footer from "../Components/sections/Footer";
import LineImg from "../assets/Vector.svg";
import { useState } from "react";
import { kidApplicationSchema } from "../validations/Parentformvalidation";
import axios from "axios";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const Parentform = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(kidApplicationSchema),
    // defaultValues:{
    //   email:"",
    //   phonenumber:"",
    //   kidfullname: "",
    //   parentfullname:"",
    //   district:"",
    //   sector:"",
    //   cell:"",
    //   school:"",
    //   class:"",
    //   textarea:"",
    //   gender:"",
    //   age:"",
    //   date:"", 
    //   other:"",
    //   school:"",
    // },
    
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", data.email);

    console.log(formData.get("email"));

  }

  return (
    <div>
      
      <div className="formu-container">
        <div className="xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-4/5 w-full flex flex-col items-start gap-2">
          <h1 className="font-bold text-base">Application Form</h1>
          <img src={LineImg} alt="VectorImage" className="w-1/3" />
          <p className="w-full font-normal text-slate-800 text-sm xl:text-base lg:text-base md:text-base sm:text-sm">
            kLab is an open source for all parents to Enroll their kids in any programs available.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="first-grid">
            <div className="name-input input">
              <label >Kid's Fullname</label>
              <input
              id="kidfullname" 
              type="text"  
              placeholder="John Doe" 
              {...register("kidfullname")}
              className={errors.kidfullname ? "input-err" : ""}
              />
              {errors.kidfullname  && (
                <p className="text-red-400">{errors.kidfullname}</p>
              )}
            </div>
            <div className="name-input input">
              <label >Parent's Fullname</label>
              <input 
              id="parentfullname"
              type="text"
              
              placeholder="John Doe"
                {...register("parentfullname")}
              className={errors.parentfullname ? "input-err" : ""}
              />
              {errors.parentfullname  &&(
                <p className="text-red-400">{errors.parentfullname}</p>
              )}
            </div>
            <div className="email-input input">
              <label htmlFor="email">
                Parent's Email
              </label>
              <input
              id="email" 
              type="text" 
              placeholder="example@gmail.com" 
              {...register("email")}
              className={errors.email ? "input-err " : ""} 
               />
              {errors.email && (
                <p className="text-red-400">{errors.email}</p>
              )}
            </div>
            <div className="phone-input input">
              <label htmlFor="phonenumber">Parent's Phone number</label>
              <input 
              {...register("phonenumber")}
          
              className={errors.phonenumber ? "input-err" : ""}
              id="phonenumber"
              type="number"
              placeholder="(+250) 780693425"
              />
              {errors.phonenumber && (
                <p className="text-red-400">{errors.phonenumber}</p>
              ) }
            </div>
            
          </div>
          <div className="second-grid">
            <div className="gender-input input">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <div className="radios">
                <input 
                name="gender"
                {...register("gender")}
                type="radio"   
                
          
                className={errors.gender ? "input-err " : ""} 
                />
                
                <label htmlFor="Male">Male</label>
                <br />

                <input 
                name="gender"
                {...register("gender")}
                type="radio"   
                className={errors.gender ? "input-err " : ""} 
                />
                
                <label htmlFor="Female">Female</label>
                {errors.gender  && (
                <p className="text-red-400">{errors.gender}</p>
              )}
              </div>
            </div>
            
            <div className="gender-input input">
              <label  className="form-label">
                Age range
              </label>
              <div className="radios">
                <input 
                name="age"
                {...register("age")}
                type="radio"   
                className={errors.age ? "input-err " : ""} 
                />
               
                <label>1 - 5</label>
                <br />

                <input 
                name="age"
                {...register("age")}
                type="radio"   
                
                className={errors.age ? "input-err " : ""} 
                />
                
                <label>5 - 10</label>
                {errors.age  &&  (
                <p className="text-red-400">{errors.age}</p>
              )}
              </div>
            </div>
            <div className="birthday-input input">
              <label htmlFor="birthdate">Date of Birth</label>
              <input 
              type="date"  
              {...register("date")} 
              className={errors.date ? "input-err " : ""}
              />
              {errors.date  &&(
                <p className="text-red-400">{errors.date}</p>
              )}
            </div>
          </div>

          <div className="links">
          <div className="input">
                <label>District</label>
                <input
                id="district" 
                type="text" 
                placeholder="Type your District" 
                {...register("district")}
                className={errors.district ? "input-err " : ""} 
               />
               {errors.district  && (
                <p className="text-red-400">{errors.district}</p>
              )}
              </div> 
              <div className="input">
                <label>Sector</label>
                <input
                id="sector" 
                type="text" 
                placeholder="Type your Sector"
                {...register("sector")}
                className={errors.sector ? "input-err " : ""}
                 />
                 {errors.sector && (
                <p className="text-red-400">{errors.sector}</p>
              )}
              </div>
              <div className="input">
                <label>Cell</label>
                <input 
                id="cell"
                type="text" 
                placeholder="Type your Cell"
                {...register("cell")}
                className={errors.cell? "input-err " : ""}
                 />
                 {errors.cell  && (
                <p className="text-red-400">{errors.cell}</p>
              )}
              </div> 
          </div>
          
          
            <div className="xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-4/5 w-full flex flex-col items-start gap-2">
          <h1 className="font-bold text-base">Education Background</h1>
          <img src={LineImg} alt="VectorImage" className="w-1/3" />
          
        </div>
          <div className="education-background">
            <div className="occupation input">
              <label className="form-label">Is He/She a student?</label>
              <div className="radios">
              
                <input
                 name="other"
                 {...register("other")}
                type="radio" 
                className={errors.other ? "input-err " : ""}
                 />
                <label htmlFor="Home Schooled">Home Schooled</label>
                <br />

                
                <input 
                 name="other"
                 {...register("other")}
                type="radio" 
                className={errors.other ? "input-err " : ""}
                 />
                <label htmlFor="student">student</label>
                <br />
                
                <input 
                 name="other"
                 {...register("other")}
                type="radio" 
                className={errors.other ? "input-err " : ""} 
                />
                <label htmlFor="other">other</label>
                {errors.other  && (
                <p className="text-red-400">{errors.other}</p>
              )}
              </div>
            </div>
            <div className="level input">
              <label className="form-label">Education level</label>
              <div className="radios">
                <input 
                type="radio" 
                name="school"  
                {...register("school")} 
                className={errors.school ? "input-err " : ""}
                />
                <label htmlFor="Creshe">Creshe</label>
                <br/>
                <input 
                type="radio" 
                name="school"   
                {...register("school")}
                className={errors.school ? "input-err " : ""}
                 />
                <label htmlFor="Nursary">Nursary</label>
                <br />
                <input
                type="radio" 
                name="school"  
                {...register("school")} 
                className={errors.school ? "input-err " : ""}
                 />
                <label htmlFor="Primary">Primary</label>
                {errors.school  && (
                <p className="text-red-400">{errors.school}</p>
              )}
              </div>
            </div>
            <div className="links">
            <div className="input">
              <label>Is He/She from which school?</label>
              <input 
              id="school"
              type="text" 
              placeholder="Type the school"
              {...register("school")}
             
              className={errors.school? "input-err " : ""}
               />
               {errors.school  && (
                <p className="text-red-400">{errors.school}</p>
              )}
            </div>
            </div>
            </div>

            <div className="school">
            <div className="input">
              <label>Year of study</label>
              <input
              id="class" 
              type="text" 
              placeholder="Type the class or grade"
              {...register("class")}
              className={errors.class? "input-err " : ""}
               />
               {errors.class && (
                <p className="text-red-400">{errors.class}</p>
              )}
            </div>
          </div>
          
          <div className="tech-entrepreneur mt-5">
            <h1 className="font-bold text-base">Kid's More Details</h1>
            <img src={LineImg} alt="VectorImage" className="w-40" />
            <div className="ent-desc mt-5">
              <label>
                 Please Share more about your kid in not less than 200 words.
              </label>
              <textarea 
              id="textarea" 
              type="text" 
              placeholder="Type Your answer here "
              {...register("textarea")}
              className={errors.textarea? "input-err " : ""}></textarea>
              {errors.textarea && (
                <p className="text-red-400">{errors.textarea}</p>
              )}
            </div>
          </div>

          <div className="submit-info mt-8">
            
            <p className="mt-5 mb-5">
              By submitting your application, You hereby declare that the
              information provided is true and correct, You also understand that any
              willful dishonesty will lead to disqualification.
            </p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Parentform
