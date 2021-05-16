import PropTypes from "prop-types";
import React from "react";
import {
  Container,Typography
} from '@material-ui/core';

const TextMore = ({ text }) => (
  <Container textAlign="center">
    {text.trim().split(/\s+/).length <= 30 && (
        <Typography  variant="body2" 
        className={`desc secondary-color `}>       
        {text}   
      </Typography>
    )
    }
    <Typography  variant="body2" 
        className={`desc secondary-color `}>
          {text}
    </Typography>
  </Container>
);

TextMore.defaultProps = {
  size: "mini"
};

TextMore.propTypes = {
  text: PropTypes.number.isRequired
};

export default TextMore;