let TechnologyComponent = () => {
  let technologies = [
    { id: 1, domain: "Java Spring Boot" },
    { id: 2, domain: "Python Django" },
    { id: 3, domain: "Express Js" },
    { id: 4, domain: "Asp.Net MVC" },
  ];
  return (
    <div className="my-1">
      {technologies.map((item) => (
        <span key={item.id}>
          {/* write script to generate checkbox items here */}
        </span>
      ))}
    </div>
  );
};
export default TechnologyComponent;
