package com.example.InstagramClone.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Board {
    @Id
    public int id;

    public String boardContent;

    public String boardImg;

    public String memberName;

    public int memberId;
}
