// src/__tests__/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure Jest DOM matchers are included
import App from '../App';

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole('heading', { level: 1 });
  expect(topLevelHeading).toBeInTheDocument();
  expect(topLevelHeading).toHaveTextContent("Hi, I'm _______");
});

test("displays an image of the user with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/a portrait of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'your-image-url.jpg');
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole('heading', { level: 2 });
  expect(secondLevelHeading).toBeInTheDocument();
  expect(secondLevelHeading).toHaveTextContent('About Me');
});

test("displays a paragraph for the biography", () => {
  render(<App />);
  const biography = screen.getByText(/i am a passionate developer/i);
  expect(biography).toBeInTheDocument();
});

test("displays a link to the GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole('link', { name: /my github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername');
});

test("displays a link to the LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole('link', { name: /my linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/yourusername');
});
