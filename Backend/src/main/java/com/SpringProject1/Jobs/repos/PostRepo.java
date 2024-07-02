package com.SpringProject1.Jobs.repos;

import com.SpringProject1.Jobs.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.Repository;

public interface PostRepo extends MongoRepository<Post, Repository> {

}
