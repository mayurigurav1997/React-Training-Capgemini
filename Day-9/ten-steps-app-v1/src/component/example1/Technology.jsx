import { useState } from "react";
let TechnologyComponent = ({ formData, setFormData }) => {
  let technologies = [
    { id: 1, domain: "Java Spring Boot" },
    { id: 2, domain: "Python Django" },
    { id: 3, domain: "Express Js" },
    { id: 4, domain: "Asp.Net MVC" },
  ];
  const handleCheckbox = (e) => {
    const checkboxValue = e.target.name;
    if (e.target.checked) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies,checkboxValue],
      });
    }
    else{
      setFormData({
        ...formData,
        technologies: formData.technologies.filter(tech => tech!== checkboxValue ),
      })
    }
  };

  return (
    <div className="my-1">
      {technologies.map((item) => (
        <span key={item.id} className="me-4">
          {/* write script to generate checkbox items here */}
          <input
            type="checkbox"
            className="me-1"
            name={item.domain}
            value={formData.technologies}
            onChange={handleCheckbox}
          />
          <label htmlFor="">{item.domain}</label>
        </span>
      ))}
    </div>
  );
};
export default TechnologyComponent;
