import PropTypes from "prop-types";
import { Dot } from "pure-react-carousel";
import React from "react";
import {
  Button,
  Container,
} from '@material-ui/core';

const CustomDotGroup = ({ slides, size }) => (
  <Container textAlign="center">
    <Button size={size}>
      {[...Array(slides).keys()].map(slide => (
        <Button as={Dot} key={slide} icon="circle" slide={slide} />
      ))}
    </Button>
  </Container>
);

CustomDotGroup.defaultProps = {
  size: "mini"
};

CustomDotGroup.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string
};

export default CustomDotGroup;