package com.jee.coffeeserviceapp.services.product;

import com.jee.coffeeserviceapp.model.Product;
import com.jee.coffeeserviceapp.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return this.productRepository.save(product);
    }

    @Override
    public Product findByName(String name) {
        return this.productRepository.findByName(name).orElse(null);
    }

    @Override
    public List<Product> findAllProducts() {
        return this.productRepository.findAll();
    }

    @Override
    public Product addProduct(Long productId, Long quantity) {
        return null;
    }


}
