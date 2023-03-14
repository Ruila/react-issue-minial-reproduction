import React, { useCallback, useState } from "react";
import { Child } from "../components/Child";

export const UseCallbackDemo = (): JSX.Element => {
  const [count, setCount] = useState<number>(0)

  const reset = useCallback(() => {
    console.info("demo")
    setCount(0)
  }, [])

  const add = () => {
    console.info("add")
    setCount(count + 1)
  }

  return <div className="flex">
      <div>
        count: {count}
      </div>
      <div onClick={add} className="mx-4">add</div>
      <Child reset={reset} />
  </div>
}
