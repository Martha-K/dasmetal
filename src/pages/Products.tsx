import React, { useState } from "react";
import {
  Img,
  CardWrapper,
  Card,
  ButtonWrapper,
  ButtonContainer,
  ButtonStyles,
  Div,
  ProductName,
  CardInfoWrapper,
  ProductWrapping,
} from "./ProductsStyles";
import { mockProduct } from "../mockProducts";

export const Products = () => {
  const [isArmature, setIsArmature] = useState(true);
  console.log("isArmature", isArmature);
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
        {mockProduct?.map((el) => (
          <CardWrapper>
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
