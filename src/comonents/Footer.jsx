import React from "react" ;
import "./footer.css";

function Footer(){
  let date = new Date().getFullYear();
  return (
    <div className = "footer">
      CopyRight @ {date}
     </div>
  )
  
}
export default Footer;