import React from "react";

type ChildProps = {
  reset: () => void
}

export const Child: React.FunctionComponent<ChildProps> = React.memo(({ reset }) => {
    console.info("Child")
    return (<div className="w-[70px]" onClick={reset}>
      reset
    </div>)
  }
)
