import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
          {/**  <TopBar />
                    <ContentRowTop />
                      <All/>
                    <Footer /> */}
        </div>
    </React.Fragment>
  );
}

export default App;
