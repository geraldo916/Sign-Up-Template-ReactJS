import React from 'react'
import '../style/stepDots.css'

export default function StepDots({index,stepsLength=3,className}){
    var i = 0
    var steps = Array(stepsLength+1).fill(0,1,stepsLength+1).reduce(function(x,y){
        i += 1
        x.push(i)
        
        return x
    }, [])
    return(
        <div className={className} >
            <span>Step {index} of {steps.length} </span>
            <div className='dots' >
                {
                    steps.map(a=> a == index?(<div className='dot dot-atived'></div>):(<div className='dot'></div>))
                }
            </div>
        </div>
    )
}