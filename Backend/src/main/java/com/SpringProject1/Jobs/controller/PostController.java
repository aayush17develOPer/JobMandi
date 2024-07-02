package com.SpringProject1.Jobs.controller;

import com.SpringProject1.Jobs.repos.PostRepo;
import com.SpringProject1.Jobs.model.Post;
import com.SpringProject1.Jobs.repos.SearchRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin(origins = "http://localhost:3000" , allowCredentials = "true")
@RestController
public class PostController {

    @Autowired
    PostRepo repo;

    @Autowired
    SearchRepo srepo;

    @GetMapping("/bc")
    public String getMethodName() {
        return "Bhenchod";
    }
    

    @GetMapping("/allPosts")
    @CrossOrigin
    public List<Post> getAllPosts(){
        return repo.findAll();
    }

    @GetMapping("/posts/{text}")
    @CrossOrigin
    public List<Post> search(@PathVariable String text){
        return srepo.findByText(text);
    }

    @PostMapping("/post")
    @CrossOrigin
    public Post addPost(@RequestBody Post post){
        return repo.save(post);
    }
}
