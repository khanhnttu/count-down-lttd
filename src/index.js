import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ num = 10, deplay = 1000 }) => {
  const [count, setCount] = useState(num)
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev - 1)
    },[deplay]);
  }, [])
  return <div className={styles.test}>Example Component: {count}</div>
}
