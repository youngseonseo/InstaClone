package com.example.InstagramClone.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
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
