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
  Upload: { input: any; output: any; }
};

export type Coords = {
  __typename?: 'Coords';
  lang?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
};

export type CoordsInput = {
  lang?: InputMaybe<Scalars['Float']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
};

export type Event = {
  __typename?: 'Event';
  description: Scalars['String']['output'];
  files?: Maybe<Array<File>>;
  id: Scalars['ID']['output'];
  parentID: Scalars['ID']['output'];
  timestamp: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** The `File` type, represents the response of uploading a file. */
export type File = {
  __typename?: 'File';
  parentID: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type Meadow = {
  __typename?: 'Meadow';
  area: Array<Coords>;
  banner?: Maybe<File>;
  events?: Maybe<Array<Event>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  trees: Array<Tree>;
};

export type MeadowInput = {
  area?: InputMaybe<Array<CoordsInput>>;
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  createMeadow: Meadow;
  createTree: Tree;
  createVariety: Variety;
  multipleUpload: Array<File>;
  singleUpload: File;
  updateMeadow: Meadow;
  updateTree: Tree;
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


export type MutationCreateVarietyArgs = {
  input: VarietyInput;
};


export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']['input']>;
  parentID: Scalars['ID']['input'];
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload']['input'];
  parentID: Scalars['ID']['input'];
};


export type MutationUpdateMeadowArgs = {
  id: Scalars['ID']['input'];
  input: MeadowInput;
};


export type MutationUpdateTreeArgs = {
  id: Scalars['ID']['input'];
  input: TreeInput;
};

export type NewEvent = {
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<Scalars['Upload']['input']>>;
  parentID: Scalars['String']['input'];
  timestamp: Scalars['String']['input'];
  title: Scalars['String']['input'];
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
  meadow?: Maybe<Meadow>;
  meadows: Array<Meadow>;
  tree?: Maybe<Tree>;
  trees: Array<Tree>;
  varieties: Array<Variety>;
};


export type QueryEventsArgs = {
  tree_id: Scalars['String']['input'];
};


export type QueryMeadowArgs = {
  meadow_id: Scalars['ID']['input'];
};


export type QueryTreeArgs = {
  tree_id: Scalars['ID']['input'];
};


export type QueryTreesArgs = {
  meadow_id: Scalars['String']['input'];
};

export type Tree = {
  __typename?: 'Tree';
  banner?: Maybe<File>;
  events?: Maybe<Array<Event>>;
  id: Scalars['ID']['output'];
  lang?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  variety?: Maybe<Variety>;
};

export type TreeInput = {
  lang?: InputMaybe<Scalars['Float']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  variety?: InputMaybe<Scalars['ID']['input']>;
};

/** The `UploadFile` type, represents the request for uploading a file with a certain payload. */
export type UploadFile = {
  file: Scalars['Upload']['input'];
  id: Scalars['Int']['input'];
};

export type Variety = {
  __typename?: 'Variety';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent: Scalars['ID']['output'];
};

export type VarietyInput = {
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
};
