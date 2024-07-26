import {
  type Traits,
  type TypeFactoryDefineOptions,
  type TypeFactoryInterface,
  type FieldsResolver,
  defineTypeFactoryInternal,
} from '@mizdra/graphql-codegen-typescript-fabbrica/helper';
import type { Maybe, Author, Book } from './types';

export * from '@mizdra/graphql-codegen-typescript-fabbrica/helper';
export type OptionalAuthor = {
  __typename?: 'Author';
  id?: Author['id'] | undefined;
  name?: Author['name'] | undefined;
  books?: OptionalBook[] | undefined;
};

const AuthorFieldNames = ['__typename', 'id', 'name', 'books'] as const;

export type AuthorFactoryDefineOptions<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends FieldsResolver<OptionalAuthor & TransientFields>,
  _Traits extends Traits<OptionalAuthor, TransientFields>,
> = TypeFactoryDefineOptions<OptionalAuthor, TransientFields, _DefaultFieldsResolver, _Traits>;

export type AuthorFactoryInterface<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends FieldsResolver<OptionalAuthor & TransientFields>,
  _Traits extends Traits<OptionalAuthor, TransientFields>,
> = TypeFactoryInterface<OptionalAuthor, TransientFields, _DefaultFieldsResolver, _Traits>;

export function defineAuthorFactoryInternal<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends FieldsResolver<OptionalAuthor & TransientFields>,
  _Traits extends Traits<OptionalAuthor, TransientFields>,
>(
  options: AuthorFactoryDefineOptions<TransientFields, _DefaultFieldsResolver, _Traits>,
): AuthorFactoryInterface<TransientFields, _DefaultFieldsResolver, _Traits> {
  return defineTypeFactoryInternal(AuthorFieldNames, options);
}

/**
 * Define factory for {@link Author} model.
 *
 * @param options
 * @returns factory {@link AuthorFactoryInterface}
 */
export function defineAuthorFactory<
  _DefaultFieldsResolver extends FieldsResolver<OptionalAuthor>,
  _Traits extends Traits<OptionalAuthor, {}>,
>(
  options: AuthorFactoryDefineOptions<{}, _DefaultFieldsResolver, _Traits>,
): AuthorFactoryInterface<{}, _DefaultFieldsResolver, _Traits> {
  return defineAuthorFactoryInternal(options);
}

export type OptionalBook = {
  __typename?: 'Book';
  id?: Book['id'] | undefined;
  title?: Book['title'] | undefined;
  author?: OptionalAuthor | undefined;
};

const BookFieldNames = ['__typename', 'id', 'title', 'author'] as const;

export type BookFactoryDefineOptions<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends FieldsResolver<OptionalBook & TransientFields>,
  _Traits extends Traits<OptionalBook, TransientFields>,
> = TypeFactoryDefineOptions<OptionalBook, TransientFields, _DefaultFieldsResolver, _Traits>;

export type BookFactoryInterface<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends FieldsResolver<OptionalBook & TransientFields>,
  _Traits extends Traits<OptionalBook, TransientFields>,
> = TypeFactoryInterface<OptionalBook, TransientFields, _DefaultFieldsResolver, _Traits>;

export function defineBookFactoryInternal<
  TransientFields extends Record<string, unknown>,
  _DefaultFieldsResolver extends FieldsResolver<OptionalBook & TransientFields>,
  _Traits extends Traits<OptionalBook, TransientFields>,
>(
  options: BookFactoryDefineOptions<TransientFields, _DefaultFieldsResolver, _Traits>,
): BookFactoryInterface<TransientFields, _DefaultFieldsResolver, _Traits> {
  return defineTypeFactoryInternal(BookFieldNames, options);
}

/**
 * Define factory for {@link Book} model.
 *
 * @param options
 * @returns factory {@link BookFactoryInterface}
 */
export function defineBookFactory<
  _DefaultFieldsResolver extends FieldsResolver<OptionalBook>,
  _Traits extends Traits<OptionalBook, {}>,
>(
  options: BookFactoryDefineOptions<{}, _DefaultFieldsResolver, _Traits>,
): BookFactoryInterface<{}, _DefaultFieldsResolver, _Traits> {
  return defineBookFactoryInternal(options);
}

