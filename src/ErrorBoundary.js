import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {error: false}
  }

  componentDidCatch(error) {
    throw error;
  }

  render() {
    if(this.state.error) {
      return (
        <div>there was an error</div>,
        this.props.children
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary;