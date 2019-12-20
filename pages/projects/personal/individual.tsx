import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { PageContainer } from "../../../components/page_styles/overall";
import { useFindOneProjectByIdQuery } from "../../../lib/generated/PortfolioGraphqlComponents";

const ProjectID: NextPage = () => {
  const router = useRouter();

  const { data, loading, error } = useFindOneProjectByIdQuery({
    variables: {
      projectId: router.query.id.toString()
    }
  });

  if (!data || loading || error) {
    return <h1>Loading...</h1>;
  }

  const { findOneProjectById: project } = data;
  return (
    <PageContainer>
      <h1>Project Id: {project.id}</h1>
      <p>{project.name}</p>
    </PageContainer>
  );
};

export default ProjectID;
