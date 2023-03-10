import {
  Box,
  Button,
  CssBaseline,
  styled,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Container, typography } from "@mui/system";
import Head from "next/head";
import Link from "next/link";
import PathContainer from "../components/Container/PathContainer";

const ErrorNumberTypo = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(140px,6vw,160px)",
  fontFamily: "Abril_Fatface",
  color: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    fontSize: "clamp(250px,8vw,270px)",
  },
}));

const NotFoundTypo = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(45px,6vw,55px)",
  fontFamily: "Abril_Fatface",
  [theme.breakpoints.up("md")]: {
    fontSize: "clamp(75px,8vw,85px)",
  },
}));

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Amir Kazemi Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Amir Kazemi built with react and next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <PathContainer>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            top: "50vh",
            transform: "translateY(-50%)",
          }}
        >
          <ErrorNumberTypo variant="h1" sx={{ fontFamily: "Abril Fatface" }}>
            404
          </ErrorNumberTypo>
          <Typography
            variant="h1"
            sx={{ textAlign: "center", fontFamily: "Abril Fatface" }}
          >
            The Page You Are Looking For Does Not Exist!
          </Typography>
          <Box sx={{ mt: "60px" }}>
            <Link href={"/"}>
              <Button variant="outlined" size="large" sx={{}}>
                Back To Home
              </Button>
            </Link>
          </Box>
        </Box>
      </PathContainer>
    </>
  );
};

export default NotFound;
