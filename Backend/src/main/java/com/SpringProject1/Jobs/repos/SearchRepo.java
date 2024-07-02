package com.SpringProject1.Jobs.repos;

import com.SpringProject1.Jobs.model.Post;
import java.util.List;

public interface SearchRepo {
    List<Post> findByText(String text);
}
