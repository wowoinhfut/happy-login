import React from 'react';
import {ControlLabel, FormControl, FormGroup, HelpBlock} from 'react-bootstrap';

class FieldGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {id, label, help, ...rest} = this.props;
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl  {...rest}/>
        <div className="clear-both"/>
        {help && <HelpBlock>{help}</HelpBlock>}

      </FormGroup>
    );
  }
}

export default FieldGroup;
