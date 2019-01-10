import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  const renderResources = rs => {
    return rs.map(x => {
      return <li key={x.id}>{x.title}</li>;
    });
  };

  if (!resources) return <div>Loading...</div>;
  return <ul>{renderResources(resources)}</ul>;
};

export default ResourceList;
