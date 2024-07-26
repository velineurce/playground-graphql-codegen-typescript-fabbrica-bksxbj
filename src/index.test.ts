import {
  defineBookFactory,
  defineAuthorFactory,
  dynamic,
} from '../__generated__/fabbrica';
import { test, expect, expectTypeOf } from 'vitest';

// Define factories
const BookFactory = defineBookFactory({
  defaultFields: {
    __typename: 'Book',
    id: dynamic(({ seq }) => `Book-${seq}`),
    title: 'Yuyushiki',
    author: undefined,
  },
});
const AuthorFactory = defineAuthorFactory({
  defaultFields: {
    __typename: 'Author',
    id: dynamic(({ seq }) => `Author-${seq}`),
    name: 'Komata Mikami',
    books: undefined,
  },
});

test('simple', async () => {
  const book0 = await BookFactory.build();
  expect(book0).toStrictEqual({
    __typename: 'Book',
    id: 'Book-0',
    title: expect.any(String),
    author: undefined,
  });
  expectTypeOf(book0).toEqualTypeOf<{
    __typename: 'Book';
    id: string;
    title: string;
    author: undefined;
  }>();
});

test('nested', async () => {
  const book1 = await BookFactory.build({
    author: await AuthorFactory.build(),
  });
  expect(book1).toStrictEqual({
    __typename: 'Book',
    id: 'Book-1',
    title: expect.any(String),
    author: {
      __typename: 'Author',
      id: 'Author-0',
      name: expect.any(String),
      books: undefined,
    },
  });
  expectTypeOf(book1).toEqualTypeOf<{
    __typename: 'Book';
    id: string;
    title: string;
    author: {
      __typename: 'Author';
      id: string;
      name: string;
      books: undefined;
    };
  }>();
});
