import emily from '../images/image-emily.jpg'
import jennie from '../images/image-jennie.jpg'
import thomas from '../images/image-thomas.jpg'

function Section2(){
    return(
        <section className="section2">
            <div className="emily">
                <img src={emily} alt="" />
                <p> We put our trust in Sunnyside and they <br /> delivered, making sure our needs were met  <br />and deadlines were always hit.</p>
                <h3>Emily R.</h3>
                <h2 style={{color:"grey"}}>Marketing Director</h2>
            </div>
            <div className="thomas">
                <h1>Client testimonials</h1>
                <img src={thomas} alt="" />
                <p>Sunnyside’s enthusiasm coupled with their <br /> keen interest in our brand’s success made it  <br />a satisfying and enjoyable experience.</p>
                <h3>Thomas S.</h3>
                <h2 style={{color:"grey"}}>Chief Operating Officer</h2>
            </div>
            <div className="jennie">
                <img src={jennie} alt="" />
                <p>Incredible end result! Our sales increased  <br />over 400% when we worked with Sunnyside. <br /> Highly recommended!</p>
                <h3>Jennie F.</h3>
                <h2 style={{color:"grey"}}>Business Owner</h2>
            </div>
        </section>
    );
}

export default Section2;