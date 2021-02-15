import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Int` scalar type represents non-fractional signed whole numeric
   * values. Int can represent values between -(2^31) and 2^31 - 1.
   */
  Timestamp: any;
  Map: any;
  FieldMetatags: any;
  Any: any;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
  SearchApiHtml: any;
  SearchApiText: any;
  Binary: any;
  DatetimeIso8601: any;
  Integer: any;
  Timespan: any;
};

export type Query = {
  __typename?: 'Query';
  languageInterfaceContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  webformContext?: Maybe<Entity>;
  webformSubmissionContext?: Maybe<WebformSubmission>;
  /** Loads 'Crop' entities by their id. */
  cropById?: Maybe<Crop>;
  /** Loads 'File' entities by their id. */
  fileById?: Maybe<File>;
  /** Loads 'APQ Query Map' entities by their id. */
  apqQueryMapById?: Maybe<ApqQueryMap>;
  /** Loads 'Media' entities by their id. */
  mediaById?: Maybe<Media>;
  /** Loads 'Content' entities by their id. */
  nodeById?: Maybe<Node>;
  /** Loads 'URL alias' entities by their id. */
  pathAliasById?: Maybe<PathAlias>;
  /** Loads 'Redirect' entities by their id. */
  redirectById?: Maybe<Redirect>;
  /** Loads 'Search task' entities by their id. */
  searchApiTaskById?: Maybe<SearchApiTask>;
  /** Loads 'Taxonomy term' entities by their id. */
  taxonomyTermById?: Maybe<TaxonomyTerm>;
  /** Loads 'User' entities by their id. */
  userById?: Maybe<User>;
  /** Loads 'Webform submission' entities by their id. */
  webformSubmissionById?: Maybe<WebformSubmission>;
  /** Loads 'CRM Mapper' entities by their id. */
  webformCrmMapperById?: Maybe<WebformCrmMapper>;
  /** Loads 'Custom menu link' entities by their id. */
  menuLinkContentById?: Maybe<MenuLinkContent>;
  /** Loads 'Paragraph' entities by their id. */
  paragraphById?: Maybe<Paragraph>;
  /** Loads 'Crop' entity revision by their revision id. */
  cropRevisionById?: Maybe<Crop>;
  /** Loads 'Media' entity revision by their revision id. */
  mediaRevisionById?: Maybe<Media>;
  /** Loads 'Content' entity revision by their revision id. */
  nodeRevisionById?: Maybe<Node>;
  /** Loads 'URL alias' entity revision by their revision id. */
  pathAliasRevisionById?: Maybe<PathAlias>;
  /** Loads 'Taxonomy term' entity revision by their revision id. */
  taxonomyTermRevisionById?: Maybe<TaxonomyTerm>;
  /** Loads 'Custom menu link' entity revision by their revision id. */
  menuLinkContentRevisionById?: Maybe<MenuLinkContent>;
  /** Loads 'Paragraph' entity revision by their revision id. */
  paragraphRevisionById?: Maybe<Paragraph>;
  /** Loads 'Crop' entities. */
  cropQuery?: Maybe<EntityQueryResult>;
  /** Loads 'File' entities. */
  fileQuery?: Maybe<EntityQueryResult>;
  /** Loads 'APQ Query Map' entities. */
  apqQueryMapQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Media' entities. */
  mediaQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Content' entities. */
  nodeQuery?: Maybe<EntityQueryResult>;
  /** Loads 'URL alias' entities. */
  pathAliasQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Redirect' entities. */
  redirectQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Search task' entities. */
  searchApiTaskQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Taxonomy term' entities. */
  taxonomyTermQuery?: Maybe<EntityQueryResult>;
  /** Loads 'User' entities. */
  userQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Webform submission' entities. */
  webformSubmissionQuery?: Maybe<EntityQueryResult>;
  /** Loads 'CRM Mapper' entities. */
  webformCrmMapperQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Custom menu link' entities. */
  menuLinkContentQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Paragraph' entities. */
  paragraphQuery?: Maybe<EntityQueryResult>;
  /** Loads the list of available languages. */
  availableLanguages: Array<Language>;
  /** Loads a menu by its machine-readable name. */
  menuByName?: Maybe<Menu>;
  /** Loads a route by its path. */
  route?: Maybe<Url>;
};


export type QueryCropByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryFileByIdArgs = {
  id: Scalars['String'];
};


export type QueryApqQueryMapByIdArgs = {
  id: Scalars['String'];
};


export type QueryMediaByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryNodeByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryPathAliasByIdArgs = {
  id: Scalars['String'];
};


export type QueryRedirectByIdArgs = {
  id: Scalars['String'];
};


export type QuerySearchApiTaskByIdArgs = {
  id: Scalars['String'];
};


export type QueryTaxonomyTermByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryWebformSubmissionByIdArgs = {
  id: Scalars['String'];
};


export type QueryWebformCrmMapperByIdArgs = {
  id: Scalars['String'];
};


export type QueryMenuLinkContentByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryParagraphByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryCropRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryMediaRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryNodeRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryPathAliasRevisionByIdArgs = {
  id: Scalars['String'];
};


export type QueryTaxonomyTermRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryMenuLinkContentRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryParagraphRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryCropQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryFileQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryApqQueryMapQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryMediaQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryNodeQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryPathAliasQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryRedirectQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QuerySearchApiTaskQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryTaxonomyTermQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryUserQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryWebformSubmissionQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryWebformCrmMapperQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryMenuLinkContentQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryParagraphQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryMenuByNameArgs = {
  name: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryRouteArgs = {
  path: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  /** The language id prepared as a language enum value. */
  argument?: Maybe<Scalars['String']>;
  /** The language direction (rtl or ltr). */
  direction?: Maybe<Scalars['String']>;
  /** The language id. */
  id?: Maybe<Scalars['String']>;
  /** Boolean indicating if this is the configured default language. */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** Boolean indicating if this language is locked. */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** The human-readable name of the language. */
  name?: Maybe<Scalars['String']>;
  /** The weight of the language. */
  weight?: Maybe<Scalars['Int']>;
};

/** The 'Content' entity type. */
export type Node = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
};


/** The 'Content' entity type. */
export type NodeEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Content' entity type. */
export type NodeEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Content' entity type. */
export type NodeEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Content' entity type. */
export type NodeEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Content' entity type. */
export type NodeEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Content' entity type. */
export type NodeEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Content' entity type. */
export type NodeEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Content' entity type. */
export type NodeQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

export type EntityQueryFilterInput = {
  conditions?: Maybe<Array<Maybe<EntityQueryFilterConditionInput>>>;
  groups?: Maybe<Array<Maybe<EntityQueryFilterInput>>>;
  conjunction?: Maybe<QueryConjunction>;
};

export type EntityQueryFilterConditionInput = {
  field: Scalars['String'];
  value?: Maybe<Array<Maybe<Scalars['String']>>>;
  operator?: Maybe<QueryOperator>;
  language?: Maybe<LanguageId>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export enum QueryOperator {
  Equal = 'EQUAL',
  NotEqual = 'NOT_EQUAL',
  SmallerThan = 'SMALLER_THAN',
  SmallerThanOrEqual = 'SMALLER_THAN_OR_EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  In = 'IN',
  NotIn = 'NOT_IN',
  Like = 'LIKE',
  NotLike = 'NOT_LIKE',
  Between = 'BETWEEN',
  NotBetween = 'NOT_BETWEEN',
  IsNull = 'IS_NULL',
  IsNotNull = 'IS_NOT_NULL'
}

export enum LanguageId {
  /** English */
  En = 'EN'
}

export enum QueryConjunction {
  And = 'AND',
  Or = 'OR'
}

export type EntityQuerySortInput = {
  field: Scalars['String'];
  direction?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum EntityQueryRevisionMode {
  /** Loads the current (default) revisions. */
  Default = 'DEFAULT',
  /** Loads all revisions. */
  All = 'ALL',
  /** Loads latest revision. */
  Latest = 'LATEST'
}

export enum EntityQueryBundleMode {
  /** Loads only entities that share the same bundle with the parent entity. */
  Same = 'SAME',
  /** Loads entities across all bundles. */
  All = 'ALL'
}

/** Wrapper type for entity query results containing the list of loaded entities and the full entity count for pagination purposes. */
export type EntityQueryResult = {
  __typename?: 'EntityQueryResult';
  count?: Maybe<Scalars['Int']>;
  entities: Array<Entity>;
};


/** Wrapper type for entity query results containing the list of loaded entities and the full entity count for pagination purposes. */
export type EntityQueryResultEntitiesArgs = {
  language?: Maybe<LanguageId>;
};

/** Common entity interface containing generic entity properties. */
export type Entity = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityTranslationArgs = {
  language: LanguageId;
};

/** Common interface for internal and external urls. */
export type Url = {
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
};


/** Common interface for internal and external urls. */
export type UrlTranslateArgs = {
  language: LanguageId;
};

/** The 'User' entity type. */
export type User = EntityRevisionable & Entity & {
  __typename?: 'User';
  entityRevisions: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  /** The user ID. */
  uid?: Maybe<Scalars['Int']>;
  /** The user UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The user language code. */
  langcode?: Maybe<FieldUserLangcode>;
  /** The user's preferred language code for receiving emails and viewing the site. */
  preferredLangcode?: Maybe<FieldUserPreferredLangcode>;
  /** The user's preferred language code for viewing administration pages. */
  preferredAdminLangcode?: Maybe<FieldUserPreferredAdminLangcode>;
  /** The name of this user. */
  name?: Maybe<Scalars['String']>;
  /** The password of this user (hashed). */
  pass?: Maybe<FieldUserPass>;
  /** The email of this user. */
  mail?: Maybe<Scalars['String']>;
  /** The timezone of this user. */
  timezone?: Maybe<Scalars['String']>;
  /** Whether the user is active or blocked. */
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the user was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the user was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The time that the user last accessed the site. */
  access?: Maybe<Scalars['Timestamp']>;
  /** The time that the user last logged in. */
  login?: Maybe<Scalars['Timestamp']>;
  /** The email address used for initial account creation. */
  init?: Maybe<Scalars['String']>;
  /** The roles the user has. */
  roles: Array<FieldUserRoles>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  fieldMedia?: Maybe<FieldUserFieldMedia>;
  fieldName?: Maybe<Scalars['String']>;
  /** Renders 'User' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The roles the user has. */
  queryRoles: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUidCrop: EntityQueryResult;
  /** Reverse reference: The user ID of the file. */
  reverseUidFile: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserMedia: EntityQueryResult;
  /** Reverse reference: The user ID of the author. */
  reverseUidMedia: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUidNode: EntityQueryResult;
  /** Reverse reference: The username of the content author. */
  reverseUidNode: EntityQueryResult;
  /** Reverse reference: The user ID of the node author. */
  reverseUidRedirect: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserTaxonomyTerm: EntityQueryResult;
  /** Reverse reference: The username of the user that submitted the webform. */
  reverseUidWebformSubmission: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserMenuLinkContent: EntityQueryResult;
};


/** The 'User' entity type. */
export type UserEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'User' entity type. */
export type UserEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'User' entity type. */
export type UserEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'User' entity type. */
export type UserEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'User' entity type. */
export type UserEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'User' entity type. */
export type UserEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'User' entity type. */
export type UserEntityRenderedArgs = {
  mode?: Maybe<UserDisplayModeId>;
};


/** The 'User' entity type. */
export type UserQueryRolesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUidCropArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidFileArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUidNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidRedirectArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidWebformSubmissionArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserMenuLinkContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** Common interface for entities that are revisionable. */
export type EntityRevisionable = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityTranslationArgs = {
  language: LanguageId;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The user language code. */
export type FieldUserLangcode = {
  __typename?: 'FieldUserLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user's preferred language code for receiving emails and viewing the site. */
export type FieldUserPreferredLangcode = {
  __typename?: 'FieldUserPreferredLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user's preferred language code for viewing administration pages. */
export type FieldUserPreferredAdminLangcode = {
  __typename?: 'FieldUserPreferredAdminLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The password of this user (hashed). */
export type FieldUserPass = {
  __typename?: 'FieldUserPass';
  value?: Maybe<Scalars['String']>;
  existing?: Maybe<Scalars['String']>;
  preHashed?: Maybe<Scalars['Boolean']>;
};


/** The roles the user has. */
export type FieldUserRoles = {
  __typename?: 'FieldUserRoles';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

export type FieldUserFieldMedia = {
  __typename?: 'FieldUserFieldMedia';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

/** The 'Media' entity type. */
export type Media = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryBundle: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  /** Query reference: The user ID of the author. */
  queryUid: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBackgroundImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldCtaMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldExteriorMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaUser: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSignatureParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeMediaParagraph: EntityQueryResult;
};


/** The 'Media' entity type. */
export type MediaEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Media' entity type. */
export type MediaEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Media' entity type. */
export type MediaEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Media' entity type. */
export type MediaEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Media' entity type. */
export type MediaEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Media' entity type. */
export type MediaEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Media' entity type. */
export type MediaEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Media' entity type. */
export type MediaQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldBackgroundImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldCtaMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldExteriorMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldMediaUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldSignatureParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldThreeMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

export type FieldMediaLangcode = {
  __typename?: 'FieldMediaLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

export type FieldMediaBundle = {
  __typename?: 'FieldMediaBundle';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The user ID of the author of the current revision. */
export type FieldMediaRevisionUser = {
  __typename?: 'FieldMediaRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The user ID of the author. */
export type FieldMediaUid = {
  __typename?: 'FieldMediaUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The thumbnail of the media item. */
export type FieldMediaThumbnail = {
  __typename?: 'FieldMediaThumbnail';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  derivative?: Maybe<ImageResource>;
  url?: Maybe<Scalars['String']>;
};


/** The thumbnail of the media item. */
export type FieldMediaThumbnailDerivativeArgs = {
  style: ImageStyleId;
};

/** The 'File' entity type. */
export type File = EntityRevisionable & EntityOwnable & Entity & {
  __typename?: 'File';
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<FocalPoint>;
  /** The file ID. */
  fid?: Maybe<Scalars['Int']>;
  /** The file UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The file language code. */
  langcode?: Maybe<FieldFileLangcode>;
  /** The user ID of the file. */
  uid?: Maybe<FieldFileUid>;
  /** Name of the file with no path components. */
  filename?: Maybe<Scalars['String']>;
  /** The URI to access the file (either local or remote). */
  uri?: Maybe<FieldFileUri>;
  /** The file's MIME type. */
  filemime?: Maybe<Scalars['String']>;
  /** The size of the file in bytes. */
  filesize?: Maybe<Scalars['Int']>;
  /** The status of the file, temporary (FALSE) and permanent (TRUE). */
  status?: Maybe<Scalars['Boolean']>;
  /** The timestamp that the file was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The timestamp that the file was last changed. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Renders 'File' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The user ID of the file. */
  queryUid: EntityQueryResult;
  url?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'File' entity type. */
export type FileEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'File' entity type. */
export type FileEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'File' entity type. */
export type FileEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'File' entity type. */
export type FileEntityRenderedArgs = {
  mode?: Maybe<FileDisplayModeId>;
};


/** The 'File' entity type. */
export type FileQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** Common interface for entities that have a owner. */
export type EntityOwnable = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityOwner?: Maybe<User>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityTranslationArgs = {
  language: LanguageId;
};

export type FocalPoint = {
  __typename?: 'FocalPoint';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

/** The file language code. */
export type FieldFileLangcode = {
  __typename?: 'FieldFileLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user ID of the file. */
export type FieldFileUid = {
  __typename?: 'FieldFileUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The URI to access the file (either local or remote). */
export type FieldFileUri = {
  __typename?: 'FieldFileUri';
  value?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** The available display modes for 'File' entities. */
export enum FileDisplayModeId {
  /** The 'Token' display mode for 'File' entities. */
  Token = 'TOKEN'
}

export enum ImageStyleId {
  /** Large (480×480) */
  Large = 'LARGE',
  /** Linkit result thumbnail */
  LinkitResultThumbnail = 'LINKIT_RESULT_THUMBNAIL',
  /** Media Entity Browser thumbnail */
  MediaEntityBrowserThumbnail = 'MEDIA_ENTITY_BROWSER_THUMBNAIL',
  /** Media Library (220x220) */
  MediaLibrary = 'MEDIA_LIBRARY',
  /** Media Library (220x220) */
  MediaLibraryCustom = 'MEDIA_LIBRARY_CUSTOM',
  /** Medium (220×220) */
  Medium = 'MEDIUM',
  /** Thumbnail (100×100) */
  Thumbnail = 'THUMBNAIL'
}

export type ImageResource = {
  __typename?: 'ImageResource';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** The available display modes for 'Media' entities. */
export enum MediaDisplayModeId {
  /** The 'Full content' display mode for 'Media' entities. */
  Full = 'FULL',
  /** The 'Media library' display mode for 'Media' entities. */
  MediaLibrary = 'MEDIA_LIBRARY',
  /** The 'Token' display mode for 'Media' entities. */
  Token = 'TOKEN'
}

/** The available display modes for 'User' entities. */
export enum UserDisplayModeId {
  /** The 'Token' display mode for 'User' entities. */
  Token = 'TOKEN'
}

export type FieldNodeLangcode = {
  __typename?: 'FieldNodeLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

export type FieldNodeType = {
  __typename?: 'FieldNodeType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The user ID of the author of the current revision. */
export type FieldNodeRevisionUid = {
  __typename?: 'FieldNodeRevisionUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The username of the content author. */
export type FieldNodeUid = {
  __typename?: 'FieldNodeUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The available display modes for 'Content' entities. */
export enum NodeDisplayModeId {
  /** The 'Volledige inhoud' display mode for 'Content' entities. */
  Full = 'FULL',
  /** The 'RSS' display mode for 'Content' entities. */
  Rss = 'RSS',
  /** The 'Teaser' display mode for 'Content' entities. */
  Teaser = 'TEASER',
  /** The 'Token' display mode for 'Content' entities. */
  Token = 'TOKEN'
}

/** The 'Webform submission' entity type. */
export type WebformSubmission = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** Redirect action that is returned to the front-end. */
  redirectAction?: Maybe<Scalars['String']>;
  /** Renders 'Webform submission' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid: EntityQueryResult;
  /** Query reference: The associated webform. */
  queryWebformId: EntityQueryResult;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The username of the user that submitted the webform. */
export type FieldWebformSubmissionUid = {
  __typename?: 'FieldWebformSubmissionUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The submission language code. */
export type FieldWebformSubmissionLangcode = {
  __typename?: 'FieldWebformSubmissionLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The associated webform. */
export type FieldWebformSubmissionWebformId = {
  __typename?: 'FieldWebformSubmissionWebformId';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The 'Crop' entity type. */
export type Crop = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /** The crop ID. */
  cid?: Maybe<Scalars['Int']>;
  /** The crop UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The crop revision ID. */
  vid?: Maybe<Scalars['Int']>;
  /** The crop type. */
  type?: Maybe<FieldCropType>;
  /** The node language code. */
  langcode?: Maybe<FieldCropLangcode>;
  /** The URI of the image crop belongs to. */
  uri?: Maybe<Scalars['String']>;
  /** The crop height. */
  height?: Maybe<Scalars['Int']>;
  /** The crop width. */
  width?: Maybe<Scalars['Int']>;
  /** The crop's X coordinate. */
  x?: Maybe<Scalars['Int']>;
  /** The crop's Y coordinate. */
  y?: Maybe<Scalars['Int']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldCropRevisionUid>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Crop' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The crop type. */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** ID of entity crop belongs to. */
  entityIdOfCrop?: Maybe<Scalars['Int']>;
  /** The type of entity crop belongs to. */
  entityTypeOfCrop?: Maybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Crop' entity type. */
export type CropEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Crop' entity type. */
export type CropEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Crop' entity type. */
export type CropEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Crop' entity type. */
export type CropQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Crop' entity type. */
export type CropQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The crop type. */
export type FieldCropType = {
  __typename?: 'FieldCropType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The node language code. */
export type FieldCropLangcode = {
  __typename?: 'FieldCropLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user ID of the author of the current revision. */
export type FieldCropRevisionUid = {
  __typename?: 'FieldCropRevisionUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The 'APQ Query Map' entity type. */
export type ApqQueryMap = EntityRevisionable & Entity & {
  __typename?: 'ApqQueryMap';
  entityRevisions: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  /** The unique hash identifying the query. */
  hash?: Maybe<Scalars['String']>;
  /** The GraphQL query. */
  query?: Maybe<Scalars['String']>;
  /** Renders 'APQ Query Map' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
};


/** The 'APQ Query Map' entity type. */
export type ApqQueryMapEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'APQ Query Map' entity type. */
export type ApqQueryMapEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'APQ Query Map' entity type. */
export type ApqQueryMapEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'APQ Query Map' entity type. */
export type ApqQueryMapEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'APQ Query Map' entity type. */
export type ApqQueryMapEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'APQ Query Map' entity type. */
export type ApqQueryMapEntityTranslationArgs = {
  language: LanguageId;
};

/** The 'URL alias' entity type. */
export type PathAlias = EntityPublishable & EntityRevisionable & Entity & {
  __typename?: 'PathAlias';
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldPathAliasLangcode>;
  /** The path that this alias belongs to. */
  path?: Maybe<Scalars['String']>;
  /** An alias used with this path. */
  alias?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Renders 'URL alias' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'URL alias' entity type. */
export type PathAliasEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityTranslationArgs = {
  language: LanguageId;
};

/** Common interface for entities that are publishable. */
export type EntityPublishable = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityTranslationArgs = {
  language: LanguageId;
};

export type FieldPathAliasLangcode = {
  __typename?: 'FieldPathAliasLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The 'Redirect' entity type. */
export type Redirect = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /** The redirect ID. */
  rid?: Maybe<Scalars['Int']>;
  /** The record UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The redirect hash. */
  hash?: Maybe<Scalars['String']>;
  /** The redirect type. */
  type?: Maybe<Scalars['String']>;
  /** The user ID of the node author. */
  uid?: Maybe<FieldRedirectUid>;
  /** Enter an internal Drupal path or path alias to redirect (e.g. <em class="placeholder">node/123</em> or <em class="placeholder">taxonomy/term/123</em>). Fragment anchors (e.g. <em class="placeholder">#anchor</em>) are <strong>not</strong> allowed. */
  redirectSource?: Maybe<FieldRedirectRedirectSource>;
  redirectRedirect?: Maybe<FieldRedirectRedirectRedirect>;
  /** The redirect language. */
  language?: Maybe<FieldRedirectLanguage>;
  /** The redirect status code. */
  statusCode?: Maybe<Scalars['Int']>;
  /** The date when the redirect was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** Renders 'Redirect' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The user ID of the node author. */
  queryUid: EntityQueryResult;
};


/** The 'Redirect' entity type. */
export type RedirectEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Redirect' entity type. */
export type RedirectEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Redirect' entity type. */
export type RedirectEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityRenderedArgs = {
  mode?: Maybe<RedirectDisplayModeId>;
};


/** The 'Redirect' entity type. */
export type RedirectQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The user ID of the node author. */
export type FieldRedirectUid = {
  __typename?: 'FieldRedirectUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** Enter an internal Drupal path or path alias to redirect (e.g. <em class="placeholder">node/123</em> or <em class="placeholder">taxonomy/term/123</em>). Fragment anchors (e.g. <em class="placeholder">#anchor</em>) are <strong>not</strong> allowed. */
export type FieldRedirectRedirectSource = {
  __typename?: 'FieldRedirectRedirectSource';
  path?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['Map']>;
};


export type FieldRedirectRedirectRedirect = {
  __typename?: 'FieldRedirectRedirectRedirect';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  attribute?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
};


export type FieldRedirectRedirectRedirectAttributeArgs = {
  key: Scalars['String'];
};

/** The redirect language. */
export type FieldRedirectLanguage = {
  __typename?: 'FieldRedirectLanguage';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The available display modes for 'Redirect' entities. */
export enum RedirectDisplayModeId {
  /** The 'Token' display mode for 'Redirect' entities. */
  Token = 'TOKEN'
}

/** The 'Search task' entity type. */
export type SearchApiTask = EntityRevisionable & Entity & {
  __typename?: 'SearchApiTask';
  entityRevisions: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  serverId?: Maybe<Scalars['String']>;
  indexId?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  /** Renders 'Search task' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
};


/** The 'Search task' entity type. */
export type SearchApiTaskEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Search task' entity type. */
export type SearchApiTaskEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Search task' entity type. */
export type SearchApiTaskEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Search task' entity type. */
export type SearchApiTaskEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Search task' entity type. */
export type SearchApiTaskEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Search task' entity type. */
export type SearchApiTaskEntityTranslationArgs = {
  language: LanguageId;
};

/** The 'Taxonomy term' entity type. */
export type TaxonomyTerm = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** The term ID. */
  tid?: Maybe<Scalars['Int']>;
  /** The term UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The term language code. */
  langcode?: Maybe<FieldTaxonomyTermLangcode>;
  /** The vocabulary to which the term is assigned. */
  vid?: Maybe<FieldTaxonomyTermVid>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldTaxonomyTermRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<FieldTaxonomyTermDescription>;
  /** The weight of this term in relation to other terms. */
  weight?: Maybe<Scalars['Int']>;
  /** The parents of this term. */
  parent: Array<FieldTaxonomyTermParent>;
  /** The time that the term was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Taxonomy term' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The vocabulary to which the term is assigned. */
  queryVid: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  /** Query reference: The parents of this term. */
  queryParent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBlogTypeNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagsNode: EntityQueryResult;
  /** Reverse reference: The parents of this term. */
  reverseParentTaxonomyTerm: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagsParagraph: EntityQueryResult;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityRenderedArgs = {
  mode?: Maybe<TaxonomyTermDisplayModeId>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermQueryVidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermQueryParentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermReverseFieldBlogTypeNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermReverseFieldTagsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermReverseParentTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermReverseFieldTagParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermReverseFieldTagsParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The term language code. */
export type FieldTaxonomyTermLangcode = {
  __typename?: 'FieldTaxonomyTermLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The vocabulary to which the term is assigned. */
export type FieldTaxonomyTermVid = {
  __typename?: 'FieldTaxonomyTermVid';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The user ID of the author of the current revision. */
export type FieldTaxonomyTermRevisionUser = {
  __typename?: 'FieldTaxonomyTermRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

export type FieldTaxonomyTermDescription = {
  __typename?: 'FieldTaxonomyTermDescription';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

/** The parents of this term. */
export type FieldTaxonomyTermParent = {
  __typename?: 'FieldTaxonomyTermParent';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

/** The available display modes for 'Taxonomy term' entities. */
export enum TaxonomyTermDisplayModeId {
  /** The 'Taxonomy term page' display mode for 'Taxonomy term' entities. */
  Full = 'FULL',
  /** The 'Token' display mode for 'Taxonomy term' entities. */
  Token = 'TOKEN'
}

/** The 'CRM Mapper' entity type. */
export type WebformCrmMapper = EntityRevisionable & Entity & {
  __typename?: 'WebformCrmMapper';
  entityRevisions: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  /** The time that the entity was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the entity was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The name of the entity. */
  name?: Maybe<Scalars['String']>;
  /** The API endpoint to which the CRM will connect. */
  endpoint?: Maybe<Scalars['String']>;
  /** The CRM to use for the connection. */
  crm?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  map: Array<Scalars['String']>;
  /** Renders 'CRM Mapper' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
};


/** The 'CRM Mapper' entity type. */
export type WebformCrmMapperEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'CRM Mapper' entity type. */
export type WebformCrmMapperEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'CRM Mapper' entity type. */
export type WebformCrmMapperEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'CRM Mapper' entity type. */
export type WebformCrmMapperEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'CRM Mapper' entity type. */
export type WebformCrmMapperEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'CRM Mapper' entity type. */
export type WebformCrmMapperEntityTranslationArgs = {
  language: LanguageId;
};

/** The 'Custom menu link' entity type. */
export type MenuLinkContent = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** The entity ID for this menu link content entity. */
  id?: Maybe<Scalars['Int']>;
  /** The content menu link UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The menu link language code. */
  langcode?: Maybe<FieldMenuLinkContentLangcode>;
  /** The content menu link bundle. */
  bundle?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMenuLinkContentRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** A flag for whether the link should be enabled in menus or hidden. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The text to be used for this link in the menu. */
  title?: Maybe<Scalars['String']>;
  /** Shown when hovering over the menu link. */
  description?: Maybe<Scalars['String']>;
  /** The menu name. All links with the same menu name (such as "tools") are part of the same menu. */
  menuName?: Maybe<Scalars['String']>;
  /** The location this menu link points to. */
  link?: Maybe<FieldMenuLinkContentLink>;
  /** A flag to indicate if the link points to a full URL starting with a protocol, like http:// (1 = external, 0 = internal). */
  external?: Maybe<Scalars['Boolean']>;
  rediscover?: Maybe<Scalars['Boolean']>;
  /** Link weight among links in the same menu at the same depth. In the menu, the links with high weight will sink and links with a low weight will be positioned nearer the top. */
  weight?: Maybe<Scalars['Int']>;
  /** If selected and this menu link has children, the menu will always appear expanded. This option may be overridden for the entire menu tree when placing a menu block. */
  expanded?: Maybe<Scalars['Boolean']>;
  /** The ID of the parent menu link plugin, or empty string when at the top level of the hierarchy. */
  parent?: Maybe<Scalars['String']>;
  /** The time that the menu link was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Custom menu link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The menu link language code. */
export type FieldMenuLinkContentLangcode = {
  __typename?: 'FieldMenuLinkContentLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user ID of the author of the current revision. */
export type FieldMenuLinkContentRevisionUser = {
  __typename?: 'FieldMenuLinkContentRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The location this menu link points to. */
export type FieldMenuLinkContentLink = {
  __typename?: 'FieldMenuLinkContentLink';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  attribute?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
};


/** The location this menu link points to. */
export type FieldMenuLinkContentLinkAttributeArgs = {
  key: Scalars['String'];
};

/** The 'Paragraph' entity type. */
export type Paragraph = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The paragraphs entity language code. */
export type FieldParagraphLangcode = {
  __typename?: 'FieldParagraphLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

export type FieldParagraphType = {
  __typename?: 'FieldParagraphType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The available display modes for 'Paragraph' entities. */
export enum ParagraphDisplayModeId {
  /** The 'Preview' display mode for 'Paragraph' entities. */
  Preview = 'PREVIEW',
  /** The 'Token' display mode for 'Paragraph' entities. */
  Token = 'TOKEN'
}

export type Menu = {
  __typename?: 'Menu';
  /** The menu's description. */
  description?: Maybe<Scalars['String']>;
  links: Array<MenuLink>;
  /** The menu's name. */
  name?: Maybe<Scalars['String']>;
};

export type MenuLink = {
  __typename?: 'MenuLink';
  attribute?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expanded?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  links: Array<MenuLink>;
  url?: Maybe<Url>;
};


export type MenuLinkAttributeArgs = {
  key: Scalars['String'];
};

/** Common interface for entities that are describable. */
export type EntityDescribable = {
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityDescription?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityTranslationArgs = {
  language: LanguageId;
};

/** Common interface for internal urls. */
export type InternalUrl = {
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  blocksByRegion: Array<Entity>;
  breadcrumb: Array<Link>;
  languageInterfaceContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  webformContext?: Maybe<Entity>;
  webformSubmissionContext?: Maybe<WebformSubmission>;
  languageSwitchLinks: Array<LanguageSwitchLink>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  request?: Maybe<InternalResponse>;
};


/** Common interface for internal urls. */
export type InternalUrlTranslateArgs = {
  language: LanguageId;
};


/** Common interface for internal urls. */
export type InternalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


/** Common interface for internal urls. */
export type InternalUrlLanguageSwitchLinksArgs = {
  language?: Maybe<LanguageId>;
};

export type Link = {
  __typename?: 'Link';
  /** The label of a link. */
  text?: Maybe<Scalars['String']>;
  /** The url of a link. */
  url?: Maybe<Url>;
};

export type LanguageSwitchLink = {
  __typename?: 'LanguageSwitchLink';
  active?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Language>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<InternalUrl>;
};

export type InternalResponse = {
  __typename?: 'InternalResponse';
  code?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
};


export type InternalResponseHeaderArgs = {
  key?: Maybe<Scalars['String']>;
};

export type FilterType = {
  __typename?: 'FilterType';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Filters = {
  __typename?: 'Filters';
  blogTypes: Array<TaxonomyTermTags>;
  brands: Array<NodeBrand>;
  styles: Array<NodeStyle>;
  type: Array<FilterType>;
};

/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTags = TaxonomyTerm & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'TaxonomyTermTags';
  /** The term ID. */
  tid?: Maybe<Scalars['Int']>;
  /** The term UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The term language code. */
  langcode?: Maybe<FieldTaxonomyTermLangcode>;
  /** The vocabulary to which the term is assigned. */
  vid?: Maybe<FieldTaxonomyTermVid>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldTaxonomyTermRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<FieldTaxonomyTermDescription>;
  /** The weight of this term in relation to other terms. */
  weight?: Maybe<Scalars['Int']>;
  /** The parents of this term. */
  parent: Array<FieldTaxonomyTermParent>;
  /** The time that the term was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Taxonomy term' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The vocabulary to which the term is assigned. */
  queryVid: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  /** Query reference: The parents of this term. */
  queryParent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBlogTypeNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagsNode: EntityQueryResult;
  /** Reverse reference: The parents of this term. */
  reverseParentTaxonomyTerm: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagsParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  fieldBlogCategory?: Maybe<Scalars['Boolean']>;
  fieldSeoText?: Maybe<FieldTaxonomyTermFieldSeoText>;
  fieldShowInTeaserBlock?: Maybe<Scalars['Boolean']>;
  fieldSubtitle?: Maybe<Scalars['String']>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityRenderedArgs = {
  mode?: Maybe<TaxonomyTermDisplayModeId>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsQueryVidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsQueryParentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsReverseFieldBlogTypeNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsReverseFieldTagsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsReverseParentTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsReverseFieldTagParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsReverseFieldTagsParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldTaxonomyTermFieldSeoText = {
  __typename?: 'FieldTaxonomyTermFieldSeoText';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrand = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeBrand';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  relatedInspiration: Array<NodeInspiration>;
  body?: Maybe<FieldNodeBody>;
  fieldGallery?: Maybe<FieldNodeFieldGallery>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldDescription: FieldNodeFieldDescription;
  fieldMedia: FieldNodeFieldMedia;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Merk' bundle of the 'Content' entity type. */
export type NodeBrandEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspiration = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeInspiration';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldInspirationTypeLabel?: Maybe<Scalars['String']>;
  nextProject?: Maybe<NodeInspiration>;
  fieldBathroomMaster?: Maybe<FieldNodeFieldBathroomMaster>;
  fieldBrands: Array<FieldNodeFieldBrands>;
  fieldHideOnOverview?: Maybe<Scalars['Boolean']>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldShowroom?: Maybe<FieldNodeFieldShowroom>;
  fieldStyles: Array<FieldNodeFieldStyles>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldWeight?: Maybe<Scalars['Int']>;
  installationIncluded?: Maybe<Scalars['Boolean']>;
  fieldBudget: Scalars['Int'];
  fieldDescription: FieldNodeFieldDescription;
  fieldInspirationType: Scalars['String'];
  fieldMedia: FieldNodeFieldMedia;
  fieldSize: Scalars['Int'];
  fieldSubtitle: Scalars['String'];
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Inspiratie' bundle of the 'Content' entity type. */
export type NodeInspirationEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldBathroomMaster = {
  __typename?: 'FieldNodeFieldBathroomMaster';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldBrands = {
  __typename?: 'FieldNodeFieldBrands';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

export type FieldNodeFieldMetatags = {
  __typename?: 'FieldNodeFieldMetatags';
  value?: Maybe<Scalars['FieldMetatags']>;
  normalized?: Maybe<Array<Maybe<Field_Metatags_Map>>>;
};


/** Custom field */
export type Field_Metatags_Map = {
  __typename?: 'field_metatags_map';
  type: Scalars['String'];
  value: Scalars['String'];
};

export type FieldNodeFieldParagraphs = {
  __typename?: 'FieldNodeFieldParagraphs';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldShowroom = {
  __typename?: 'FieldNodeFieldShowroom';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

export type FieldNodeFieldStyles = {
  __typename?: 'FieldNodeFieldStyles';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

export type FieldNodeFieldTags = {
  __typename?: 'FieldNodeFieldTags';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

export type FieldNodeFieldDescription = {
  __typename?: 'FieldNodeFieldDescription';
  stripped: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

export type FieldNodeFieldMedia = {
  __typename?: 'FieldNodeFieldMedia';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

export type FieldNodeBody = {
  __typename?: 'FieldNodeBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

export type FieldNodeFieldGallery = {
  __typename?: 'FieldNodeFieldGallery';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyle = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeStyle';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldSubtitleMatchedContent?: Maybe<Scalars['String']>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldDescription: FieldNodeFieldDescription;
  fieldMedia: FieldNodeFieldMedia;
  fieldSubtitle: Scalars['String'];
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Stijl' bundle of the 'Content' entity type. */
export type NodeStyleEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type EntityOverview = {
  __typename?: 'EntityOverview';
  filters: Filters;
  count?: Maybe<Scalars['String']>;
  pager?: Maybe<Pager>;
  entities?: Maybe<Array<Node>>;
};

export type Pager = {
  __typename?: 'Pager';
  currentPage: Scalars['Int'];
  itemsPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPoint = Crop & Entity & EntityRevisionable & {
  __typename?: 'CropFocalPoint';
  /** The crop ID. */
  cid?: Maybe<Scalars['Int']>;
  /** The crop UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The crop revision ID. */
  vid?: Maybe<Scalars['Int']>;
  /** The crop type. */
  type?: Maybe<FieldCropType>;
  /** The node language code. */
  langcode?: Maybe<FieldCropLangcode>;
  /** The URI of the image crop belongs to. */
  uri?: Maybe<Scalars['String']>;
  /** The crop height. */
  height?: Maybe<Scalars['Int']>;
  /** The crop width. */
  width?: Maybe<Scalars['Int']>;
  /** The crop's X coordinate. */
  x?: Maybe<Scalars['Int']>;
  /** The crop's Y coordinate. */
  y?: Maybe<Scalars['Int']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldCropRevisionUid>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Crop' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The crop type. */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** ID of entity crop belongs to. */
  entityIdOfCrop?: Maybe<Scalars['Int']>;
  /** The type of entity crop belongs to. */
  entityTypeOfCrop?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'File' bundle of the 'Media' entity type. */
export type MediaFile = Media & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'MediaFile';
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryBundle: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  /** Query reference: The user ID of the author. */
  queryUid: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBackgroundImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldCtaMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldExteriorMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaUser: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSignatureParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeMediaParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMediaFile: FieldMediaFieldMediaFile;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldBackgroundImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldCtaMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldExteriorMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldMediaUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldSignatureParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldThreeMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'File' bundle of the 'Media' entity type. */
export type MediaFileEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldMediaFieldMediaFile = {
  __typename?: 'FieldMediaFieldMediaFile';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Flag to control whether this file should be displayed when viewing content */
  display?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
};

/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImage = Media & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'MediaImage';
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryBundle: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  /** Query reference: The user ID of the author. */
  queryUid: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBackgroundImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldCtaMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldExteriorMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaUser: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSignatureParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeMediaParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMediaImage: FieldMediaFieldMediaImage;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldBackgroundImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldCtaMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldExteriorMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldMediaUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldSignatureParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldThreeMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldMediaFieldMediaImage = {
  __typename?: 'FieldMediaFieldMediaImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  derivative?: Maybe<ImageResource>;
  url?: Maybe<Scalars['String']>;
};


export type FieldMediaFieldMediaImageDerivativeArgs = {
  style: ImageStyleId;
};

/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithText = Media & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'MediaImageWithText';
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryBundle: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  /** Query reference: The user ID of the author. */
  queryUid: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBackgroundImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldCtaMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldExteriorMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaUser: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSignatureParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeMediaParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldDescription?: Maybe<Scalars['String']>;
  fieldTitle?: Maybe<Scalars['String']>;
  fieldMediaImage: FieldMediaFieldMediaImage;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldBackgroundImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldCtaMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldExteriorMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldMediaUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldSignatureParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextReverseFieldThreeMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image with text' bundle of the 'Media' entity type. */
export type MediaImageWithTextEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideo = Media & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'MediaRemoteVideo';
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryBundle: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  /** Query reference: The user ID of the author. */
  queryUid: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBackgroundImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldCtaMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldExteriorMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaUser: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSignatureParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeMediaParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMediaOembedVideo: Scalars['String'];
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldBackgroundImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldCtaMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldExteriorMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldMediaUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldSignatureParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoReverseFieldThreeMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Remote video' bundle of the 'Media' entity type. */
export type MediaRemoteVideoEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideo = Media & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'MediaVideo';
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryBundle: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  /** Query reference: The user ID of the author. */
  queryUid: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBackgroundImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldCtaMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldExteriorMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaUser: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSignatureParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeMediaParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMediaFile: FieldMediaFieldMediaFile;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldBackgroundImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldCtaMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldExteriorMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldMediaUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldSignatureParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldThreeMediaParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthor = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeAuthor';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  referencedBlogs: Array<NodeBlog>;
  body?: Maybe<FieldNodeBody>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldFirstName: Scalars['String'];
  fieldMedia: FieldNodeFieldMedia;
  fieldSpecialism: Scalars['String'];
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Auteur' bundle of the 'Content' entity type. */
export type NodeAuthorEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlog = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeBlog';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  relatedBlogs: Array<NodeBlog>;
  fieldCta?: Maybe<FieldNodeFieldCta>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldSubtitle?: Maybe<Scalars['String']>;
  fieldSubtitleMatchedContent?: Maybe<Scalars['String']>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldAuthor: FieldNodeFieldAuthor;
  fieldBlogType: FieldNodeFieldBlogType;
  fieldDescription: FieldNodeFieldDescription;
  fieldMedia: FieldNodeFieldMedia;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Blog' bundle of the 'Content' entity type. */
export type NodeBlogEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldCta = {
  __typename?: 'FieldNodeFieldCta';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldAuthor = {
  __typename?: 'FieldNodeFieldAuthor';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

export type FieldNodeFieldBlogType = {
  __typename?: 'FieldNodeFieldBlogType';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPage = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeBasicPage';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldDescription: FieldNodeFieldDescription;
  fieldMedia: FieldNodeFieldMedia;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Basic pagina' bundle of the 'Content' entity type. */
export type NodeBasicPageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProduct = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeProduct';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  body?: Maybe<FieldNodeBody>;
  fieldImage: Array<FieldNodeFieldImage>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldParagraphsContainer: Array<FieldNodeFieldParagraphsContainer>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldWeight?: Maybe<Scalars['Int']>;
  fieldDescription: FieldNodeFieldDescription;
  fieldDescriptionOverview: Scalars['String'];
  fieldMedia: FieldNodeFieldMedia;
  fieldProductCategory: FieldNodeFieldProductCategory;
  fieldSubtitle: Scalars['String'];
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Product' bundle of the 'Content' entity type. */
export type NodeProductEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldImage = {
  __typename?: 'FieldNodeFieldImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

export type FieldNodeFieldParagraphsContainer = {
  __typename?: 'FieldNodeFieldParagraphsContainer';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldProductCategory = {
  __typename?: 'FieldNodeFieldProductCategory';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategory = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeProductCategory';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  productCategoryRelatedBlogs: Array<NodeBlog>;
  productCategoryRelatedproducts: Array<NodeProduct>;
  body?: Maybe<FieldNodeBody>;
  fieldCta?: Maybe<FieldNodeFieldCta>;
  fieldDescriptionOverview?: Maybe<Scalars['String']>;
  fieldMedia?: Maybe<FieldNodeFieldMedia>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldTags: Array<FieldNodeFieldTags>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Product category' bundle of the 'Content' entity type. */
export type NodeProductCategoryEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroom = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeShowroom';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldProvinceLabel: Scalars['String'];
  relatedInspiration: Array<NodeInspiration>;
  fieldClosedDates: Array<FieldNodeFieldClosedDates>;
  fieldCta?: Maybe<FieldNodeFieldCta>;
  fieldExteriorMedia?: Maybe<FieldNodeFieldExteriorMedia>;
  fieldHomeAppointmentPossible?: Maybe<Scalars['Boolean']>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldSchedule: Array<FieldNodeFieldSchedule>;
  fieldShow360View?: Maybe<Scalars['Boolean']>;
  fieldShowInteractiveMap?: Maybe<Scalars['Boolean']>;
  fieldSubtitle?: Maybe<Scalars['String']>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldUsps?: Maybe<FieldNodeFieldUsps>;
  fieldWebsite?: Maybe<Scalars['String']>;
  fieldAddress: Scalars['String'];
  fieldCity: Scalars['String'];
  fieldClangBranch: Scalars['String'];
  fieldCtaDescription: Scalars['String'];
  fieldCtaMedia: FieldNodeFieldCtaMedia;
  fieldDescription: FieldNodeFieldDescription;
  fieldEmail: Scalars['String'];
  fieldLocation: FieldNodeFieldLocation;
  fieldMedia: FieldNodeFieldMedia;
  fieldPeople: FieldNodeFieldPeople;
  fieldPostcode: Scalars['String'];
  fieldProvince: Scalars['String'];
  fieldTelephone: Scalars['String'];
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Showroom' bundle of the 'Content' entity type. */
export type NodeShowroomEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldClosedDates = {
  __typename?: 'FieldNodeFieldClosedDates';
  value?: Maybe<Scalars['String']>;
  /** The computed start DateTime object. */
  startDate?: Maybe<Scalars['Any']>;
  endValue?: Maybe<Scalars['String']>;
  /** The computed end DateTime object. */
  endDate?: Maybe<Scalars['Any']>;
};


export type FieldNodeFieldExteriorMedia = {
  __typename?: 'FieldNodeFieldExteriorMedia';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

export type FieldNodeFieldSchedule = {
  __typename?: 'FieldNodeFieldSchedule';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldUsps = {
  __typename?: 'FieldNodeFieldUsps';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldCtaMedia = {
  __typename?: 'FieldNodeFieldCtaMedia';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

export type FieldNodeFieldLocation = {
  __typename?: 'FieldNodeFieldLocation';
  name?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  marker?: Maybe<Scalars['Int']>;
  traffic?: Maybe<Scalars['Int']>;
  markerIcon?: Maybe<Scalars['String']>;
  controls?: Maybe<Scalars['Int']>;
  infowindow?: Maybe<Scalars['String']>;
};

export type FieldNodeFieldPeople = {
  __typename?: 'FieldNodeFieldPeople';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPage = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeSpecialPage';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldDescription: FieldNodeFieldDescription;
  fieldMedia: FieldNodeFieldMedia;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Speciaal pagina' bundle of the 'Content' entity type. */
export type NodeSpecialPageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrend = Node & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'NodeTrend';
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Specifies which action that Rabbit Hole should take. */
  rhAction?: Maybe<Scalars['String']>;
  /** The path to where the user should get redirected to. */
  rhRedirect?: Maybe<Scalars['String']>;
  /** Specifies the HTTP response code that should be used when perform a redirect. */
  rhRedirectResponse?: Maybe<Scalars['Int']>;
  /** Specifies the action that should be used when the redirect path is invalid or empty. */
  rhRedirectFallbackAction?: Maybe<Scalars['String']>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid: EntityQueryResult;
  /** Query reference: The username of the content author. */
  queryUid: EntityQueryResult;
  /** Query reference:  */
  queryFieldAuthor: EntityQueryResult;
  /** Query reference:  */
  queryFieldBackgroundImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldBlogType: EntityQueryResult;
  /** Query reference:  */
  queryFieldBrands: EntityQueryResult;
  /** Query reference:  */
  queryFieldCtaMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldExteriorMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldProductCategory: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldStyles: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldAuthorNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBrandsNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldProductCategoryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldStylesNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldContentParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldShowroomParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldThreeContentParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldBackgroundImage?: Maybe<FieldNodeFieldBackgroundImage>;
  fieldDescriptionOverview?: Maybe<Scalars['String']>;
  fieldImage: Array<FieldNodeFieldImage>;
  fieldMetatags?: Maybe<FieldNodeFieldMetatags>;
  fieldParagraphs: Array<FieldNodeFieldParagraphs>;
  fieldSubtitleOverview?: Maybe<Scalars['String']>;
  fieldTags: Array<FieldNodeFieldTags>;
  fieldWeight?: Maybe<Scalars['Int']>;
  fieldDescription: FieldNodeFieldDescription;
  fieldMedia: FieldNodeFieldMedia;
  fieldSubtitle: Scalars['String'];
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldAuthorArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldBackgroundImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldBlogTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldBrandsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldCtaMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldExteriorMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldProductCategoryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldStylesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendReverseFieldAuthorNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendReverseFieldBrandsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendReverseFieldProductCategoryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendReverseFieldShowroomNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendReverseFieldStylesNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendReverseFieldContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendReverseFieldShowroomParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendReverseFieldThreeContentParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Trend' bundle of the 'Content' entity type. */
export type NodeTrendEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldNodeFieldBackgroundImage = {
  __typename?: 'FieldNodeFieldBackgroundImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirect = Redirect & Entity & EntityRevisionable & {
  __typename?: 'RedirectRedirect';
  /** The redirect ID. */
  rid?: Maybe<Scalars['Int']>;
  /** The record UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The redirect hash. */
  hash?: Maybe<Scalars['String']>;
  /** The redirect type. */
  type?: Maybe<Scalars['String']>;
  /** The user ID of the node author. */
  uid?: Maybe<FieldRedirectUid>;
  /** Enter an internal Drupal path or path alias to redirect (e.g. <em class="placeholder">node/123</em> or <em class="placeholder">taxonomy/term/123</em>). Fragment anchors (e.g. <em class="placeholder">#anchor</em>) are <strong>not</strong> allowed. */
  redirectSource?: Maybe<FieldRedirectRedirectSource>;
  redirectRedirect?: Maybe<FieldRedirectRedirectRedirect>;
  /** The redirect language. */
  language?: Maybe<FieldRedirectLanguage>;
  /** The redirect status code. */
  statusCode?: Maybe<Scalars['Int']>;
  /** The date when the redirect was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** Renders 'Redirect' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The user ID of the node author. */
  queryUid: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityRenderedArgs = {
  mode?: Maybe<RedirectDisplayModeId>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogType = TaxonomyTerm & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'TaxonomyTermBlogType';
  /** The term ID. */
  tid?: Maybe<Scalars['Int']>;
  /** The term UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The term language code. */
  langcode?: Maybe<FieldTaxonomyTermLangcode>;
  /** The vocabulary to which the term is assigned. */
  vid?: Maybe<FieldTaxonomyTermVid>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldTaxonomyTermRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<FieldTaxonomyTermDescription>;
  /** The weight of this term in relation to other terms. */
  weight?: Maybe<Scalars['Int']>;
  /** The parents of this term. */
  parent: Array<FieldTaxonomyTermParent>;
  /** The time that the term was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Taxonomy term' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The vocabulary to which the term is assigned. */
  queryVid: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  /** Query reference: The parents of this term. */
  queryParent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldBlogTypeNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagsNode: EntityQueryResult;
  /** Reverse reference: The parents of this term. */
  reverseParentTaxonomyTerm: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagParagraph: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagsParagraph: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeEntityRenderedArgs = {
  mode?: Maybe<TaxonomyTermDisplayModeId>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeQueryVidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeQueryParentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeReverseFieldBlogTypeNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeReverseFieldTagsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeReverseParentTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeReverseFieldTagParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeReverseFieldTagsParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Blog type' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermBlogTypeEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Afspraak maken' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionAfspraakMaken = WebformSubmission & Entity & EntityRevisionable & EntityOwnable & {
  __typename?: 'WebformSubmissionAfspraakMaken';
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** Redirect action that is returned to the front-end. */
  redirectAction?: Maybe<Scalars['String']>;
  /** Renders 'Webform submission' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid: EntityQueryResult;
  /** Query reference: The associated webform. */
  queryWebformId: EntityQueryResult;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** The 'Afspraak maken' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionAfspraakMakenQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Afspraak maken' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionAfspraakMakenQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Afspraak maken' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionAfspraakMakenEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Afspraak maken' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionAfspraakMakenEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Afspraak maken' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionAfspraakMakenEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Afspraak maken' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionAfspraakMakenEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Afspraak maken' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionAfspraakMakenEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Afspraak maken' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionAfspraakMakenEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContact = WebformSubmission & Entity & EntityRevisionable & EntityOwnable & {
  __typename?: 'WebformSubmissionContact';
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** Redirect action that is returned to the front-end. */
  redirectAction?: Maybe<Scalars['String']>;
  /** Renders 'Webform submission' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid: EntityQueryResult;
  /** Query reference: The associated webform. */
  queryWebformId: EntityQueryResult;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Franchisenemer aanvraag ' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionFranchisenemerAanvraag = WebformSubmission & Entity & EntityRevisionable & EntityOwnable & {
  __typename?: 'WebformSubmissionFranchisenemerAanvraag';
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** Redirect action that is returned to the front-end. */
  redirectAction?: Maybe<Scalars['String']>;
  /** Renders 'Webform submission' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid: EntityQueryResult;
  /** Query reference: The associated webform. */
  queryWebformId: EntityQueryResult;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** The 'Franchisenemer aanvraag ' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionFranchisenemerAanvraagQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Franchisenemer aanvraag ' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionFranchisenemerAanvraagQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Franchisenemer aanvraag ' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionFranchisenemerAanvraagEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Franchisenemer aanvraag ' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionFranchisenemerAanvraagEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Franchisenemer aanvraag ' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionFranchisenemerAanvraagEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Franchisenemer aanvraag ' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionFranchisenemerAanvraagEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Franchisenemer aanvraag ' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionFranchisenemerAanvraagEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Franchisenemer aanvraag ' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionFranchisenemerAanvraagEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Magazine' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionMagazine = WebformSubmission & Entity & EntityRevisionable & EntityOwnable & {
  __typename?: 'WebformSubmissionMagazine';
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** Redirect action that is returned to the front-end. */
  redirectAction?: Maybe<Scalars['String']>;
  /** Renders 'Webform submission' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid: EntityQueryResult;
  /** Query reference: The associated webform. */
  queryWebformId: EntityQueryResult;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** The 'Magazine' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionMagazineQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Magazine' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionMagazineQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Magazine' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionMagazineEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Magazine' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionMagazineEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Magazine' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionMagazineEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Magazine' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionMagazineEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Magazine' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionMagazineEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Magazine' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionMagazineEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Nieuwsbrief (LOCKED)' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletter = WebformSubmission & Entity & EntityRevisionable & EntityOwnable & {
  __typename?: 'WebformSubmissionNewsletter';
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** Redirect action that is returned to the front-end. */
  redirectAction?: Maybe<Scalars['String']>;
  /** Renders 'Webform submission' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid: EntityQueryResult;
  /** Query reference: The associated webform. */
  queryWebformId: EntityQueryResult;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** The 'Nieuwsbrief (LOCKED)' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Nieuwsbrief (LOCKED)' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Nieuwsbrief (LOCKED)' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Nieuwsbrief (LOCKED)' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Nieuwsbrief (LOCKED)' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Nieuwsbrief (LOCKED)' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Nieuwsbrief (LOCKED)' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Nieuwsbrief (LOCKED)' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Nieuwsbrief' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNieuwsbrief = WebformSubmission & Entity & EntityRevisionable & EntityOwnable & {
  __typename?: 'WebformSubmissionNieuwsbrief';
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** Redirect action that is returned to the front-end. */
  redirectAction?: Maybe<Scalars['String']>;
  /** Renders 'Webform submission' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid: EntityQueryResult;
  /** Query reference: The associated webform. */
  queryWebformId: EntityQueryResult;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** The 'Nieuwsbrief' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNieuwsbriefQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Nieuwsbrief' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNieuwsbriefQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Nieuwsbrief' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNieuwsbriefEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Nieuwsbrief' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNieuwsbriefEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Nieuwsbrief' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNieuwsbriefEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Nieuwsbrief' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNieuwsbriefEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Nieuwsbrief' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNieuwsbriefEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Nieuwsbrief' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNieuwsbriefEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Stijlanalyse' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionStijlanalyse = WebformSubmission & Entity & EntityRevisionable & EntityOwnable & {
  __typename?: 'WebformSubmissionStijlanalyse';
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** Redirect action that is returned to the front-end. */
  redirectAction?: Maybe<Scalars['String']>;
  /** Renders 'Webform submission' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid: EntityQueryResult;
  /** Query reference: The associated webform. */
  queryWebformId: EntityQueryResult;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** The 'Stijlanalyse' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionStijlanalyseQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijlanalyse' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionStijlanalyseQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Stijlanalyse' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionStijlanalyseEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Stijlanalyse' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionStijlanalyseEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Stijlanalyse' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionStijlanalyseEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Stijlanalyse' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionStijlanalyseEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Stijlanalyse' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionStijlanalyseEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Stijlanalyse' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionStijlanalyseEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Trendkrant aanvragen' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionTrendkrandAanvragen = WebformSubmission & Entity & EntityRevisionable & EntityOwnable & {
  __typename?: 'WebformSubmissionTrendkrandAanvragen';
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** Redirect action that is returned to the front-end. */
  redirectAction?: Maybe<Scalars['String']>;
  /** Renders 'Webform submission' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid: EntityQueryResult;
  /** Query reference: The associated webform. */
  queryWebformId: EntityQueryResult;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** The 'Trendkrant aanvragen' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionTrendkrandAanvragenQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trendkrant aanvragen' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionTrendkrandAanvragenQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Trendkrant aanvragen' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionTrendkrandAanvragenEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Trendkrant aanvragen' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionTrendkrandAanvragenEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Trendkrant aanvragen' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionTrendkrandAanvragenEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Trendkrant aanvragen' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionTrendkrandAanvragenEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Trendkrant aanvragen' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionTrendkrandAanvragenEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Trendkrant aanvragen' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionTrendkrandAanvragenEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContent = MenuLinkContent & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'MenuLinkContentMenuLinkContent';
  /** The entity ID for this menu link content entity. */
  id?: Maybe<Scalars['Int']>;
  /** The content menu link UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The menu link language code. */
  langcode?: Maybe<FieldMenuLinkContentLangcode>;
  /** The content menu link bundle. */
  bundle?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMenuLinkContentRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** A flag for whether the link should be enabled in menus or hidden. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The text to be used for this link in the menu. */
  title?: Maybe<Scalars['String']>;
  /** Shown when hovering over the menu link. */
  description?: Maybe<Scalars['String']>;
  /** The menu name. All links with the same menu name (such as "tools") are part of the same menu. */
  menuName?: Maybe<Scalars['String']>;
  /** The location this menu link points to. */
  link?: Maybe<FieldMenuLinkContentLink>;
  /** A flag to indicate if the link points to a full URL starting with a protocol, like http:// (1 = external, 0 = internal). */
  external?: Maybe<Scalars['Boolean']>;
  rediscover?: Maybe<Scalars['Boolean']>;
  /** Link weight among links in the same menu at the same depth. In the menu, the links with high weight will sink and links with a low weight will be positioned nearer the top. */
  weight?: Maybe<Scalars['Int']>;
  /** If selected and this menu link has children, the menu will always appear expanded. This option may be overridden for the entire menu tree when placing a menu block. */
  expanded?: Maybe<Scalars['Boolean']>;
  /** The ID of the parent menu link plugin, or empty string when at the top level of the hierarchy. */
  parent?: Maybe<Scalars['String']>;
  /** The time that the menu link was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Custom menu link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMaster = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphBathroomMaster';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldShowroom?: Maybe<FieldParagraphFieldShowroom>;
  fieldCta: FieldParagraphFieldCta;
  fieldDescription: Scalars['String'];
  fieldMedia: FieldParagraphFieldMedia;
  fieldName: Scalars['String'];
  fieldSignature: FieldParagraphFieldSignature;
  fieldTitle: Scalars['String'];
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Badkamermeester' bundle of the 'Paragraph' entity type. */
export type ParagraphBathroomMasterEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldShowroom = {
  __typename?: 'FieldParagraphFieldShowroom';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

export type FieldParagraphFieldCta = {
  __typename?: 'FieldParagraphFieldCta';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldMedia = {
  __typename?: 'FieldParagraphFieldMedia';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

export type FieldParagraphFieldSignature = {
  __typename?: 'FieldParagraphFieldSignature';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPalette = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphColorPalette';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldFourMediaCaption: Array<FieldParagraphFieldFourMediaCaption>;
  fieldCta: FieldParagraphFieldCta;
  fieldTitle: Scalars['String'];
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Color palette' bundle of the 'Paragraph' entity type. */
export type ParagraphColorPaletteEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldFourMediaCaption = {
  __typename?: 'FieldParagraphFieldFourMediaCaption';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspiration = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphComputedRelatedInspiration';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  relatedInspiration: Array<NodeInspiration>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Related Inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphComputedRelatedInspirationEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainer = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphContainer';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldParagraphs: Array<FieldParagraphFieldParagraphs>;
  fieldTitle?: Maybe<Scalars['String']>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Container' bundle of the 'Paragraph' entity type. */
export type ParagraphContainerEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldParagraphs = {
  __typename?: 'FieldParagraphFieldParagraphs';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinks = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphCrossLinks';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldParagraphs: Array<FieldParagraphFieldParagraphs>;
  fieldContent: FieldParagraphFieldContent;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Cross-links' bundle of the 'Paragraph' entity type. */
export type ParagraphCrossLinksEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldContent = {
  __typename?: 'FieldParagraphFieldContent';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCta = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphCta';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldDescription?: Maybe<Scalars['String']>;
  fieldLink: FieldParagraphFieldLink;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldLink = {
  __typename?: 'FieldParagraphFieldLink';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  attribute?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
};


export type FieldParagraphFieldLinkAttributeArgs = {
  key: Scalars['String'];
};

/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesText = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphCta3ImagesText';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldThreeMedia: Array<FieldParagraphFieldThreeMedia>;
  fieldCta: FieldParagraphFieldCta;
  fieldDescription: Scalars['String'];
  fieldTitle: Scalars['String'];
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'CTA + 3 images + text' bundle of the 'Paragraph' entity type. */
export type ParagraphCta3ImagesTextEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldThreeMedia = {
  __typename?: 'FieldParagraphFieldThreeMedia';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexible = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphCtaFlexible';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldDescription?: Maybe<Scalars['String']>;
  fieldImage?: Maybe<FieldParagraphFieldImage>;
  fieldLink?: Maybe<FieldParagraphFieldLink>;
  fieldSubtitle?: Maybe<Scalars['String']>;
  fieldTags: Array<FieldParagraphFieldTags>;
  fieldDisplayType: Scalars['String'];
  fieldTitle: Scalars['String'];
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Flexible CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphCtaFlexibleEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldImage = {
  __typename?: 'FieldParagraphFieldImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

export type FieldParagraphFieldTags = {
  __typename?: 'FieldParagraphFieldTags';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroom = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphFindShowroom';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldThreeMedia: Array<FieldParagraphFieldThreeMedia>;
  fieldCta: FieldParagraphFieldCta;
  fieldSubtitle: Scalars['String'];
  fieldTitle: Scalars['String'];
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Find your showroom' bundle of the 'Paragraph' entity type. */
export type ParagraphFindShowroomEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCta = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphGalleryCta';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldCta?: Maybe<FieldParagraphFieldCta>;
  fieldFourMediaCaption: Array<FieldParagraphFieldFourMediaCaption>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Gallery + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphGalleryCtaEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspiration = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphHighlightInspiration';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldThreeContent: Array<FieldParagraphFieldThreeContent>;
  fieldLink: FieldParagraphFieldLink;
  fieldTitle: Scalars['String'];
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Highlight Inspiratie' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightInspirationEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldThreeContent = {
  __typename?: 'FieldParagraphFieldThreeContent';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStyles = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphHighlightStyles';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldLinks: Array<FieldParagraphFieldLinks>;
  fieldThreeContent: Array<FieldParagraphFieldThreeContent>;
  fieldCta: FieldParagraphFieldCta;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Highlight styles' bundle of the 'Paragraph' entity type. */
export type ParagraphHighlightStylesEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldLinks = {
  __typename?: 'FieldParagraphFieldLinks';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  attribute?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
};


export type FieldParagraphFieldLinksAttributeArgs = {
  key: Scalars['String'];
};

/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImage = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphImage';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMediaCaption: FieldParagraphFieldMediaCaption;
  fieldVariation: Scalars['String'];
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image' bundle of the 'Paragraph' entity type. */
export type ParagraphImageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldMediaCaption = {
  __typename?: 'FieldParagraphFieldMediaCaption';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCta = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphImageCta';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldCta: FieldParagraphFieldCta;
  fieldDescription: Scalars['String'];
  fieldMedia: FieldParagraphFieldMedia;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image + CTA' bundle of the 'Paragraph' entity type. */
export type ParagraphImageCtaEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGrid = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphImageGrid';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldParagraphs: Array<FieldParagraphFieldParagraphs>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image grid' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElement = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphImageGridElement';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldSubtitle?: Maybe<Scalars['String']>;
  fieldTitle?: Maybe<Scalars['String']>;
  fieldMedia: FieldParagraphFieldMedia;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image grid element' bundle of the 'Paragraph' entity type. */
export type ParagraphImageGridElementEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSlider = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphImageSlider';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldImageSliderItems: Array<FieldParagraphFieldImageSliderItems>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image slider' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldImageSliderItems = {
  __typename?: 'FieldParagraphFieldImageSliderItems';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItem = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphImageSliderItem';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldTitle?: Maybe<Scalars['String']>;
  fieldMedia: FieldParagraphFieldMedia;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image slider item' bundle of the 'Paragraph' entity type. */
export type ParagraphImageSliderItemEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValue = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphKeyValue';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldKey: Scalars['String'];
  fieldValue: Scalars['String'];
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Key value' bundle of the 'Paragraph' entity type. */
export type ParagraphKeyValueEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContent = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphMatchedContent';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  matchedContent: Array<Node>;
  fieldContentType: Scalars['String'];
  fieldDisplayType: Scalars['String'];
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Matched content' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvanced = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphMatchedContentAdvanced';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  matchedContentAdvanced: Array<Node>;
  fieldDisplayType: Scalars['String'];
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Matched content advanced' bundle of the 'Paragraph' entity type. */
export type ParagraphMatchedContentAdvancedEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaption = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphMediaCaption';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldDescription?: Maybe<Scalars['String']>;
  fieldMedia: FieldParagraphFieldMedia;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Media + caption' bundle of the 'Paragraph' entity type. */
export type ParagraphMediaCaptionEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGallery = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphProductGallery';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldFourMediaCaption: Array<FieldParagraphFieldFourMediaCaption>;
  fieldDescription: Scalars['String'];
  fieldTitle: Scalars['String'];
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Product gallery' bundle of the 'Paragraph' entity type. */
export type ParagraphProductGalleryEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuote = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphQuote';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMedia?: Maybe<FieldParagraphFieldMedia>;
  fieldDescription: Scalars['String'];
  fieldTitle: Scalars['String'];
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Quote' bundle of the 'Paragraph' entity type. */
export type ParagraphQuoteEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspiration = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphRelatedInspiration';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldParagraphs: Array<FieldParagraphFieldParagraphs>;
  fieldThreeContent: Array<FieldParagraphFieldThreeContent>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Related inspiration' bundle of the 'Paragraph' entity type. */
export type ParagraphRelatedInspirationEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUsps = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphShowroomUsps';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldUspsValues: Array<Scalars['String']>;
  fieldDescription: Scalars['String'];
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Showroom USPs' bundle of the 'Paragraph' entity type. */
export type ParagraphShowroomUspsEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSlider = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSlider';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldParagraphs: Array<FieldParagraphFieldParagraphs>;
  fieldLink: FieldParagraphFieldLink;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Slider' bundle of the 'Paragraph' entity type. */
export type ParagraphSliderEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUs = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialAboutUs';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Over ons' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialAboutUsEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverview = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialBlogOverview';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  computed: EntityOverview;
  fieldParagraphs: Array<FieldParagraphFieldParagraphs>;
  fieldSeoText?: Maybe<FieldParagraphFieldSeoText>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Special | Blog overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBlogOverviewComputedArgs = {
  path?: Maybe<Scalars['String']>;
};

export type FieldParagraphFieldSeoText = {
  __typename?: 'FieldParagraphFieldSeoText';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverview = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialBrandsOverview';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  computed: EntityOverview;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Special | Brands overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialBrandsOverviewComputedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepage = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialHomepage';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldContent?: Maybe<FieldParagraphFieldContent>;
  fieldLinks: Array<FieldParagraphFieldLinks>;
  fieldMedia?: Maybe<FieldParagraphFieldMedia>;
  fieldHomepageInspiration: FieldParagraphFieldHomepageInspiration;
  fieldHomepageShowroom: FieldParagraphFieldHomepageShowroom;
  fieldHomepageStyles: FieldParagraphFieldHomepageStyles;
  fieldSlider: FieldParagraphFieldSlider;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Homepage' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialHomepageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldHomepageInspiration = {
  __typename?: 'FieldParagraphFieldHomepageInspiration';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldHomepageShowroom = {
  __typename?: 'FieldParagraphFieldHomepageShowroom';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldHomepageStyles = {
  __typename?: 'FieldParagraphFieldHomepageStyles';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldSlider = {
  __typename?: 'FieldParagraphFieldSlider';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverview = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialInspirationOverview';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  computed: EntityOverview;
  fieldParagraphs: Array<FieldParagraphFieldParagraphs>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Special | Inspiration overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialInspirationOverviewComputedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverview = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialProductOverview';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  computed: EntityOverview;
  fieldParagraphs: Array<FieldParagraphFieldParagraphs>;
  fieldSeoText?: Maybe<FieldParagraphFieldSeoText>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Special | Product overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialProductOverviewComputedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearch = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialSearch';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  computed: EntityOverview;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Special | Search' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialSearchComputedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverview = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialShowroomsOverview';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  computed: EntityOverview;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Special | Showrooms overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialShowroomsOverviewComputedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverview = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialStylesOverview';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  computed: EntityOverview;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Special | Stijlen overzicht' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStylesOverviewComputedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysis = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialStyleAnalysis';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  computed: Array<Node>;
  fieldShowroomUsps: Array<FieldParagraphFieldShowroomUsps>;
  fieldStyleprofileTags: Array<FieldParagraphFieldStyleprofileTags>;
  fieldCta3ImagesText: FieldParagraphFieldCta3ImagesText;
  fieldImage: FieldParagraphFieldImage;
  fieldIntroText: FieldParagraphFieldIntroText;
  fieldTitle: Scalars['String'];
  fieldWebform: FieldParagraphFieldWebform;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Style Analysis' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialStyleAnalysisEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldShowroomUsps = {
  __typename?: 'FieldParagraphFieldShowroomUsps';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldStyleprofileTags = {
  __typename?: 'FieldParagraphFieldStyleprofileTags';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldCta3ImagesText = {
  __typename?: 'FieldParagraphFieldCta3ImagesText';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldIntroText = {
  __typename?: 'FieldParagraphFieldIntroText';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

export type FieldParagraphFieldWebform = {
  __typename?: 'FieldParagraphFieldWebform';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
  defaultData?: Maybe<Scalars['String']>;
  /** Flag to control whether this webform should be open or closed to new submissions. */
  status?: Maybe<Scalars['String']>;
  open?: Maybe<Scalars['String']>;
  close?: Maybe<Scalars['String']>;
};

/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverview = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphSpecialTrendsOverview';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  computed: EntityOverview;
  fieldParagraphs: Array<FieldParagraphFieldParagraphs>;
  fieldSeoText?: Maybe<FieldParagraphFieldSeoText>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Special | Trends overview' bundle of the 'Paragraph' entity type. */
export type ParagraphSpecialTrendsOverviewComputedArgs = {
  path?: Maybe<Scalars['String']>;
};

/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTag = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphStyleprofileTag';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldKey: Scalars['String'];
  fieldTag: FieldParagraphFieldTag;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Styleprofile Tag' bundle of the 'Paragraph' entity type. */
export type ParagraphStyleprofileTagEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldTag = {
  __typename?: 'FieldParagraphFieldTag';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphText = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphText';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldBody: FieldParagraphFieldBody;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Text' bundle of the 'Paragraph' entity type. */
export type ParagraphTextEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FieldParagraphFieldBody = {
  __typename?: 'FieldParagraphFieldBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTip = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphTip';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldDescription: Scalars['String'];
  fieldTitle: Scalars['String'];
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Tip' bundle of the 'Paragraph' entity type. */
export type ParagraphTipEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescription = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphTitleDescription';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldDescription: Scalars['String'];
  fieldTitle: Scalars['String'];
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Title + Description' bundle of the 'Paragraph' entity type. */
export type ParagraphTitleDescriptionEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideo = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphVideo';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldDescription?: Maybe<Scalars['String']>;
  fieldTitle?: Maybe<Scalars['String']>;
  fieldMedia: FieldParagraphFieldMedia;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Video' bundle of the 'Paragraph' entity type. */
export type ParagraphVideoEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebform = Paragraph & Entity & EntityPublishable & EntityRevisionable & EntityOwnable & {
  __typename?: 'ParagraphWebform';
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryType: EntityQueryResult;
  /** Query reference:  */
  queryFieldContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldImage: EntityQueryResult;
  /** Query reference:  */
  queryFieldMedia: EntityQueryResult;
  /** Query reference:  */
  queryFieldShowroom: EntityQueryResult;
  /** Query reference:  */
  queryFieldSignature: EntityQueryResult;
  /** Query reference:  */
  queryFieldTag: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeContent: EntityQueryResult;
  /** Query reference:  */
  queryFieldThreeMedia: EntityQueryResult;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  entityOwner?: Maybe<User>;
  fieldMedia: FieldParagraphFieldMedia;
  fieldTitle: Scalars['String'];
  fieldWebform: FieldParagraphFieldWebform;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryFieldContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryFieldMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryFieldShowroomArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryFieldSignatureArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryFieldTagArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryFieldThreeContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformQueryFieldThreeMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Webform' bundle of the 'Paragraph' entity type. */
export type ParagraphWebformEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The canonical entity url. */
export type EntityCanonicalUrl = InternalUrl & Url & {
  __typename?: 'EntityCanonicalUrl';
  blocksByRegion: Array<Entity>;
  breadcrumb: Array<Link>;
  languageInterfaceContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  webformContext?: Maybe<Entity>;
  webformSubmissionContext?: Maybe<WebformSubmission>;
  languageSwitchLinks: Array<LanguageSwitchLink>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  request?: Maybe<InternalResponse>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The entity belonging to the current url. */
  entity?: Maybe<Entity>;
};


/** The canonical entity url. */
export type EntityCanonicalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


/** The canonical entity url. */
export type EntityCanonicalUrlLanguageSwitchLinksArgs = {
  language?: Maybe<LanguageId>;
};


/** The canonical entity url. */
export type EntityCanonicalUrlTranslateArgs = {
  language: LanguageId;
};

/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntity = Entity & {
  __typename?: 'UnexposedEntity';
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  entityLabel?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityQueryExclusive: EntityQueryResult;
  entityTranslation?: Maybe<Entity>;
  entityTranslations: Array<Entity>;
  entityType?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityUuid?: Maybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityTranslationArgs = {
  language: LanguageId;
};

export type ConstraintViolation = {
  __typename?: 'ConstraintViolation';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type EntityCrudOutput = {
  __typename?: 'EntityCrudOutput';
  entity?: Maybe<Entity>;
  errors: Array<Scalars['String']>;
  violations: Array<ConstraintViolation>;
};

export type DefaultInternalUrl = InternalUrl & Url & {
  __typename?: 'DefaultInternalUrl';
  blocksByRegion: Array<Entity>;
  breadcrumb: Array<Link>;
  languageInterfaceContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  webformContext?: Maybe<Entity>;
  webformSubmissionContext?: Maybe<WebformSubmission>;
  languageSwitchLinks: Array<LanguageSwitchLink>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  request?: Maybe<InternalResponse>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
};


export type DefaultInternalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


export type DefaultInternalUrlLanguageSwitchLinksArgs = {
  language?: Maybe<LanguageId>;
};


export type DefaultInternalUrlTranslateArgs = {
  language: LanguageId;
};

export type ExternalResponse = {
  __typename?: 'ExternalResponse';
  code?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
};


export type ExternalResponseHeaderArgs = {
  key?: Maybe<Scalars['String']>;
};

export type ExternalUrl = Url & {
  __typename?: 'ExternalUrl';
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  request?: Maybe<ExternalResponse>;
};


export type ExternalUrlTranslateArgs = {
  language: LanguageId;
};

export type RedirectUrl = Url & {
  __typename?: 'RedirectUrl';
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The redirect code. */
  code?: Maybe<Scalars['Int']>;
  /** The redirect target. */
  target?: Maybe<Url>;
  entity?: Maybe<Redirect>;
};


export type RedirectUrlTranslateArgs = {
  language: LanguageId;
};











/** The available display modes for 'Block' entities. */
export enum BlockDisplayModeId {
  /** The 'Token' display mode for 'Block' entities. */
  Token = 'TOKEN'
}

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = (
  { __typename?: 'Query' }
  & { homepage?: Maybe<(
    { __typename?: 'EntityCanonicalUrl' }
    & { entity?: Maybe<{ __typename?: 'User' } | { __typename?: 'File' } | { __typename?: 'ApqQueryMap' } | { __typename?: 'PathAlias' } | { __typename?: 'SearchApiTask' } | { __typename?: 'WebformCrmMapper' } | { __typename?: 'TaxonomyTermTags' } | { __typename?: 'NodeBrand' } | { __typename?: 'NodeInspiration' } | { __typename?: 'NodeStyle' } | { __typename?: 'CropFocalPoint' } | { __typename?: 'MediaFile' } | { __typename?: 'MediaImage' } | { __typename?: 'MediaImageWithText' } | { __typename?: 'MediaRemoteVideo' } | { __typename?: 'MediaVideo' } | { __typename?: 'NodeAuthor' } | { __typename?: 'NodeBlog' } | { __typename?: 'NodeBasicPage' } | { __typename?: 'NodeProduct' } | { __typename?: 'NodeProductCategory' } | { __typename?: 'NodeShowroom' } | (
      { __typename?: 'NodeSpecialPage' }
      & Pick<NodeSpecialPage, 'title'>
    ) | { __typename?: 'NodeTrend' } | { __typename?: 'RedirectRedirect' } | { __typename?: 'TaxonomyTermBlogType' } | { __typename?: 'WebformSubmissionAfspraakMaken' } | { __typename?: 'WebformSubmissionContact' } | { __typename?: 'WebformSubmissionFranchisenemerAanvraag' } | { __typename?: 'WebformSubmissionMagazine' } | { __typename?: 'WebformSubmissionNewsletter' } | { __typename?: 'WebformSubmissionNieuwsbrief' } | { __typename?: 'WebformSubmissionStijlanalyse' } | { __typename?: 'WebformSubmissionTrendkrandAanvragen' } | { __typename?: 'MenuLinkContentMenuLinkContent' } | { __typename?: 'ParagraphBathroomMaster' } | { __typename?: 'ParagraphColorPalette' } | { __typename?: 'ParagraphComputedRelatedInspiration' } | { __typename?: 'ParagraphContainer' } | { __typename?: 'ParagraphCrossLinks' } | { __typename?: 'ParagraphCta' } | { __typename?: 'ParagraphCta3ImagesText' } | { __typename?: 'ParagraphCtaFlexible' } | { __typename?: 'ParagraphFindShowroom' } | { __typename?: 'ParagraphGalleryCta' } | { __typename?: 'ParagraphHighlightInspiration' } | { __typename?: 'ParagraphHighlightStyles' } | { __typename?: 'ParagraphImage' } | { __typename?: 'ParagraphImageCta' } | { __typename?: 'ParagraphImageGrid' } | { __typename?: 'ParagraphImageGridElement' } | { __typename?: 'ParagraphImageSlider' } | { __typename?: 'ParagraphImageSliderItem' } | { __typename?: 'ParagraphKeyValue' } | { __typename?: 'ParagraphMatchedContent' } | { __typename?: 'ParagraphMatchedContentAdvanced' } | { __typename?: 'ParagraphMediaCaption' } | { __typename?: 'ParagraphProductGallery' } | { __typename?: 'ParagraphQuote' } | { __typename?: 'ParagraphRelatedInspiration' } | { __typename?: 'ParagraphShowroomUsps' } | { __typename?: 'ParagraphSlider' } | { __typename?: 'ParagraphSpecialAboutUs' } | { __typename?: 'ParagraphSpecialBlogOverview' } | { __typename?: 'ParagraphSpecialBrandsOverview' } | { __typename?: 'ParagraphSpecialHomepage' } | { __typename?: 'ParagraphSpecialInspirationOverview' } | { __typename?: 'ParagraphSpecialProductOverview' } | { __typename?: 'ParagraphSpecialSearch' } | { __typename?: 'ParagraphSpecialShowroomsOverview' } | { __typename?: 'ParagraphSpecialStylesOverview' } | { __typename?: 'ParagraphSpecialStyleAnalysis' } | { __typename?: 'ParagraphSpecialTrendsOverview' } | { __typename?: 'ParagraphStyleprofileTag' } | { __typename?: 'ParagraphText' } | { __typename?: 'ParagraphTip' } | { __typename?: 'ParagraphTitleDescription' } | { __typename?: 'ParagraphVideo' } | { __typename?: 'ParagraphWebform' } | { __typename?: 'UnexposedEntity' }> }
  ) | { __typename?: 'DefaultInternalUrl' } | { __typename?: 'ExternalUrl' } | { __typename?: 'RedirectUrl' }> }
);


export const HomepageDocument = gql`
    query Homepage {
  homepage: route(path: "/") {
    ... on EntityCanonicalUrl {
      entity {
        ... on NodeSpecialPage {
          title
        }
      }
    }
  }
}
    `;

/**
 * __useHomepageQuery__
 *
 * To run a query within a React component, call `useHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageQuery(baseOptions?: Apollo.QueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
        return Apollo.useQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, baseOptions);
      }
