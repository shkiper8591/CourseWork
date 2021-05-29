package ru.mirea.cursework.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(schema = "public",name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    int password;
    int confirm;
    String username;
    String mail;
}
