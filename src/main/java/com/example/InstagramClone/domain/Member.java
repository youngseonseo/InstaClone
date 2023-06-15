package com.example.InstagramClone.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Entity
public class Member {
    @Id
    public Long id;
    @NotEmpty
    public String memberName;
    @NotEmpty
    public String loginId;
    @NotEmpty
    public String password;
}
