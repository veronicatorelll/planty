<?php 
require_once __DIR__ . '/../classes/ProductClass.php';
require_once __DIR__ . '/../classes/ProductsDB.php';

$products_db = new ProductsDB();
$id = (int) isset($_GET["id"]) ? $_GET["id"] : null;
$product = $products_db->get_one_product($id);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Page</title>
</head>
<body>
<div class="productinfo">
    <img src="<?= $product->img_url ?>" width="150" height="300" alt="Product image">

    <p>
        <b>Id:</b>
        <?= $product->id ?>
    </p>

    <b>Name:</b>
    <?= $product->name ?>
    </p>

    <b>Description:</b>
    <?= $product->description ?>
    </p>

    <b>Price:</b>
    <?= $product->price ?>
    </p>

</div>
</body>
</html>