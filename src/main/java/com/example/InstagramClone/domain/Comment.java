package com.example.InstagramClone.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Comment {

    @Id
    public int id;

    public int commenterId;

    public String commenterName;

    public String commentContent;
}
