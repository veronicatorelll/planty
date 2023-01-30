<?php
 header("Access-Control-Allow-Origin: *");
 

require_once __DIR__ . '/Database.php';
require_once __DIR__ . '/ProductClass.php';

class ProductsDB extends Database{


  public function get_all_products()
  {
    $query = "SELECT * FROM products";
    $result = mysqli_query($this->conn, $query);


    $db_products = mysqli_fetch_all($result, MYSQLI_ASSOC);  
        
    $json_products = json_encode($db_products);  
    header('Content-Type: application/json');
  
   
    echo $json_products;  

  }

  public function get_single_product($id)
  {
    $query = "SELECT * FROM products WHERE id = ?";

    $stmt = mysqli_prepare($this->conn, $query);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    $result = $stmt->get_result();
    $db_product = mysqli_fetch_assoc($result);

  
    $json_product = json_encode($db_product); 
    header('Content-Type: application/json');
    echo $json_product;  

  }
}