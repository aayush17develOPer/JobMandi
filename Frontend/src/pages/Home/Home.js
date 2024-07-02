import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import "../App.css";
import "./Home.css";

const Home = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const typingDuration = 3000;
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, typingDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="gradient">
      <Typography
        sx={{ padding: "5%", color: 'white' }}
        variant="h3"
        align="center"
        className={isTypingDone ? 'typewriter typewriter-end' : 'typewriter'}
      >
        Welcome to JobMandi.com!
      </Typography>
      <div>
        <ul className="ul">
          <li className="btn">
            <Button variant="outlined" sx={{
              padding: '12px 24px',
              fontSize: '1.25rem',
              width: 'auto',
              height: 'auto',
              border: '2px solid white',
              ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black',
              }
            }}>
              <Link to="/employer/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                Hire talent
              </Link>
            </Button>
          </li>
          <li className="btn">
            <Button variant="outlined" sx={{
              padding: '12px 24px',
              fontSize: '1.25rem',
              width: 'auto',
              height: 'auto',
              border: '2px solid white',
              ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black',
              }
            }}>
              <Link to="/employee/feed" style={{ textDecoration: 'none', color: 'white' }}>
                Get Job Now
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;