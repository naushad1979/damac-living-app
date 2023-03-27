import ImageButton from "../../ui/button/ImageButton";
import SocialMediaLinksData from "./SocialMediaLinksData";
import styles from "./SocialMediaLinks.module.scss";

const SocialMediaLinks=()=>{
    const{mediaLinks} = SocialMediaLinksData();

    return(
        <div className={styles.align}>
            {mediaLinks.map((media)=>
            <ImageButton
            image= {media.image}
            width= {media.width}
            height= {media.height}
          /> 
            )}
        </div>
    )
}

export default SocialMediaLinks;