export interface BreadcrumbProps {
  pageName: string;
  pageDescription?: string;
  /** The document field BetterCMS derived this breadcrumb as. */
  bcmsField?: string;
}

export interface BreadcrumbLink {
  href: string;
  text: string;
}