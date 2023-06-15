package com.example.InstagramClone.dto;

import lombok.Data;

@Data
public class CommentDto {
    private int commentId;
    private int commenterId;
    private String commenterName;
    private String commenterContent;
}
