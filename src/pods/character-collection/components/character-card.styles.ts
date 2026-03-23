import { css } from '@emotion/css';

export const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const image = css`
  border-radius: 0.75rem;
`;

export const pillsContainer = css`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;

export const typography = css`
  background: rgba(0, 0, 0, 0.87);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  width: auto;
  max-width: 8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;