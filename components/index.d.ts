import type * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'quiet'; size?: 'md' | 'sm'; href?: string }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface BadgeProps { tone?: 'neutral' | 'groen' | 'blauw' | 'danger' | 'warning'; children?: React.ReactNode }
export declare function Badge(props: BadgeProps): React.ReactElement;
export interface SectionHeadingProps { label?: string; title: React.ReactNode; as?: 'h1' | 'h2' | 'h3'; action?: React.ReactNode }
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;
export interface HeroProps { label?: string; title: React.ReactNode; intro?: React.ReactNode; actions?: React.ReactNode; markSrc?: string }
export declare function Hero(props: HeroProps): React.ReactElement;
export interface NewsCardProps { title: string; href?: string; image?: string; imageAlt?: string; label?: string; tone?: 'groen' | 'blauw' | 'neutral'; excerpt?: string; date?: string }
export declare function NewsCard(props: NewsCardProps): React.ReactElement;
export interface MatchTeam { name: string; logo?: string }
export interface MatchCardProps { home: MatchTeam; away: MatchTeam; category?: string; date?: string; time?: string; location?: string; status?: 'gepland' | 'gespeeld' | 'afgelast'; score?: [number, number] }
export declare function MatchCard(props: MatchCardProps): React.ReactElement;
export interface NavItem { label: string; href: string; active?: boolean }
export interface SiteHeaderProps { logoSrc?: string; homeHref?: string; items?: NavItem[]; cta?: { label: string; href: string } }
export declare function SiteHeader(props: SiteHeaderProps): React.ReactElement;
export interface FooterClub { name: string; href: string; logoSrc?: string }
export interface SiteFooterProps { logoSrc?: string; note?: string; clubs?: FooterClub[] }
export declare function SiteFooter(props: SiteFooterProps): React.ReactElement;
declare global { interface Window { SVS: { Button: typeof Button; Badge: typeof Badge; SectionHeading: typeof SectionHeading; Hero: typeof Hero; NewsCard: typeof NewsCard; MatchCard: typeof MatchCard; SiteHeader: typeof SiteHeader; SiteFooter: typeof SiteFooter } } }
