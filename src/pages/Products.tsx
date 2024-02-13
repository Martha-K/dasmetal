import { useState, useEffect } from "react";
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
import { mockProduct } from "../mockProducts";

export const Products = () => {
  const [isArmature, setIsArmature] = useState(true);

  useEffect(() => {
    fetch(
      "https://thingproxy.freeboard.io/fetch/https://my.prom.ua/api/v1/products/list",
      {
        headers: {
          Authorization: "Bearer 1feb5dbb6de2fc265a0291bb0f71ee4e7412655e",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log("data.message", data));
  }, []);

  const armatureSelect = () => {
    !isArmature && setIsArmature(true);
  };
  const gridSelect = () => {
    isArmature && setIsArmature(false);
  };

  return (
    <div>
      <ButtonContainer>
        <ButtonStyles data-active={isArmature}>
          <RoundCorner data-active={isArmature}>
            <InnerDiv></InnerDiv>
          </RoundCorner>
          <Div>
            <ButtonWrapper
              onClick={armatureSelect}
              data-image="armature"
            ></ButtonWrapper>
            <ProductName>Armature</ProductName>
          </Div>
        </ButtonStyles>
        <ButtonStyles data-active={!isArmature}>
          <Div>
            <ButtonWrapper onClick={gridSelect} data-image="grid">
              <ProductName>Grid</ProductName>
            </ButtonWrapper>
          </Div>
        </ButtonStyles>
      </ButtonContainer>
      <ProductWrapping>
        {mockProduct?.map((el, index) => (
          <CardWrapper key={`${isArmature ? "armature" : "grid"}_${index}`}>
            {el[isArmature ? "armature" : "grid"]?.map((item) => (
              <Card key={item.id}>
                <h2>{item.name}</h2>
                <CardInfoWrapper>
                  <Img src={item.image} />
                  <div>
                    <p>Ціна: {item.price}</p>
                    <p>{item.inStock ? "в наявності" : "немає в наявності"}</p>
                  </div>
                </CardInfoWrapper>
              </Card>
            ))}
          </CardWrapper>
        ))}
      </ProductWrapping>
    </div>
  );
};
