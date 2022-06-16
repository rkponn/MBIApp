import React from 'react'

const HeaderInfo = () => {  

  return (
    <div>
      <h1 className="title">MBI Generator & Validator</h1>
        <b>An MBI has to have 11 Characters</b>
        <p>Each MBI is randomly generated. MBI characters are considered "non-intelligent" so they don't have any special or hidden meanings.</p>
        <p>MBIs are numbers and upper case letters, each position within the MBI needs to follow a standard.</p>   
        <b>Format for MBI</b>
        <ol>
            <li> numeric values 1 thru 9</li>
            <li> alphabetic values A thru Z (minus S, L, O, I, B, Z)</li>
            <li> alpha-numeric values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z)</li>
            <li> numeric values 0 thru 9</li>
            <li> alphabetic values A thru Z (minus S, L, O, I, B, Z)</li>
            <li> alpha-numeric values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z)</li>
            <li> numeric values 0 thru 9</li>
            <li> alphabetic values A thru Z (minus S, L, O, I, B, Z)</li>
            <li> alphabetic values A thru Z (minus S, L, O, I, B, Z)</li>
            <li> numeric values 0 thru 9</li>
            <li> numeric values 0 thru 9</li>
        </ol>
    </div>
  )
}

export default HeaderInfo