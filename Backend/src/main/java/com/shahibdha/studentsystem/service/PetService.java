package com.shahibdha.studentsystem.service;

import com.shahibdha.studentsystem.model.Pet;

import java.util.List;

public interface PetService {
    public Pet savePet(Pet pet);
    public List<Pet> getAllPets();

    Pet updatePet(Long Id, Pet updatePet);
    void deletePet(Long Id);

}

