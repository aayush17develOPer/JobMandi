import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./Feed.css";


const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();

  //
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/posts/${query}`, {
          withCredentials: true // Include credentials for CORS
        });
        
        console.log(response);

        // Check for redirection (this is hypothetical since axios doesn't handle redirection this way)
        if (response.status === 302 && response.headers.location) {
          document.location = response.headers.location;
        } else {
          setPost(response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Handle error accordingly
      }
    };

    const fetchInitialPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allPosts', {
          withCredentials: true // Include credentials for CORS
        });

        console.log(response);
        
        if (response.status === 302 && response.headers.location) {
          document.location = response.headers.location;
        } else {
          setPost(response.data);
        }
      } catch (error) {
        console.error('Error fetching initial posts:', error);
      }
    };

    if (query.length === 0) {
      fetchInitialPosts();
    } else {
      fetchPosts();
    }
  }, [query]);

  console.log(post);
  return (

    <div className="gradient-f">
      <Grid container spacing={1} sx={{ margin: "0 2%"}}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
      <Button sx=
          {{
            padding: '8px 24px', 
            marginBottom: '3px',
            fontSize: '1.25rem', 
            width: 'auto',
            height: 'auto',
            border: '2px solid black',
            ':hover': {
            backgroundColor: 'lightgreen'
            }
          }}
         variant="outlined">
            <Link to="/">Home</Link>
          </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "95.5%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>
      {post &&
        post.map((p) => {
          return (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Card className="gradient-res" sx={{ padding: "1%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
             {p.profile}
                </Typography>
                <Typography sx={{ color: "black", marginTop:"2%" }} variant="body" >
                  Description: {p.desc}
                </Typography>
                <br />
                <br />
                <Typography variant="h6">
                  Years of Experience: {p.exp} years
                </Typography>

                <Typography gutterBottom  variant="body">Skills : </Typography>
                {p.techs.map((s, i) => {
                  return (
                    <Typography variant="body" gutterBottom key={i}>
                      {s} .
                      {` `}
                    </Typography>
                  );
                })}
  
              </Card>
            </Grid>
          );
        })}
    </Grid>
    </div>
  );
};

export default Feed;
