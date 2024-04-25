import PropTypes from "prop-types";

export default function MsgBox({username,textColor}){
   let styles={color:textColor}
    return(
        <h1 style={styles}>Hello {username}</h1>
    );

}

MsgBox.propTypes = {
    username: PropTypes.string.isRequired, // Require 'title' prop as a string
    textColor: PropTypes.string, // Allow 'price' prop as a number, but it's optional
    
    
 
  };