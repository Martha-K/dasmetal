import { Div } from "./ProductsStyles";
import { mockProduct } from "../mockProducts";

export const Products = () => {
  return (
    <Div>
      {mockProduct?.map((el) => (
        <div key={Object.keys(el)[0]}>
          <h2>{(el?.armature || el?.grid)?.[0]?.name}</h2>
          {(el?.armature || el?.grid).map((el) => (
            <div key={el.name}>
              <h3>{el.name}</h3>
              <img src={el.image} alt="product" />
              <p>Ціна: {el.price}</p>
              {el.inStock && <p>В наявності</p>}
            </div>
          ))}
        </div>
      ))}
    </Div>
  );
};
