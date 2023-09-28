import Card from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

// eslint-disable-next-line import/no-anonymous-default-export
export default (object) => {
  // console.log(object);
  // console.log(object.cityWeather.location);
  const cityWeather = object.cityWeather;
  return (
    <div>
      <Typography variant="h5" component="div" sx={{ my: 2 }}>
        {cityWeather.location.name}, {cityWeather.location.country}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Card
          sx={{
            width: 375,
            minWidth: 275,
            borderBottom: 1,
            borderColor: "grey.500",
            borderRadius: 1,
            boxShadow: 1
          }}
        >
          <CardContent>
            {/* <Typography variant="h5" component="div" sx={{ mb: 4 }}>
              {cityWeather.location.name}, {cityWeather.location.country}
            </Typography> */}
            <Stack sx={{ width: 50 }}>
              <img alt="CDN" src={cityWeather.current.condition.icon} />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Temperature</Typography>
              <Typography>
                {cityWeather.current.temp_c}°C / {cityWeather.current.temp_f}°F
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Condition</Typography>
              <Typography>{cityWeather.current.condition.text}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Wind Speed</Typography>
              <Typography>{cityWeather.current.wind_kph} km/h</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Humidity</Typography>
              <Typography>{cityWeather.current.humidity}%</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Cloud Coverage</Typography>
              <Typography>{cityWeather.current.cloud}%</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Last Updated</Typography>
              <Typography>{cityWeather.current.last_updated}</Typography>
            </Stack>
            {/* <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Last Updated
            </Typography>
            <Typography variant="h5" component="div">
              {cityWeather.current.last_updated}
            </Typography>
          </Stack> */}
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};
