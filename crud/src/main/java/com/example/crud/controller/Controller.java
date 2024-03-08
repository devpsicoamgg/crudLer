package com.example.crud.controller;


import com.example.crud.models.Persona;
import com.example.crud.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class Controller {

    @Autowired
    private Repository repo;

    @GetMapping()
    public String index(){
        return "Felicidades🎉🎉🎉, estás conectado con la API de LER";
    }

    @GetMapping("api/v1/usuarios")
    public List<Persona> getPersonas(){
        List<Persona> personas = repo.findAll();
        personas.forEach(persona -> persona.setEdad(persona.calcularEdad()));

        return personas;
    }

    @PostMapping("api/v1/crear")
    public String save(@RequestBody Persona persona) {
        if (repo.existsById(persona.getId())) {
            return "😢 La persona con el documento número " + persona.getId() + " ya existe";
        } else {
            repo.save(persona);
            return "Yuju 😉 !!! El usuario ha sido guardado";
        }
    }

    @PutMapping("api/v1/editar/{id}")
    public String update(@PathVariable Long id, @RequestBody Persona persona) {
        Persona updatePersona = repo.findById(id).orElse(null);
        if (updatePersona != null) {
            updatePersona.setNombre(persona.getNombre());
            updatePersona.setFechaNacimiento(persona.getFechaNacimiento());
            repo.save(updatePersona);
            return "el usuario con cédula " + id + " fue editado con éxito 👍";
        } else {
            return " 😯 No se encontró ningún usuario con el documento N°" + id;
        }
    }

    @DeleteMapping("api/v1/borrar/{id}")
    public String borrar(@PathVariable Long id) {
        Optional<Persona> personaOptional = repo.findById(id);
        if (personaOptional.isPresent()) {
            String nombrePersona = personaOptional.get().getNombre();
            repo.deleteById(id);
            return "El usuario " + nombrePersona + "con documento" +id + "ha sido eliminado exitosamente 😏";
        } else {
            return "No se encontró ningún usuario con la cédula " + id;
        }
    }

}
