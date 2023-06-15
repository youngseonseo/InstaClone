package com.example.InstagramClone.controller;

import com.example.InstagramClone.domain.Board;
import com.example.InstagramClone.domain.Member;
import com.example.InstagramClone.repository.MemberRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

@Controller
@RequiredArgsConstructor
public class MemberController {
    private final MemberRepository memberRepository;

    @GetMapping
    public void addForm(@ModelAttribute("member") Member member){
    }

    @PostMapping
    public String save(@Valid @ModelAttribute Member member, BindingResult result, Model model){
        if(result.hasErrors()){
            return "redirect:/";
        }

        memberRepository.save(member);
        return "main";
    }
}
