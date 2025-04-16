// Code Keypad Component Here

function Keypad (){
    const keys=[
        '1','2','3',
        '4','5','6',
        '7','8','9',
        '*','0','#'
    ]
    return (
        <div className="keypad">
            <input type="password" onChange={()=>{
                return console.log("Entering password...")
            }}/>
            {keys.map((key)=>{
                return <button key={key}>{key}</button>
            })}
        </div>
    )
}

export default Keypad;