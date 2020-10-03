import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 500px;
  width: 400px;

  margin: 0 auto;
`;

const Messages = styled.div`
  height: 80%;
  background: aquamarine;

  padding: 1rem 1.5rem;
`;

const UserMessage = styled.div`
  padding: 0.5rem;
  margin: 1rem 0;
`;

const CurrentUserMessage = styled.div`
  text-align: end;

  padding: 0.5rem;
  margin: 1rem 0;
`;

export { Wrapper, Messages, UserMessage, CurrentUserMessage };
