package com.example.resource;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bean.user;
import com.example.exception.UserNotFoundException;
import com.example.repository.UserRepository;



@RestController
@RequestMapping("/api")
public class UserResource {
	
	@Autowired
	private UserRepository userRepository;
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users")
	public List<user> getAllUsers(){
		return userRepository.findAll();	
	}
	//@CrossOrigin(origins = "http://localhost:4200")
//	@GetMapping("/Users/{id}")
//	public ResponseEntity<Optional<user>> getUserById1(@PathVariable Long id){
//	Optional<user> user= userRepository.findById(id);
//	if(!user.isPresent()) {
//		throw new UserNotFoundException("The user with id- "+id+"does not exists");
//	}
//		return new ResponseEntity<>(user,HttpStatus.FOUND);
//	}
//	
	
//	@GetMapping("/Users/address/{address}")
//	public ResponseEntity<List<user>> getUserByAddress(@PathVariable String address){
//		List<user> user= userRepository.findByAddress(address);
//	return new ResponseEntity<>(user,HttpStatus.FOUND);
//}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users/{id}")
    public Optional<user> getUserById(@PathVariable Long id){
    	return userRepository.findById(id);
    	
    }
    
    @GetMapping("/users/name/{username}")
    public Optional<user> getUserByName(@PathVariable String  username){
    	return userRepository.findByUsername(username);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/users/{id}")
    public void deletUser(@PathVariable long id) {
   	userRepository.deleteById(id);
   }
    
    @PostMapping("/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public user createUser(@Valid @RequestBody user user) {
   	user savedUser = userRepository.save(user);
   	return  savedUser;
   }
    @PostMapping("/users/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Object> updateUser(@Valid @RequestBody user user,@PathVariable Long id){
    	userRepository.save(user);
    	return ResponseEntity.noContent().build();
    }
}
