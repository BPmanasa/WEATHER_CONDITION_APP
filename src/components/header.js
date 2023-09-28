import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <div>
      <Box
        sx={{
          width: "99vw",
          height: 75,
          backgroundColor: "#0570f2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2
        }}
      >
        <Typography variant="h4" color="white">
          Weather App
        </Typography>
      </Box>
    </div>
  );
};
