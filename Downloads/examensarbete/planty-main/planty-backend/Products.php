<?php 

require_once __DIR__ . '/ProductClass.php';
require_once __DIR__ . '/ProductsDB.php';


$products_db = new ProductsDB();
$products = $products_db->get_all_products();
foreach ($products as $product) : ?>

<head>
    <title>Products</title>
</head>


<a href="/planty-backend/product.php?id=<?= $product->id ?>">

<div class="product-container">
  <img src="<?= $product->img_url ?>" width="350" height="300" alt="Product image">
<br>  <b><?= $product->title ?></b>
  <br><span><?= $product->description ?></span>
  <i><?= $product->price ?> kr</i> <br>

</div>

<?php
endforeach;
