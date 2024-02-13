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


const token = process.env.REACT_APP_TOKEN

export const Products = () => {
  const [isArmature, setIsArmature] = useState(true);

  useEffect(() => {
    fetch(
      "https://thingproxy.freeboard.io/fetch/https://my.prom.ua/api/v1/products/list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
