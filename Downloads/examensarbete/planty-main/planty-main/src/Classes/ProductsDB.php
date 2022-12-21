<?php

require_once __DIR__ . '/Database.php';
require_once __DIR__ . '/ProductClass.php';

class ProductsDB extends Database{


  public function get_all_products()
  {
    $query = "SELECT * FROM products";
    $result = mysqli_query($this->conn, $query);
    $db_products = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $products = [];

    foreach ($db_products as $db_product) {

      $db_id = $db_product["id"];
      $db_title = $db_product["title"];
      $db_description = $db_product["description"];
      $db_price = $db_product["price"];
      $db_img_url = $db_product["img-url"];



      $products[] = new Product($db_title, $db_description, $db_price, $db_img_url, $db_id);
    }
    

    return $products;

  }

  public function get_one_product($id)
  {
    $query = "SELECT * FROM products WHERE id = ?";

    $stmt = mysqli_prepare($this->conn, $query);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    $result = $stmt->get_result();
    $db_product = mysqli_fetch_assoc($result);

    $id = $db_product["id"];
    $title = $db_product["title"];
    $description = $db_product["description"];
    $price = $db_product["price"];
    $img_url = $db_product["img-url"];


    $product = new Product($title, $description, $price, $img_url, $id);

    return $product;
  }
}