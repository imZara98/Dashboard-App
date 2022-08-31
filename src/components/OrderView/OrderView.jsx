import styles from './orderView.module.css';

const OrderView = (props) => {
    return ( 
        <div className={styles.orderView}>
            <div className={styles.orders}>
                <span>{props.icon}</span>
            </div>
            <div className={styles.orderDate}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.date}>{props.date}</p>
            </div>
        </div>
     );
}
 
export default OrderView;