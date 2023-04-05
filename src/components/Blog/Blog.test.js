import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Blog } from './Blog';
import * as blogService from '../../services/blogService';

jest.mock('../../services/blogService');

describe('Blog component', () => {
  const mockBlog = {
    _id: '123',
    title: 'Test Blog',
    content: 'This is a test blog',
    user: {
      email: 'test@test.com',
    },
  };

  const mockAuth = {
    auth: {
      _id: '456',
    },
  };

  beforeEach(() => {
    blogService.getBlogById.mockResolvedValue(mockBlog);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders blog title and content', async () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuth}>
          <Blog />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    expect(await screen.findByText('Test Blog')).toBeInTheDocument();
    expect(await screen.findByText('This is a test blog')).toBeInTheDocument();
  });

  it('renders creator email', async () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuth}>
          <Blog />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    expect(await screen.findByText('From: test@test.com')).toBeInTheDocument();
  });

  it('does not render edit and delete buttons for non-owner', async () => {
    const { container } = render(
      <BrowserRouter>
        <AuthContext.Provider value={{ auth: { _id: 'not_owner' } }}>
          <Blog />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    expect(await screen.queryByText('Edit')).toBeNull();
    expect(await screen.queryByText('Delete')).toBeNull();
  });
});
