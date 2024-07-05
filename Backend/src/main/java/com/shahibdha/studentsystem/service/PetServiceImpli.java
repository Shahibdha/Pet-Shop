package com.shahibdha.studentsystem.service;

import com.shahibdha.studentsystem.ResourceNotFoundException;
import com.shahibdha.studentsystem.model.Pet;
import com.shahibdha.studentsystem.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetServiceImpli implements PetService {

    @Autowired
    private PetRepository petRepository;

    @Override
    public Pet savePet(Pet pet) {
        return petRepository.save(pet);
    }

    @Override
    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    @Override
    public Pet updatePet(Long id, Pet updatePet) {
        Pet pet = petRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No pet for the given id: " + id)
        );
        pet.setName(updatePet.getName());
        pet.setAddress(updatePet.getAddress());
        pet.setDes(updatePet.getDes());

        return petRepository.save(pet);
    }

    @Override
    public void deletePet(Long Id) {
        Pet pet = petRepository.findById(Id).orElseThrow(
                () -> new ResourceNotFoundException("No pet for the given id: " + Id)
        );

        petRepository.deleteById(Id);
    }
}
