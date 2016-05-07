package es.tiburon.code.product;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductRepository pRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET )
	public Collection<Product> getProducts(){
		return pRepository.findAll();
	}
	
	@RequestMapping(value ="/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Product newProduct(@RequestBody Product producto){
		
		pRepository.save(producto);
		return producto;
	}
	
	
}
