import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;
  margin: auto;
`;

export const header = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const imageWrapper = css`
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;