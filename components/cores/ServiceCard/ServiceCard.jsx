import React from "react";

const ServiceCard = ({ service }) => {
  const parts = service.description.includes("#")
    ? service.description.split("#")
    : "";

  return (
    <div className="p-6 bg-accent service-card">
      <h1 className="text-white w-full text-center mb-2 text-lg">
        {service.label}
      </h1>
      <p className="text-grey-text text-sm">
        {parts
          ? parts.map((part, key) =>
              key === 1 ? (
                <a
                  className="text-white underline"
                  key={key}
                  href={service.link}
                >
                  {part}
                </a>
              ) : (
                <React.Fragment key={key}>{part}</React.Fragment>
              )
            )
          : service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
