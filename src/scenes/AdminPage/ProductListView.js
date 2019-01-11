import React from "react";
import ProductLink from "../../components/ProductLink/AdminProductLink/AdminProductLink";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid";

const ADD_PRODUCT = "ADD_PRODUCT";

const styles = {
  btn: {
    paddingBottom: 10,
    paddingLeft: 10
  }
};

const ProductListView = ({ products, openModal, deleteProduct }) => (
  <Grid container>
    <Grid item xs={12} style={styles.btn}>
      <Button
        variant={"contained"}
        color="primary"
        mini
        aria-label="Add"
        onClick={() => openModal(ADD_PRODUCT)}
      >
        add new
      </Button>
    </Grid>
    <Grid item xs={12}>
      {products.map(({ title, id, image }) => (
        <ProductLink
          key={id}
          id={id}
          title={title}
          deleteProduct={deleteProduct}
          image={image}
        />
      ))}
    </Grid>
  </Grid>
);

export default ProductListView;
