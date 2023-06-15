package com.example.InstagramClone.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class MemberDto {
    @NotEmpty
    private String id;
    @NotEmpty
    private String password;
}