export function useHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
          return Apollo.useLazyQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, baseOptions);
        }
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>;
export type HomepageLazyQueryHookResult = ReturnType<typeof useHomepageLazyQuery>;
export type HomepageQueryResult = Apollo.QueryResult<HomepageQuery, HomepageQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Node": [
      "NodeBrand",
      "NodeInspiration",
      "NodeStyle",
      "NodeAuthor",
      "NodeBlog",
      "NodeBasicPage",
      "NodeProduct",
      "NodeProductCategory",
      "NodeShowroom",
      "NodeSpecialPage",
      "NodeTrend"
    ],
    "Entity": [
      "User",
      "File",
      "ApqQueryMap",
      "PathAlias",
      "SearchApiTask",
      "WebformCrmMapper",
      "TaxonomyTermTags",
      "NodeBrand",
      "NodeInspiration",
      "NodeStyle",
      "CropFocalPoint",
      "MediaFile",
      "MediaImage",
      "MediaImageWithText",
      "MediaRemoteVideo",
      "MediaVideo",
      "NodeAuthor",
      "NodeBlog",
      "NodeBasicPage",
      "NodeProduct",
      "NodeProductCategory",
      "NodeShowroom",
      "NodeSpecialPage",
      "NodeTrend",
      "RedirectRedirect",
      "TaxonomyTermBlogType",
      "WebformSubmissionAfspraakMaken",
      "WebformSubmissionContact",
      "WebformSubmissionFranchisenemerAanvraag",
      "WebformSubmissionMagazine",
      "WebformSubmissionNewsletter",
      "WebformSubmissionNieuwsbrief",
      "WebformSubmissionStijlanalyse",
      "WebformSubmissionTrendkrandAanvragen",
      "MenuLinkContentMenuLinkContent",
      "ParagraphBathroomMaster",
      "ParagraphColorPalette",
      "ParagraphComputedRelatedInspiration",
      "ParagraphContainer",
      "ParagraphCrossLinks",
      "ParagraphCta",
      "ParagraphCta3ImagesText",
      "ParagraphCtaFlexible",
      "ParagraphFindShowroom",
      "ParagraphGalleryCta",
      "ParagraphHighlightInspiration",
      "ParagraphHighlightStyles",
      "ParagraphImage",
      "ParagraphImageCta",
      "ParagraphImageGrid",
      "ParagraphImageGridElement",
      "ParagraphImageSlider",
      "ParagraphImageSliderItem",
      "ParagraphKeyValue",
      "ParagraphMatchedContent",
      "ParagraphMatchedContentAdvanced",
      "ParagraphMediaCaption",
      "ParagraphProductGallery",
      "ParagraphQuote",
      "ParagraphRelatedInspiration",
      "ParagraphShowroomUsps",
      "ParagraphSlider",
      "ParagraphSpecialAboutUs",
      "ParagraphSpecialBlogOverview",
      "ParagraphSpecialBrandsOverview",
      "ParagraphSpecialHomepage",
      "ParagraphSpecialInspirationOverview",
      "ParagraphSpecialProductOverview",
      "ParagraphSpecialSearch",
      "ParagraphSpecialShowroomsOverview",
      "ParagraphSpecialStylesOverview",
      "ParagraphSpecialStyleAnalysis",
      "ParagraphSpecialTrendsOverview",
      "ParagraphStyleprofileTag",
      "ParagraphText",
      "ParagraphTip",
      "ParagraphTitleDescription",
      "ParagraphVideo",
      "ParagraphWebform",
      "UnexposedEntity"
    ],
    "Url": [
      "EntityCanonicalUrl",
      "DefaultInternalUrl",
      "ExternalUrl",
      "RedirectUrl"
    ],
    "EntityRevisionable": [
      "User",
      "File",
      "ApqQueryMap",
      "PathAlias",
      "SearchApiTask",
      "WebformCrmMapper",
      "TaxonomyTermTags",
      "NodeBrand",
      "NodeInspiration",
      "NodeStyle",
      "CropFocalPoint",
      "MediaFile",
      "MediaImage",
      "MediaImageWithText",
      "MediaRemoteVideo",
      "MediaVideo",
      "NodeAuthor",
      "NodeBlog",
      "NodeBasicPage",
      "NodeProduct",
      "NodeProductCategory",
      "NodeShowroom",
      "NodeSpecialPage",
      "NodeTrend",
      "RedirectRedirect",
      "TaxonomyTermBlogType",
      "WebformSubmissionAfspraakMaken",
      "WebformSubmissionContact",
      "WebformSubmissionFranchisenemerAanvraag",
      "WebformSubmissionMagazine",
      "WebformSubmissionNewsletter",
      "WebformSubmissionNieuwsbrief",
      "WebformSubmissionStijlanalyse",
      "WebformSubmissionTrendkrandAanvragen",
      "MenuLinkContentMenuLinkContent",
      "ParagraphBathroomMaster",
      "ParagraphColorPalette",
      "ParagraphComputedRelatedInspiration",
      "ParagraphContainer",
      "ParagraphCrossLinks",
      "ParagraphCta",
      "ParagraphCta3ImagesText",
      "ParagraphCtaFlexible",
      "ParagraphFindShowroom",
      "ParagraphGalleryCta",
      "ParagraphHighlightInspiration",
      "ParagraphHighlightStyles",
      "ParagraphImage",
      "ParagraphImageCta",
      "ParagraphImageGrid",
      "ParagraphImageGridElement",
      "ParagraphImageSlider",
      "ParagraphImageSliderItem",
      "ParagraphKeyValue",
      "ParagraphMatchedContent",
      "ParagraphMatchedContentAdvanced",
      "ParagraphMediaCaption",
      "ParagraphProductGallery",
      "ParagraphQuote",
      "ParagraphRelatedInspiration",
      "ParagraphShowroomUsps",
      "ParagraphSlider",
      "ParagraphSpecialAboutUs",
      "ParagraphSpecialBlogOverview",
      "ParagraphSpecialBrandsOverview",
      "ParagraphSpecialHomepage",
      "ParagraphSpecialInspirationOverview",
      "ParagraphSpecialProductOverview",
      "ParagraphSpecialSearch",
      "ParagraphSpecialShowroomsOverview",
      "ParagraphSpecialStylesOverview",
      "ParagraphSpecialStyleAnalysis",
      "ParagraphSpecialTrendsOverview",
      "ParagraphStyleprofileTag",
      "ParagraphText",
      "ParagraphTip",
      "ParagraphTitleDescription",
      "ParagraphVideo",
      "ParagraphWebform"
    ],
    "Media": [
      "MediaFile",
      "MediaImage",
      "MediaImageWithText",
      "MediaRemoteVideo",
      "MediaVideo"
    ],
    "EntityOwnable": [
      "File",
      "NodeBrand",
      "NodeInspiration",
      "NodeStyle",
      "MediaFile",
      "MediaImage",
      "MediaImageWithText",
      "MediaRemoteVideo",
      "MediaVideo",
      "NodeAuthor",
      "NodeBlog",
      "NodeBasicPage",
      "NodeProduct",
      "NodeProductCategory",
      "NodeShowroom",
      "NodeSpecialPage",
      "NodeTrend",
      "WebformSubmissionAfspraakMaken",
      "WebformSubmissionContact",
      "WebformSubmissionFranchisenemerAanvraag",
      "WebformSubmissionMagazine",
      "WebformSubmissionNewsletter",
      "WebformSubmissionNieuwsbrief",
      "WebformSubmissionStijlanalyse",
      "WebformSubmissionTrendkrandAanvragen",
      "ParagraphBathroomMaster",
      "ParagraphColorPalette",
      "ParagraphComputedRelatedInspiration",
      "ParagraphContainer",
      "ParagraphCrossLinks",
      "ParagraphCta",
      "ParagraphCta3ImagesText",
      "ParagraphCtaFlexible",
      "ParagraphFindShowroom",
      "ParagraphGalleryCta",
      "ParagraphHighlightInspiration",
      "ParagraphHighlightStyles",
      "ParagraphImage",
      "ParagraphImageCta",
      "ParagraphImageGrid",
      "ParagraphImageGridElement",
      "ParagraphImageSlider",
      "ParagraphImageSliderItem",
      "ParagraphKeyValue",
      "ParagraphMatchedContent",
      "ParagraphMatchedContentAdvanced",
      "ParagraphMediaCaption",
      "ParagraphProductGallery",
      "ParagraphQuote",
      "ParagraphRelatedInspiration",
      "ParagraphShowroomUsps",
      "ParagraphSlider",
      "ParagraphSpecialAboutUs",
      "ParagraphSpecialBlogOverview",
      "ParagraphSpecialBrandsOverview",
      "ParagraphSpecialHomepage",
      "ParagraphSpecialInspirationOverview",
      "ParagraphSpecialProductOverview",
      "ParagraphSpecialSearch",
      "ParagraphSpecialShowroomsOverview",
      "ParagraphSpecialStylesOverview",
      "ParagraphSpecialStyleAnalysis",
      "ParagraphSpecialTrendsOverview",
      "ParagraphStyleprofileTag",
      "ParagraphText",
      "ParagraphTip",
      "ParagraphTitleDescription",
      "ParagraphVideo",
      "ParagraphWebform"
    ],
    "WebformSubmission": [
      "WebformSubmissionAfspraakMaken",
      "WebformSubmissionContact",
      "WebformSubmissionFranchisenemerAanvraag",
      "WebformSubmissionMagazine",
      "WebformSubmissionNewsletter",
      "WebformSubmissionNieuwsbrief",
      "WebformSubmissionStijlanalyse",
      "WebformSubmissionTrendkrandAanvragen"
    ],
    "Crop": [
      "CropFocalPoint"
    ],
    "EntityPublishable": [
      "PathAlias",
      "TaxonomyTermTags",
      "NodeBrand",
      "NodeInspiration",
      "NodeStyle",
      "MediaFile",
      "MediaImage",
      "MediaImageWithText",
      "MediaRemoteVideo",
      "MediaVideo",
      "NodeAuthor",
      "NodeBlog",
      "NodeBasicPage",
      "NodeProduct",
      "NodeProductCategory",
      "NodeShowroom",
      "NodeSpecialPage",
      "NodeTrend",
      "TaxonomyTermBlogType",
      "MenuLinkContentMenuLinkContent",
      "ParagraphBathroomMaster",
      "ParagraphColorPalette",
      "ParagraphComputedRelatedInspiration",
      "ParagraphContainer",
      "ParagraphCrossLinks",
      "ParagraphCta",
      "ParagraphCta3ImagesText",
      "ParagraphCtaFlexible",
      "ParagraphFindShowroom",
      "ParagraphGalleryCta",
      "ParagraphHighlightInspiration",
      "ParagraphHighlightStyles",
      "ParagraphImage",
      "ParagraphImageCta",
      "ParagraphImageGrid",
      "ParagraphImageGridElement",
      "ParagraphImageSlider",
      "ParagraphImageSliderItem",
      "ParagraphKeyValue",
      "ParagraphMatchedContent",
      "ParagraphMatchedContentAdvanced",
      "ParagraphMediaCaption",
      "ParagraphProductGallery",
      "ParagraphQuote",
      "ParagraphRelatedInspiration",
      "ParagraphShowroomUsps",
      "ParagraphSlider",
      "ParagraphSpecialAboutUs",
      "ParagraphSpecialBlogOverview",
      "ParagraphSpecialBrandsOverview",
      "ParagraphSpecialHomepage",
      "ParagraphSpecialInspirationOverview",
      "ParagraphSpecialProductOverview",
      "ParagraphSpecialSearch",
      "ParagraphSpecialShowroomsOverview",
      "ParagraphSpecialStylesOverview",
      "ParagraphSpecialStyleAnalysis",
      "ParagraphSpecialTrendsOverview",
      "ParagraphStyleprofileTag",
      "ParagraphText",
      "ParagraphTip",
      "ParagraphTitleDescription",
      "ParagraphVideo",
      "ParagraphWebform"
    ],
    "Redirect": [
      "RedirectRedirect"
    ],
    "TaxonomyTerm": [
      "TaxonomyTermTags",
      "TaxonomyTermBlogType"
    ],
    "MenuLinkContent": [
      "MenuLinkContentMenuLinkContent"
    ],
    "Paragraph": [
      "ParagraphBathroomMaster",
      "ParagraphColorPalette",
      "ParagraphComputedRelatedInspiration",
      "ParagraphContainer",
      "ParagraphCrossLinks",
      "ParagraphCta",
      "ParagraphCta3ImagesText",
      "ParagraphCtaFlexible",
      "ParagraphFindShowroom",
      "ParagraphGalleryCta",
      "ParagraphHighlightInspiration",
      "ParagraphHighlightStyles",
      "ParagraphImage",
      "ParagraphImageCta",
      "ParagraphImageGrid",
      "ParagraphImageGridElement",
      "ParagraphImageSlider",
      "ParagraphImageSliderItem",
      "ParagraphKeyValue",
      "ParagraphMatchedContent",
      "ParagraphMatchedContentAdvanced",
      "ParagraphMediaCaption",
      "ParagraphProductGallery",
      "ParagraphQuote",
      "ParagraphRelatedInspiration",
      "ParagraphShowroomUsps",
      "ParagraphSlider",
      "ParagraphSpecialAboutUs",
      "ParagraphSpecialBlogOverview",
      "ParagraphSpecialBrandsOverview",
      "ParagraphSpecialHomepage",
      "ParagraphSpecialInspirationOverview",
      "ParagraphSpecialProductOverview",
      "ParagraphSpecialSearch",
      "ParagraphSpecialShowroomsOverview",
      "ParagraphSpecialStylesOverview",
      "ParagraphSpecialStyleAnalysis",
      "ParagraphSpecialTrendsOverview",
      "ParagraphStyleprofileTag",
      "ParagraphText",
      "ParagraphTip",
      "ParagraphTitleDescription",
      "ParagraphVideo",
      "ParagraphWebform"
    ],
    "EntityDescribable": [],
    "InternalUrl": [
      "EntityCanonicalUrl",
      "DefaultInternalUrl"
    ]
  }
};
      export default result;
    