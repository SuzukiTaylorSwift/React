import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function GameRule() {
    const navigate = useNavigate();

    return (
        <Box>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="h1">
                        กฎของเกม
                    </Typography>
                </Grid>
                
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        ผู้เล่นจะได้รับเลขโดด 4 จำนวน ซึ่งมีค่าตั้งแต่ 0 ถึง 9 
                        และต้องใช้การดำเนินการทางคณิตศาสตร์ (บวก, ลบ, คูณ หรือหาร) 
                        เพื่อให้ได้ค่าเป็น 24 โดยมีเงื่อนไขว่า
                        ผู้เล่นสามารถใช้เลขโดดได้ตัวละ 1 ครั้งเท่านั้น
                    </Typography>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} p={1} sx={{ marginTop: 4 }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        กลับไปหน้าหลัก
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
