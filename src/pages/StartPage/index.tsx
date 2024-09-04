import { Box, Button, FormControl, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useMain } from "../../contexts/MainContext"
import { useNavigate } from 'react-router-dom'
// import ChannelDropdown, { FIRST_OPTION_VALUE_DROPDOWN } from "../../components/ChannelDropdown"
// import { getAllListChannel } from '../../api/appScore'
import Logo from '../../assets/full-logo.png';
import pic1 from '../../assets/kid.jpeg';

const StartPage = () => {
    const { setUser, setChannel, joinGame } = useMain()
    const navigate = useNavigate()
    const [name, setName] = useState<string>("Aheye Mabel")
    // const [channelName, setChannelName] = useState<string>(FIRST_OPTION_VALUE_DROPDOWN)
    const [appNameLists, setAppNameLists] = useState<string[]>([])

    // const [newChannelName, setNewChannelName] = useState<string>("")

    // useEffect(() => {
    //     async function GetAllListChannel() {
    //         try {
    //             const data = await getAllListChannel()
    //             setAppNameLists(() => [...data])
    //         } catch (error) {
    //             console.error(error)
    //             alert("Error")
    //         }
    //     }

    //     GetAllListChannel()
    // }, [])

    // useEffect(() => {
    //     setAppNameLists([...appList])
    // }, [appList])


    const onStartBtnClick = () => {
        
            setUser(name)
            // joinGame(channelName)
            // setChannel(channelName)
            navigate('/game', { state: {} })
       
    }

    return (
        <Box
            sx={{
            backgroundColor: '#2E3B55',  // สีพื้นหลังโทนเข้ม
            // backgroundColor: 'green',
            // padding: 5,  // เพิ่ม padding รอบๆ ขอบสี่เหลี่ยม
            borderRadius: 2  // เพิ่มความโค้งมนให้กับขอบสี่เหลี่ยม
            }}>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box component="img" sx={{
                        height: 200
                    }} src={pic1}></Box>
                </Grid>
                
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} p={2}>
                    <FormControl fullWidth sx={{ mt: 1 }}>
                        <TextField
                            required
                            label="Input Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            fullWidth
                            InputLabelProps={{
                                style: { color: 'white' },  // กำหนดสีของ label เป็นสีขาว
                              }}
                              sx={{
                                '& .MuiInputBase-input': {
                                  color: 'white',  // กำหนดสีของข้อความที่พิมพ์ในช่อง input ให้เป็นสีขาว
                                },
                              }}
                        />
                    </FormControl>
                </Grid>
                <Grid container item xs={12} pt={1} p={2} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" 
                        onClick={onStartBtnClick} fullWidth
                        sx={{
                            backgroundColor: 'pink',
                            color: 'black',
                            '&:hover': {
                              backgroundColor: 'pink', // กำหนดให้สีเหมือนกับสีปกติ
                            },
                          }}
                        >
                            Play
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    )
}

export default StartPage