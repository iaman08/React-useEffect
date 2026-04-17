import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get('api/products', (req, res) => {

    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 100
        },
        {
            id: 2,
            name: "Product 2",
            price: 200
        },
        {
            id: 3,
            name: "Product 3",
            price: 300
        }
    ]

    if(req.query.search){
      const filterProducts =  products.filter(product => product.name.includes(req.query.search));
      res.send(filterProducts);
      return;
    }
    setTimeout(() => {
        res.json(products);
    }, 3000);

})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})