package com.example.InstagramClone.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
public class Board {
    @Id
    public int id;

    public String boardContent;

    public String memberName;

    public int memberId;
}
