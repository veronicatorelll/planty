<?php

class Product
{
    public $id;
    public $title;
    public $description;
    public $price;
    public $img_url;

    public function __construct($title, $description, $price, $img_url, $id = 0)
    {
        if ($id > 0) {
            $this->id = $id;
        }

        $this->title = $title;
        $this->description = $description;
        $this->price = $price;
        $this->img_url = $img_url;
    }

    public function __toString(){
        return  "{$this -> title}  
                 ({$this -> description}) 
                 ({$this -> price})";

    }

}