import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1rem 0;
`;

export const ExperienceIntro = styled.div`
  margin-bottom: 1rem;
`;

//   border: 1px solid ${({ theme }) => theme.colors?.border};
//   background-color: ${({ theme }) => theme.colors?.background};
export const ExperienceList = styled.div`
  margin-bottom: 1rem;

  .title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .desc {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors?.text[200]};
    margin-bottom: 0.75rem;
  }

  .data {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
    list-style-type: disc;
    width: 70%;

    li {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors?.text[100]};
    }
  }

  .exposure {
    font-size: 0.9rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors?.text[300]};

    strong {
      color: ${({ theme }) => theme.colors?.text[300]};
    }
  }
`;
