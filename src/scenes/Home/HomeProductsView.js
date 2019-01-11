import React from "react";
import Grid from "@material-ui/core/Grid";
import UserProductLink from "../../components/ProductLink/UserProductLink/UserProductLink";

const HomeProductsView = ({ products, onAddToCart }) => (
  <Grid
    container
    spacing={16}
    style={{ maxWidth: "100%", margin: 0, marginBottom: 100, marginTop: 30 }}
    justify={"center"}
  >
    <Grid item xs={10} style={{ paddingBottom: 10 }}>
      <Grid container spacing={24}>
        {products.map(item => (
          <UserProductLink
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
            item={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default HomeProductsView;
