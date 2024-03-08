package com.example.crud.models;


import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Setter
@Getter
@Entity
@Data
public class Persona {

    @Id
    @Column(name = "doc_id", unique = true, nullable = false)
    @Getter
    private Long id;

    @Column(nullable = false)
    @Setter
    @Getter
    private String nombre;

    @Column(nullable = false)
    @Setter
    @Getter
    private Date fechaNacimiento;

    private String edad;
    public String calcularEdad() {
        LocalDate fechaNacimientoLocal = this.fechaNacimiento.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        LocalDate ahora = LocalDate.now();
        Period periodo = Period.between(fechaNacimientoLocal, ahora);

        long mesesTotales = ChronoUnit.MONTHS.between(fechaNacimientoLocal, ahora);
        long anios = mesesTotales / 12;
        long meses = mesesTotales % 12;

        return anios + " años y " + meses + " meses";
    }

}


