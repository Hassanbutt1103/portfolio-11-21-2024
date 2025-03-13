import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UIUX from "../../assets/ux-design-7224948_640.png";
import Graphics from "../../assets/woman-8530607_1920.png";
import Web from "../../assets/core-web-vitals-6685101_1920.png";
import { NavLink } from 'react-router-dom';

const MediaCard = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center font-sans bg-[#f4e9ff] rounded-2xl text-gray-300 sm:px-24 px-6 py-6 sm:space-x-6 space-y-6 sm:space-y-0 mt-60">
      {/* Card 1 */}
      <Card 
        sx={{
          maxWidth: 345,
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <CardMedia
          sx={{ height: 140, objectFit: "cover", width: "100%" }}
          image={UIUX}
          title="UI UX"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-semibold text-slate-800 font-sans"
          >
            UI & UX Design
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            UI and UX design are crucial for digital products, with UI enhancing
            visuals and UX improving user satisfaction.
          </Typography>
        </CardContent>
        <CardActions className="flex justify-center font-sans">
          <Button
            size="small"
            variant="text"
            sx={{
              color: "primary.main",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <NavLink to="/services"> 
            Learn More
            </NavLink>
          </Button>
        </CardActions>
      </Card>
      {/* Card 2 */}
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <CardMedia
          sx={{ height: 140, objectFit: "cover", width: "100%" }}
          image={Graphics}
          title="Graphic designer"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-semibold text-slate-800 font-sans"
          >
            Graphic Designer
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Graphic designers create visual content to convey ideas using
            typography, color, and composition.
          </Typography>
        </CardContent>
        <CardActions className="flex justify-center font-sans">
          <Button
            size="small"
            variant="text"
            sx={{
              color: "primary.main",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <NavLink to="/services"> 
            Learn More
            </NavLink>
          </Button>
        </CardActions>
      </Card>
      {/* Card 3 */}
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <CardMedia
          sx={{ height: 140, objectFit: "cover", width: "100%" }}
          image={Web}
          title="Web Development"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-semibold text-slate-800 font-sans"
          >
            Web Development
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Web development involves creating and maintaining websites,
            integrating front-end design and back-end functionality.
          </Typography>
        </CardContent>
        <CardActions className="flex justify-center font-sans">
          <Button
            size="small"
            variant="text"
            sx={{
              color: "primary.main",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <NavLink to="/services"> 
            Learn More
            </NavLink>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MediaCard;
