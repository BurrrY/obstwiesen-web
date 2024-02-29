/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Event = {
  __typename?: 'Event';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Meadow = {
  __typename?: 'Meadow';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  trees: Array<Tree>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  createMeadow: Meadow;
  createTree: Tree;
};


export type MutationCreateEventArgs = {
  input: NewEvent;
};


export type MutationCreateMeadowArgs = {
  input: NewMeadow;
};


export type MutationCreateTreeArgs = {
  input: NewTree;
};

export type NewEvent = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  treeID: Scalars['String']['input'];
};

export type NewMeadow = {
  name: Scalars['String']['input'];
};

export type NewTree = {
  meadowID: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  events: Array<Event>;
  meadows: Array<Meadow>;
  trees: Array<Tree>;
};


export type QueryEventsArgs = {
  tree_id: Scalars['String']['input'];
};


export type QueryTreesArgs = {
  meadow_id: Scalars['String']['input'];
};

export type Tree = {
  __typename?: 'Tree';
  events: Array<Maybe<Event>>;
  id: Scalars['ID']['output'];
  lang?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
};
