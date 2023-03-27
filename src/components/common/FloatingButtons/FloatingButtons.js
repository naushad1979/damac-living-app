import "./FloatingButtons.scss";
import Image from "../../ui/image/Image";

const FloatingButtons = () => {
  return (
    <section>
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        className="float"
        target="_blank"
      >
        <i className="my-float">
            <Image src="/images/floatButtons/Group 8333.svg"/>          
        </i>
      </a>
      <a
        href="https://linktr.ee/blog/how-to-find-your-twitter-url/#:~:text=Open%20a%20web%20browser%20and,URL%20as%20twitter.com%2Fusername"
        className="float2"
        target="_blank"
      >
        <i className="my-float">         
          <Image src="/images/floatButtons/Group 8202.svg"/> 
        </i>
      </a>
    </section>
  );
};
export default FloatingButtons;
