import styled from 'styled-components';

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 1.5;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 30em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    width: 30rem;
  }
  .btn {
    padding: 0.65rem 1rem;
    border: 1px solid black
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;
