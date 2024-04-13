import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
export default function Home() {
  return (
    <div className='mt-[20px]'>
      <Grid container sx={{ gap: "20px", width: "100%" }}>
        <Grid
          className='bg-cover bg-[url("/images/paris-beautiful-city-3840x2160.jpg")]'
          padding={0}
          container
          direction={"column"}
          bgcolor={"white"}
          borderRadius={4}
          sx={{ width: "600px", height: "662px" }}
        >
          <Grid xs={12} padding={0}>
            <Box
              bgcolor={"slateblue"}
              color={"white"}
              className='font-font_work_sans flex justify-center content-center'
              sx={{
                marginTop: "70%",
                width: "62px",
                height: "22px",
                borderRadius: ".375rem;",
              }}
            >
              <span className='mr-[3px] mt-[1px]'>Travel</span>
            </Box>
          </Grid>
        </Grid>
        <Grid
          padding={0}
          container
          direction={"column"}
          sx={{ width: "290px", height: "662px", gap: "20px" }}
        >
          <Grid
            className='bg-cover bg-[url("/images/paris-beautiful-city-3840x2160.jpg")]'
            xs={6}
            padding={0}
            bgcolor={"white"}
            borderRadius={4}
            sx={{ height: "321px", width: "290px" }}
          >
            <Box
              bgcolor={"slateblue"}
              color={"white"}
              className='font-font_work_sans flex justify-center content-center'
              sx={{
                marginTop: "70%",
                width: "62px",
                height: "22px",
                borderRadius: ".375rem;",
              }}
            >
              <span className='mr-[3px] mt-[1px]'>Travel</span>
            </Box>
          </Grid>
          <Grid
            className='bg-cover bg-[url("/images/paris-beautiful-city-3840x2160.jpg")]'
            sx={{ height: "321px", width: "290px" }}
            xs={6}
            padding={0}
            bgcolor={"white"}
            borderRadius={4}
          >
            <Box
              bgcolor={"slateblue"}
              color={"white"}
              className='font-font_work_sans flex justify-center content-center'
              sx={{
                marginTop: "70%",
                width: "62px",
                height: "22px",
                borderRadius: ".375rem;",
              }}
            >
              <span className='mr-[3px] mt-[1px]'>Travel</span>
            </Box>
          </Grid>
        </Grid>
        <Grid
          padding={0}
          container
          direction={"column"}
          sx={{ width: "290px", height: "662px", gap: "20px" }}
        >
          <Grid
            className='bg-cover bg-[url("/images/paris-beautiful-city-3840x2160.jpg")]'
            sx={{ height: "321px", width: "290px" }}
            xs={6}
            padding={0}
            bgcolor={"white"}
            borderRadius={4}
          >
            <Box
              bgcolor={"slateblue"}
              color={"white"}
              className='font-font_work_sans flex justify-center content-center'
              sx={{
                marginTop: "70%",
                width: "62px",
                height: "22px",
                borderRadius: ".375rem;",
              }}
            >
              <span className='mr-[3px] mt-[1px]'>Travel</span>
            </Box>
          </Grid>
          <Grid
            sx={{ height: "321px", width: "290px" }}
            xs={6}
            padding={0}
            bgcolor={"white"}
            borderRadius={4}
            className='bg-cover bg-[url("/images/paris-beautiful-city-3840x2160.jpg")]'
          >
            <Box
              bgcolor={"slateblue"}
              color={"white"}
              className='b font-font_work_sans flex justify-center content-center'
              sx={{
                marginTop: "70%",
                width: "62px",
                height: "22px",
                borderRadius: ".375rem;",
              }}
            >
              <span className='mr-[3px] mt-[1px]'>Travel</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
