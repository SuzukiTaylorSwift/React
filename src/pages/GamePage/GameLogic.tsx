import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, Grid, TextField, Typography, Zoom } from '@mui/material';

import { useMain } from '../../contexts/MainContext';
import ScoreboardButton from '../../components/ScoreboardButton';
import ColorSpotGame from './core/ColorSpotGame';
import Timer from '../../components/Timer';
import useTimer from '../../hooks/useTimer';
import BackgroundMusic from '../../components/BackgroundMusic';
import { submitScore } from '../../api/appScore'
import { toast } from 'react-toastify';

interface IGameProps {
  onSubmitScores : (score : number) => void
  levels: number,
  stages : number
}

const Game: React.FC<IGameProps> = (props : IGameProps) => {
  const navigate = useNavigate()
  const { user } = useMain()
  const [arrNum,setNum] = useState<number[]>([]);
  const [result,set24] = useState<number>(24)
  // const { time, start: startTimer, stop: stopTimer, reset: resetTimer } = useTimer();
  // const {levels, stages, onSubmitScores} = props;

  // const [finalScore, setFinalScore] = useState<number>(0);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [game, resetGame] = useState(new ColorSpotGame());
  const [resultInput, setResult] = useState<string>("")

  const bgSong = useMemo(() => {
    if (gameFinished) {
      return 'https://www.youtube.com/watch?v=OCOeCrpRNGA';
    
    }
    return 'https://www.youtube.com/watch?v=BS5Q6cZMIM8';
  }, [gameFinished])
  const restartGame = useCallback(() => {
    const newGame = new ColorSpotGame();
    const {  arr } = newGame.getNumber();
    setNum(arr);
    resetGame(newGame);
    setGameFinished(false);
    
  }, [resetGame, setNum, setGameFinished])

  useEffect(() => {
    restartGame();
  }, [])

  const endGame = useCallback(async() =>  {
    try {
      // ใช้ eval เพื่อคำนวณผลลัพธ์ของสมการ
      const calculatedResult = eval(resultInput);
  
      if (calculatedResult === 24) { // เปรียบเทียบผลลัพธ์กับ 24
        setGameFinished(true);
        navigate('/score');
      } else {
        // แสดงข้อความผิดพลาด
        alert('The result of the equation is incorrect. Please try again.');
      }
    } catch (error) {
      // จัดการข้อผิดพลาดที่เกิดจาก eval
      alert('Invalid equation. Please check your input.');
    }
  }, [resultInput, navigate]);
  
  // }
  return(
        <div style={{ textAlign: 'center' }}>
        {/* Background Music Component */}
        <BackgroundMusic songUrl={bgSong} />

        {/* Header */}
        {/* <h1>Hello</h1> */}
        
        {/* Conditional Rendering based on gameFinished */}
        {gameFinished ? (
          <div>
            <h2>Congratulations</h2>
            <button onClick={restartGame}>Restart</button>
            <br />
            <br />
            <ScoreboardButton
              onScoreboardClick={() => navigate('/score')}
            />
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h6">Random Numbers:</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2, // Space between circles
                flexWrap: 'wrap',
                marginTop: 2
              }}
            >
              {arrNum.map((num, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    backgroundColor: '#1976d2', // Background color of circle
                    color: 'white', // Text color
                    fontSize: 24,
                    fontWeight: 'bold',
                  }}
                >
                  {num}
                </Box>
              ))}
            </Box>
            <br/>
            <Typography variant="h6">Result</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2, // Space between circles
                flexWrap: 'wrap',
                marginTop: 2
              }}
              ><Box
                sx={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  backgroundColor: '#1976d2', // Background color of circle
                  color: 'white', // Text color
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                  {result}
              </Box>
            </Box>
            <br/>
            <Box>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} p={2}>
                    <FormControl fullWidth sx={{ mt: 1 }}>
                        <TextField
                            required
                            label="ใส่สมการ"
                            value={resultInput}
                            onChange={e => setResult(e.target.value)}
                            fullWidth
                            
                              
                        />
                    </FormControl>
                </Grid>
                
                </Box>
            <br/>
            <button onClick={restartGame} style={{ marginRight: '10px' }} >Restart</button>
          
            <button onClick={endGame}>Submit</button>
            
          </div>
        )}
      </div>
      );
}

export default Game;
