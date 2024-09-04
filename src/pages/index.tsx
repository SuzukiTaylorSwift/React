import { Route, Routes, NavLink } from 'react-router-dom';
import StartPage from './StartPage';
import GamePage from './GamePage';
import ScorePage from './ScorePage';
import { Box, Container } from '@mui/material';
import GameRule from './GameRule';  // นำเข้าคอมโพเนนต์ GameRule
const MainPage = () => {
    return (
        <div>
            {/* Top Navigation Bar */}
            <Box
                sx={{
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
                onClick={e => e.preventDefault()}
            >
                <NavLink to={'/'} style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? 'bold' : '',
                        textDecoration: isActive ? 'underline' : 'none',
                        color: isActive ? 'primary.main' : 'text.secondary'
                    };
                }}>Home</NavLink>
                <NavLink to={'/rule'} style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? 'bold' : '',
                        textDecoration: isActive ? 'underline' : 'none',
                        color: isActive ? 'primary.main' : 'text.secondary'
                    };
                }} >Rule</NavLink>
            </Box>

            {/* Main Content Area */}
            <Container maxWidth="md" sx={{ marginTop: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    sx={{
                        width: '100%',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: '#2E3B55',//สีกรอบใหญ่
                        textAlign: 'center',
                    }}
                >
                    <Routes>
                        <Route path='/' element={<StartPage />} />
                        <Route path='/game' element={<GamePage />} />
                        <Route path='/rule' element={<GameRule />} />  {/* ใช้ GameRule ที่ถูกต้อง */}
                    </Routes>
                </Box>
            </Container>
        </div>


    )
}

export default MainPage