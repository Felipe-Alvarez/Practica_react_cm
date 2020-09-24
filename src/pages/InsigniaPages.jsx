import React from 'react';
import Navbar from '../components/Navbar';

class Insigniapages extends React.Component {
    render() {
    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
                      </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <a href="/" className="btn btn-primary">
              Insignia inicial
            </a>
          </div>   
        </div>
      </div>
    );
  }
}
export default Insigniapages;