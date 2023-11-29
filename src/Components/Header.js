import React from "react";


const Header = () => {
  return(
    <div className="header">
      <div className="logo">
        <h1>NetMovie</h1>
        <input type="search" name="pesquisa" id=""  placeholder="Search your movies:" />
        
      </div>
      <div className='col col1'>
        <h2>Your Movies</h2>
        <p>
           <strong>Unlimited movies, TV shows, and more</strong> Watch anywhere.<br/>
           <strong className='filme'>His films are below!!!</strong></p>
        <button type="button">More</button>
      </div>
      
    </div>
  )
}
export default Header