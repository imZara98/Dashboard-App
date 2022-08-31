import styles from "./Feature.module.css";

const Feature = ({icons,property,count,discount,timing}) => {
    return ( 
        <div className={styles.feature}>
            <div className={styles.item}>
                <div className={styles.header}>
                    <div className={styles.icons}>
                        <span>{icons}</span>
                    </div>
                    <p className={styles.property}>{property}</p>
                    <p className={styles.count}>{count}</p>
                </div>
                <div className={styles.footer}>
                    <p className={styles.discount}>{discount}</p>
                    <p className={styles.timing}>{timing}</p>
                </div>
            </div>  
        </div>
        
    );
}
 
export default Feature;