import { useState, useEffect } from "react";
import { CardModal } from "../components/CardModal/CardModal";
import {
  Img,
  CardWrapper,
  Card,
  ButtonWrapper,
  ButtonContainer,
  ButtonStyles,
  RoundCorner,
  InnerDiv,
  Div,
  ProductName,
  CardInfoWrapper,
  ProductWrapping,
} from "./ProductsStyles";
import { use } from "i18next";

const token = process.env.REACT_APP_TOKEN;

export type Product = {
  id: string;
  name: string;
  price: number;
  main_image: string;
  currency: string;
  presence: string;
  description: string;
  description_multilang: { ru: string; uk: string };
  group: { name: string };
};

type Products = Product[];

export const Products = () => {
  const [isArmature, setIsArmature] = useState(true);
  const [selectedCard, setSelectedCard] = useState<null | Product>(null);
  const [data, setData] = useState<Products>([]);

  useEffect(() => {
    fetch(
      "https://thingproxy.freeboard.io/fetch/https://my.prom.ua/api/v1/products/list?limit=50",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data.products));
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCard(null);
      }
    };

    if (selectedCard !== null) {
      document.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedCard]);

  const armatureSelect = () => {
    !isArmature && setIsArmature(true);
  };

  const gridSelect = () => {
    isArmature && setIsArmature(false);
  };

  const isOpenModal = (id: string) => {
    const card = data.find((el) => el.id === id);
    card && setSelectedCard(card);
  };

  return (
    <div>
      <ButtonContainer>
        <ButtonStyles data-active={isArmature} onClick={armatureSelect}>
          <RoundCorner data-active={isArmature}>
            <InnerDiv />
          </RoundCorner>
          <Div>
            <ButtonWrapper data-image="armature"></ButtonWrapper>
            <ProductName>
              <p>АРМАТУРА</p>
            </ProductName>
          </Div>
          <RoundCorner data-active={isArmature} data-isright={true}>
            <InnerDiv data-isright={true} />
          </RoundCorner>
        </ButtonStyles>
        <ButtonStyles data-active={!isArmature} onClick={gridSelect}>
          <RoundCorner data-active={!isArmature}>
            <InnerDiv />
          </RoundCorner>
          <Div>
            <ButtonWrapper data-image="grid"></ButtonWrapper>
            <ProductName>
              <p>СІТКА</p>
            </ProductName>
          </Div>
          <RoundCorner data-active={!isArmature} data-isright={true}>
            <InnerDiv data-isright={true} />
          </RoundCorner>
        </ButtonStyles>
      </ButtonContainer>
      <ProductWrapping>
        <CardWrapper>
          {data
            .filter(
              (item) =>
                item.group.name ===
                (isArmature ? "Арматура" : "Сетка" || "Корневая группа")
            )
            .map((el) => (
              <Card key={el.id} onClick={() => isOpenModal(el.id)}>
                <h2>{el.name}</h2>
                <CardInfoWrapper>
                  <Img src={el.main_image} />
                  <div>
                    <p>
                      Ціна: {el.price} {el.currency && "грн"}/м
                    </p>
                    <p>
                      {el.presence === "available"
                        ? "B наявності"
                        : "Hемає в наявності"}
                    </p>
                  </div>
                </CardInfoWrapper>
              </Card>
            ))}
        </CardWrapper>
        {selectedCard && <CardModal card={selectedCard}></CardModal>}
      </ProductWrapping>
    </div>
  );
};
