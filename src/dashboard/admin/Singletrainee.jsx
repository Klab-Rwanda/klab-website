import profile from "/public/assets/website/images/girl.jpg";


const Singletrainee =() =>{
    return(
        
<section> 

<div className="trainer-title">
    <h1>Trainers Information</h1>
    <p>Dashboard &gt; Members &gt; Trainer &gt; NSABIMANA Issa</p>
</div>
<div className="singletrainer-container">
<div className="trainer-image">
    <img src={profile}alt=""/>
</div>

<div className="trainer-info">
<h2>NSABIMANA Issa</h2>
<div className="techup-skills"><p>TechUp Skills trainer</p></div>
<p>mansurissa@gmail.com</p>
<p>0788460904</p>
</div>
</div>

<div className="trainer-paragraph">
    <h3>Klab TechUp Skills</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, excepturi harum odio reprehenderit sint modi vel hic odit soluta quas blanditiis. Ullam quasi quaerat, cumque doloremque molestiae omnis doloribus quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore explicabo exercitationem incidunt cupiditate praesentium a debitis porro tempora asperiores. Modi quasi a fuga deleniti velit aperiam inventore cum nobis animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, earum consequuntur! Quibusdam quidem eveniet fuga enim, fugiat ratione minima saepe, itaque veritatis eaque sed error. Accusantium sapiente aut sunt voluptas.

    </p>
    <h3>Cohort5</h3>
</div>

 </section>
  

    );
}
export default Singletrainee;