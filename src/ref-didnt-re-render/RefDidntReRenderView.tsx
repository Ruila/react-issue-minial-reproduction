import { useEffect, useRef } from "react";
import { ChildrenComponent } from "./ChildrenComponent";

export const RefDidntReRenderView = () => {
  const ref = useRef<HTMLDivElement|null>(null)

  useEffect(()=>{
    console.info("in the parent's useEffect", ref)
  }, [ref])

  return (
    <div ref={ref}>
      <ChildrenComponent data={ref} />
    </div>
  )
}
