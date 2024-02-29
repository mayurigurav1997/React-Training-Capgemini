import {useState} from "react"
let TechnologyComponent = () => {
  let technologies = [
    { id: 1, domain: "Java Spring Boot" },
    { id: 2, domain: "Python Django" },
    { id: 3, domain: "Express Js" },
    { id: 4, domain: "Asp.Net MVC" },
  ];
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  return (
    <div className="my-1">
      {technologies.map((item) => (
        <span key={item.id}className="me-4">
          {/* write script to generate checkbox items here */}
          <input type="checkbox" className="me-1" name={item.domain}/>
          <label htmlFor="">{item.domain}</label>
        </span>
      ))}
    </div>
  );
};
export default TechnologyComponent;
