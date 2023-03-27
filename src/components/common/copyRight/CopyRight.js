import styles from "./CopyRight.module.scss";

const CopyRight = ()=>{
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles.maindiv}>
           <span className={styles.span}>© Copyright {currentYear}. DAMAC Properties. All rights reserved.</span> 
        </div>
    )
}

export default CopyRight;