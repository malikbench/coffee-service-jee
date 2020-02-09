package com.jee.coffeeserviceapp.services.product;

import com.jee.coffeeserviceapp.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    Product saveProduct(Product product);
    Product findByName(String name);
    List<Product> findAllProducts();
    Product addProduct(Long productId, Long quantity);

}
