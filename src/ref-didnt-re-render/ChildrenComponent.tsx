import React, { useEffect } from "react";

type ChildrenComponentProps = {
  data: React.MutableRefObject<HTMLDivElement | null>
}

export const ChildrenComponent: React.FunctionComponent<ChildrenComponentProps> = ({data}) => {
  useEffect(()=>{
    console.info("in the children useffect", data)
  }, [data])
  {console.info("in children", data)}
  return (
    <>
      children
    </>
  )
}
