import { useState } from 'react'
import { Button } from 'components/Button'
import { Timer } from './components/Timer'
import './MultipleTimerStyles.css'

function MultipleTimer() {
  const [timerList, setTimerList] = useState<number[]>([1])

  // id нового таймера, для его добавления
  const newTimerId = timerList.length + 1

  // добавление нового таймера в timerList через id
  const addTimer = (id: number) => {
    setTimerList(prevTimerList => [...prevTimerList, id])
  }

  // id последнего таймера, для его удаления
  const lastIndex = timerList.length - 1
  const lastTimerId = timerList[lastIndex]

  // удаление таймера по id
  const removeTimer = (id: number) => {
    setTimerList(prevTimerList =>
      prevTimerList.filter(timerId => timerId !== id)
    )
  }

  return (
    <div className='multiple-timer-wrapper'>
      <div className='multiple-timer-buttons'>
        <Button
          text='Add timer'
          onClick={() => addTimer(newTimerId)}
          isDisabled={timerList.length === 4}
        />
        <Button
          text='Remove'
          onClick={() => removeTimer(lastTimerId)}
          isDisabled={timerList.length === 1}
        />
      </div>
      <div className='multiple-timer-items'>
        {timerList?.map(id => (
          <Timer key={id} />
        ))}
      </div>
    </div>
  )
}

export default MultipleTimer
