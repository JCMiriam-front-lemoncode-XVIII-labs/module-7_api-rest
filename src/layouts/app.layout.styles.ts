import { css } from '@emotion/css';

export const content = css`
  margin: 2rem;
`;

export const navContainer = css`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;
  margin-left: 1rem;
`;

export const navLink = css`
  color: inherit;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
