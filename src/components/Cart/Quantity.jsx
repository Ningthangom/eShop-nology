import styles from "./Cart.module.scss";

const Quantity = ({ AddQuantity, decreaseQuantity, quantity }) => {
    return (
        <div className={styles.Quantity}>
            <button onClick={AddQuantity} className="btn btn-primary">
                <span>&#43;</span>
            </button>
            <div className={styles.Quantity__header}>
                <h3> {quantity} </h3>
            </div>

            <button onClick={decreaseQuantity} className="btn btn-secondary">
               
                <span>&#8722;</span>
            </button>
        </div>
    );
};

export default Quantity;
