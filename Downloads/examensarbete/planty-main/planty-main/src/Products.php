<?php 

require_once __DIR__ . '/../classes/ProductClass.php';
require_once __DIR__ . '/../classes/ProductsDB.php';


$products_db = new ProductsDB();
$products = $products_db->get_all_products();
foreach ($products as $product) : ?>

<head>
    <title>Products</title>
</head>


<a href="/planty-main/php/pages/product.php?id=<?= $product->id ?>">

<div class="product-container">
  <img src="<?= $product->img_url ?>" width="150" height="300" alt="Product image">
  <b><?= $product->title ?></b>
  <i><?= $product->price ?> kr</i> <br>

</div>

<?php
endforeach;
