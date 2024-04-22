import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PlainTextStyles } from './Typography/PlainText.jsx';

type StyledLink = {
  $isCurrent: boolean;
}

const StyledLink = styled(Link)<StyledLink>`
  color: ${(props) => (props.$isCurrent ? '#909090' : '#000')};
  text-decoration: none;
`;

const BreadcrumbsContainer = styled.div`
  ${PlainTextStyles}

  display: flex;
  gap: 1.3rem;
`;

type Breadcrumb = {
  id: number;
  path: string;
  name: string;
}

const Breadcrumbs = ({ breadcrumbsList }: { breadcrumbsList: Breadcrumb[] }) => {
  return (
    <BreadcrumbsContainer>
      {breadcrumbsList.map((breadcrumb: Breadcrumb, index: number, array: Breadcrumb[]) => {
        if (index !== array.length - 1) {
          return (
            <React.Fragment key={breadcrumb.id}>
              <StyledLink $isCurrent={false} to={breadcrumb.path}>
                {breadcrumb.name}
              </StyledLink>
              <span>—</span>
            </React.Fragment>
          );
        } else {
          return (
            <StyledLink
              key={breadcrumb.id}
              $isCurrent={true}
              to={breadcrumb.path}
            >
              {breadcrumb.name}
            </StyledLink>
          );
        }
      })}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
