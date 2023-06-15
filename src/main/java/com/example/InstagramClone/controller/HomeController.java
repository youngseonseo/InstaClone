package com.example.InstagramClone.controller;

import com.example.InstagramClone.domain.Board;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;

@Slf4j
@Controller
public class HomeController {

//    @GetMapping("")
//    public void home(){
//    }

    @GetMapping("/main")
    public String mainPage(Model model){
        ArrayList<Board> bulletin =new ArrayList<>();
        for(int i=2;i<6;i++){
            Board board=new Board();
            board.setBoardImg("../img/suzy"+i+".png");
            bulletin.add(board);
        }
        model.addAttribute("bulletin",bulletin);
        return "main";
    }


    @GetMapping("/join")
    public String joinPage(){
        return "join";
    }
}
