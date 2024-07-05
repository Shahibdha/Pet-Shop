package com.shahibdha.studentsystem.Controller;

import com.shahibdha.studentsystem.model.Pet;
import com.shahibdha.studentsystem.repository.PetRepository;
import com.shahibdha.studentsystem.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pet")
@CrossOrigin
public class PetController {
    @Autowired
    private PetService petService;

    @Autowired
    private PetRepository petRepository;

    @PostMapping("/add")
    public String add(@RequestBody Pet pet){
        petService.savePet(pet);
        return "New pet is added";
    }

    @GetMapping("/getAll")
    public List<Pet> getAllPets(){
        return petService.getAllPets();
    }

    @GetMapping("/getAll/{id}")
    public Pet getUserById(@PathVariable Long id) {
        return petRepository.findById(id)
                .orElseThrow(() -> new PetNotFoundException(id));
    }

    @PutMapping("{id}")
    public ResponseEntity<Pet> updatePet(@PathVariable("id") Long id, @RequestBody Pet updatePet){
        Pet pet = petService.updatePet(id, updatePet);
        return ResponseEntity.ok(pet);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePet(@PathVariable("id") Long Id){
        petService.deletePet(Id);
        return ResponseEntity.ok("pet deleted successfully");
    }

}
