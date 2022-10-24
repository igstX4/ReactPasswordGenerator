import React, {useState} from 'react'
import s from './mainGenerator.module.css'
import { Generate, IGenerate } from '../../test';
import { useCopyToClipboard } from 'usehooks-ts'
import MuiAlert from '@mui/material/Alert';
import { MainInfo, Generator } from '../../components';

const MainGenerator = () => {
  const [value, setValue] = useState<number | number[]>(10);
  const [data, copy] = useCopyToClipboard()
  const [isMessage, setMessage] = useState<boolean>(false)

  const handleChange = (event : Event, value: number[] | number) => {
      setValue(value)
  }
  const [passwrod, setPassword] = useState(Generate(value, {upper: true, lower: true}))
  
  const handleGenerate = (obj : IGenerate) => {
    setPassword(Generate(+value - 1, obj))
  }
  const handleCopy = () => {
    copy(passwrod)
    if (data || !isMessage ) {
      setMessage(true)
      setTimeout(() => {
        setMessage(false)
      }, 2000)
    }
  }

  return (
    <div className={s.main}>
        <div className={isMessage ? s.modal : s.modal + ' ' + s.none}>
        <MuiAlert elevation={6} variant="filled">Copied!</MuiAlert>
        </div>
        
        <MainInfo />
        <Generator handleCopy={handleCopy} handleChange={handleChange} handleGenerate={(obj : IGenerate) => handleGenerate(obj)} password={passwrod} value={+value}/>
    </div>
  )
}

export default MainGenerator