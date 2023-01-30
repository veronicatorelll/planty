
<?php 
 header("Access-Control-Allow-Origin: *");


require_once __DIR__ . '/ProductClass.php';
require_once __DIR__ . '/ProductsDB.php';


$products_db = new ProductsDB();

$id = (int) isset($_GET["id"]) ? $_GET["id"] : null;
$product = $products_db->get_single_product($id);
$method = $_SERVER['REQUEST_METHOD'];
if($_SERVER['REQUEST_METHOD'] == 'POST') 
return ($product);

?>
