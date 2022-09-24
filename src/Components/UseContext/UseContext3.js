import React from 'react'
import { userContext,otherContext } from '../../App'

function UseContext3() {
    return (
        <userContext.Consumer>
            {value => {
                return (
                    <otherContext.Consumer>
                        {data => {
                            return (
                                <div>Hello {value} {data}</div>
                            )
                        }
                        }
                    </otherContext.Consumer>
                )
            }}
        </userContext.Consumer>
    )
}

export default UseContext3