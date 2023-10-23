import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./styles.css";

export const PurchasedItemsPage = () => {
  const { purchasedItems, addToCart, getCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="purchased-items-page">
      <h1> Previously Purchased Items Page </h1>

      <div className="purchased-items">
        {purchasedItems.map((item) => {
          const cartItemCount = getCartItemCount(item._id);
          return (
            <div key={item._id} className="item">
              <h3> {item.productName} </h3>
              <img src={item.imageURL} alt={item.productName} />
              <p> ${item.price} </p>
              <button onClick={() => addToCart(item._id)}>
                Purchase Again {cartItemCount > 0 && <> ({cartItemCount})</>}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
