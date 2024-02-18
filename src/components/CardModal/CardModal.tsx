import i18n from "i18next";
import { Product } from "../../pages/Products";
import { ModalWrapper, ProductName } from "./CardModalStyles";

export const CardModal = ({ card }: { card: Product }) => {
  const currentLang = i18n.languages[0];

  return (
    <ModalWrapper>
      <ProductName>{card.name}</ProductName>
      <img src={card.main_image} alt="Product" />
      <div>
        <p>
          Ціна: {card.price} {card.currency && "грн/м"}
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: card.description }}></div>
    </ModalWrapper>
  );
};
