import { useState, useRef, useEffect } from 'react'
import { Button } from 'components/Button'
import './TimerStyles.css'

function Timer() {
  const [time, setTime] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  const intervalRef = useRef<number | null>(null)

  //запуск или остановка таймера
  //вычисления с Date.now() нужны для правильного возобновления отсчёта, после остановки таймера
  const startPauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current!)
      intervalRef.current = null
    } else {
      const startTime = Date.now() - time
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime)
      }, 100)
    }
    setIsRunning(!isRunning)
  }

  // сброс таймера, отсчёт продолжается
  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setTime(0)
    if (isRunning) {
      const startTime = Date.now()
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime)
      }, 100)
    }
  }

  // очищается setInterval для intervalRef.current, при демонтировании компонента, для избежания утечек памяти
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // преобразование внешнего вида таймера в формат 00:00.000
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, '0')
    const milliseconds = (time % 1000).toString().padStart(3, '0')
    return `${minutes}:${seconds}.${milliseconds}`
  }

  return (
    <div className='timer-wrapper'>
      <div className='timer-count'>{formatTime(time)}</div>
      <div className='timer-buttons'>
        <Button text='Start / Pause' onClick={startPauseTimer} />
        <Button text='Reset' onClick={resetTimer} />
      </div>
    </div>
  )
}
export default Timer
