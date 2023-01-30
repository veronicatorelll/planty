
<?php 
 header("Access-Control-Allow-Origin: *");


require_once __DIR__ . '/ProductClass.php';
require_once __DIR__ . '/ProductsDB.php';


$products_db = new ProductsDB();
$products = $products_db->get_all_products();

$method = $_SERVER['REQUEST_METHOD'];
if($_SERVER['REQUEST_METHOD'] == 'POST') 
echo ($id);







?>


