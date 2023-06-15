package com.example.InstagramClone.dto;

import lombok.Data;

@Data
public class BoardDto {
    private int boardId;
    private String boardContent;
    private String memberName;
    private int memberId;
}
