let NavigationComponent = () => {
  return (
    <div style={styleObject}>
      <h3 className="nav-title">React in 10 Steps</h3>
      <ul className="nav-style">
        <a href="/">
          <li>Ex1-Nested Components</li>
        </a>
        <a href="/ex2">
          <li>Ex2-Props & Events</li>
        </a>
        <a href="#">
          <li>Ex3-States Vs Props</li>
        </a>
        <a href="#">
          <li>Ex4-Context Api</li>
        </a>
        <a href="#">
          <li>Ex5-Complex Functions</li>
        </a>
        <a href="#">
          <li>Ex6-Reusable Components</li>
        </a>
        <a href="#">
          <li>Ex7-Cart Application</li>
        </a>
        <a href="#">
          <li>Ex8-Material UI</li>
        </a>
        <a href="#">
          <li>Ex9-Chatting App</li>
        </a>
        <a href="#">
          <li>Ex10-Miscleneous</li>
        </a>
      </ul>
    </div>
  );
};

const styleObject = {
  backgroundColor: "darkblue",
  padding: "10px",
};

export default NavigationComponent;
