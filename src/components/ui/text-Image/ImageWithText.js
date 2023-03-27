import styles from "./ImageWithText.module.scss";

const ImageWithText = (props) => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={props.src} />
        <img
          src={props.src}
          style={{
            borderBottomRightRadius: props.cornerRadius,
            height: props.height,
            width: props.width,
          }}
        />
      </picture>
      <div className={styles.header}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subtitle}>{props.subTitle}</div>        
      </div>
    </article>
  );
};

export default ImageWithText;
