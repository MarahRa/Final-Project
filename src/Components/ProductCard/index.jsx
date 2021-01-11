import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Slider from "@material-ui/core/Slider";
import "./ProductCard.css";
import Button from "@material-ui/core/Button";

export const sizes = [
  {
    value: 0,
    label: "XS",
  },
  {
    value: 1,
    label: "S",
  },
  {
    value: 2,
    label: "M",
  },
  {
    value: 3,
    label: "L",
  },
  {
    value: 4,
    label: "XL",
  },
];

const valueSizeLabel = (value) => value;

export const ProductCard = ({ addToCart, price, name, img }) => {
  const [size, setSize] = useState(2);
  const [quantity, setQuantity] = useState(0);

  const handleSizeChange = (_, newSize) => {
    setSize(newSize);
  };
  const handleQuantityChange = (_, newQuantity) => {
    setQuantity(newQuantity);
  };
  const handleInputChange = (event) => {
    setQuantity(+event.target.value);
  };
  const addToCartHandler = () =>
    addToCart({
      name,
      quantity,
      size,
      price,
    });
  return (
    <div>
      <h2 className="product-name">{name}</h2>
      <h4 className="product-price">£{price}</h4>
      <div className="product-container">
        <img width="50%" src={img} alt={name} />
        <div className="product-options">
          <Slider
            defaultValue={size}
            valueLabelFormat={valueSizeLabel}
            getAriaValueText={valueSizeLabel}
            aria-labelledby={`${name} quantity`}
            step={null}
            valueLabelDisplay="auto"
            onChange={handleSizeChange}
            marks={sizes}
            max={sizes.length - 1}
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Slider
                value={typeof quantity === "number" ? quantity : 0}
                onChange={handleQuantityChange}
                aria-labelledby={`${name} quantity`}
                max={10}
              />
            </Grid>
            <Grid item>
              <Input
                value={quantity}
                margin="dense"
                onChange={handleInputChange}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 10,
                  type: "number",
                  "aria-labelledby": `${name} quantity`,
                }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            disabled={!quantity}
            onClick={addToCartHandler}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
