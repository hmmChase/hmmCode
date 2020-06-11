import { renderHook, act } from '@testing-library/react-hooks';
import useCommentsManagement from '../../hooks/useCommentsManagement';
import fetch from 'isomorphic-unfetch';

jest.mock('isomorphic-unfetch');

describe('The useCommentsManagement hook', () => {
  afterEach(() => jest.resetAllMocks());

  describe('when the fetchComments function is called', () => {
    it('should update the state after a successful request', async () => {
      const data = { comments: [{ id: 1 }] };

      fetch.mockReturnValue(
        Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve(data)
        })
      );

      const {
        result,
        waitForNextUpdate,
        waitForValueToChange
      } = renderHook(() => useCommentsManagement());

      expect(result.current.comments.length).toBe(0);

      act(() => {
        result.current.fetchComments();
      });

      // await waitForNextUpdate();
      await waitForValueToChange(() => result.current.comments);

      expect(result.current.comments.length).not.toBe(0);
    });
  });
});
