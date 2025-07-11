/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as PlaygroundRouteImport } from './routes/playground'
import { Route as AdminRouteImport } from './routes/admin'
import { Route as AboutRouteImport } from './routes/about'
import { Route as AuthGuardRouteImport } from './routes/_authGuard'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AdminClockRouteImport } from './routes/admin/clock'
import { Route as AuthGuardOverviewRouteImport } from './routes/_authGuard.overview'
import { Route as AuthGuardOnboardingRouteImport } from './routes/_authGuard.onboarding'
import { Route as AuthGuardProjectProjectIdRouteImport } from './routes/_authGuard.project/$projectId'
import { Route as AuthGuardProjectProjectIdIndexRouteImport } from './routes/_authGuard.project/$projectId/index'
import { Route as AuthGuardProjectProjectIdTeamSettingsRouteImport } from './routes/_authGuard.project/$projectId/team-settings'
import { Route as AuthGuardProjectProjectIdTasksRouteImport } from './routes/_authGuard.project/$projectId/tasks'
import { Route as AuthGuardProjectProjectIdDashboardRouteImport } from './routes/_authGuard.project/$projectId/dashboard'
import { Route as AuthGuardProjectProjectIdSettingsTeamInfoRouteImport } from './routes/_authGuard.project/$projectId/settings/team-info'
import { Route as AuthGuardProjectProjectIdSettingsTaskSettingsRouteImport } from './routes/_authGuard.project/$projectId/settings/task-settings'
import { Route as AuthGuardProjectProjectIdSettingsMemberManagementRouteImport } from './routes/_authGuard.project/$projectId/settings/member-management'

const PlaygroundRoute = PlaygroundRouteImport.update({
  id: '/playground',
  path: '/playground',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminRoute = AdminRouteImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthGuardRoute = AuthGuardRouteImport.update({
  id: '/_authGuard',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminClockRoute = AdminClockRouteImport.update({
  id: '/clock',
  path: '/clock',
  getParentRoute: () => AdminRoute,
} as any)
const AuthGuardOverviewRoute = AuthGuardOverviewRouteImport.update({
  id: '/overview',
  path: '/overview',
  getParentRoute: () => AuthGuardRoute,
} as any)
const AuthGuardOnboardingRoute = AuthGuardOnboardingRouteImport.update({
  id: '/onboarding',
  path: '/onboarding',
  getParentRoute: () => AuthGuardRoute,
} as any)
const AuthGuardProjectProjectIdRoute =
  AuthGuardProjectProjectIdRouteImport.update({
    id: '/project/$projectId',
    path: '/project/$projectId',
    getParentRoute: () => AuthGuardRoute,
  } as any)
const AuthGuardProjectProjectIdIndexRoute =
  AuthGuardProjectProjectIdIndexRouteImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)
const AuthGuardProjectProjectIdTeamSettingsRoute =
  AuthGuardProjectProjectIdTeamSettingsRouteImport.update({
    id: '/team-settings',
    path: '/team-settings',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)
const AuthGuardProjectProjectIdTasksRoute =
  AuthGuardProjectProjectIdTasksRouteImport.update({
    id: '/tasks',
    path: '/tasks',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)
const AuthGuardProjectProjectIdDashboardRoute =
  AuthGuardProjectProjectIdDashboardRouteImport.update({
    id: '/dashboard',
    path: '/dashboard',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)
const AuthGuardProjectProjectIdSettingsTeamInfoRoute =
  AuthGuardProjectProjectIdSettingsTeamInfoRouteImport.update({
    id: '/settings/team-info',
    path: '/settings/team-info',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)
const AuthGuardProjectProjectIdSettingsTaskSettingsRoute =
  AuthGuardProjectProjectIdSettingsTaskSettingsRouteImport.update({
    id: '/settings/task-settings',
    path: '/settings/task-settings',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)
const AuthGuardProjectProjectIdSettingsMemberManagementRoute =
  AuthGuardProjectProjectIdSettingsMemberManagementRouteImport.update({
    id: '/settings/member-management',
    path: '/settings/member-management',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/playground': typeof PlaygroundRoute
  '/onboarding': typeof AuthGuardOnboardingRoute
  '/overview': typeof AuthGuardOverviewRoute
  '/admin/clock': typeof AdminClockRoute
  '/project/$projectId': typeof AuthGuardProjectProjectIdRouteWithChildren
  '/project/$projectId/dashboard': typeof AuthGuardProjectProjectIdDashboardRoute
  '/project/$projectId/tasks': typeof AuthGuardProjectProjectIdTasksRoute
  '/project/$projectId/team-settings': typeof AuthGuardProjectProjectIdTeamSettingsRoute
  '/project/$projectId/': typeof AuthGuardProjectProjectIdIndexRoute
  '/project/$projectId/settings/member-management': typeof AuthGuardProjectProjectIdSettingsMemberManagementRoute
  '/project/$projectId/settings/task-settings': typeof AuthGuardProjectProjectIdSettingsTaskSettingsRoute
  '/project/$projectId/settings/team-info': typeof AuthGuardProjectProjectIdSettingsTeamInfoRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/playground': typeof PlaygroundRoute
  '/onboarding': typeof AuthGuardOnboardingRoute
  '/overview': typeof AuthGuardOverviewRoute
  '/admin/clock': typeof AdminClockRoute
  '/project/$projectId/dashboard': typeof AuthGuardProjectProjectIdDashboardRoute
  '/project/$projectId/tasks': typeof AuthGuardProjectProjectIdTasksRoute
  '/project/$projectId/team-settings': typeof AuthGuardProjectProjectIdTeamSettingsRoute
  '/project/$projectId': typeof AuthGuardProjectProjectIdIndexRoute
  '/project/$projectId/settings/member-management': typeof AuthGuardProjectProjectIdSettingsMemberManagementRoute
  '/project/$projectId/settings/task-settings': typeof AuthGuardProjectProjectIdSettingsTaskSettingsRoute
  '/project/$projectId/settings/team-info': typeof AuthGuardProjectProjectIdSettingsTeamInfoRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/_authGuard': typeof AuthGuardRouteWithChildren
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/playground': typeof PlaygroundRoute
  '/_authGuard/onboarding': typeof AuthGuardOnboardingRoute
  '/_authGuard/overview': typeof AuthGuardOverviewRoute
  '/admin/clock': typeof AdminClockRoute
  '/_authGuard/project/$projectId': typeof AuthGuardProjectProjectIdRouteWithChildren
  '/_authGuard/project/$projectId/dashboard': typeof AuthGuardProjectProjectIdDashboardRoute
  '/_authGuard/project/$projectId/tasks': typeof AuthGuardProjectProjectIdTasksRoute
  '/_authGuard/project/$projectId/team-settings': typeof AuthGuardProjectProjectIdTeamSettingsRoute
  '/_authGuard/project/$projectId/': typeof AuthGuardProjectProjectIdIndexRoute
  '/_authGuard/project/$projectId/settings/member-management': typeof AuthGuardProjectProjectIdSettingsMemberManagementRoute
  '/_authGuard/project/$projectId/settings/task-settings': typeof AuthGuardProjectProjectIdSettingsTaskSettingsRoute
  '/_authGuard/project/$projectId/settings/team-info': typeof AuthGuardProjectProjectIdSettingsTeamInfoRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/admin'
    | '/playground'
    | '/onboarding'
    | '/overview'
    | '/admin/clock'
    | '/project/$projectId'
    | '/project/$projectId/dashboard'
    | '/project/$projectId/tasks'
    | '/project/$projectId/team-settings'
    | '/project/$projectId/'
    | '/project/$projectId/settings/member-management'
    | '/project/$projectId/settings/task-settings'
    | '/project/$projectId/settings/team-info'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/admin'
    | '/playground'
    | '/onboarding'
    | '/overview'
    | '/admin/clock'
    | '/project/$projectId/dashboard'
    | '/project/$projectId/tasks'
    | '/project/$projectId/team-settings'
    | '/project/$projectId'
    | '/project/$projectId/settings/member-management'
    | '/project/$projectId/settings/task-settings'
    | '/project/$projectId/settings/team-info'
  id:
    | '__root__'
    | '/'
    | '/_authGuard'
    | '/about'
    | '/admin'
    | '/playground'
    | '/_authGuard/onboarding'
    | '/_authGuard/overview'
    | '/admin/clock'
    | '/_authGuard/project/$projectId'
    | '/_authGuard/project/$projectId/dashboard'
    | '/_authGuard/project/$projectId/tasks'
    | '/_authGuard/project/$projectId/team-settings'
    | '/_authGuard/project/$projectId/'
    | '/_authGuard/project/$projectId/settings/member-management'
    | '/_authGuard/project/$projectId/settings/task-settings'
    | '/_authGuard/project/$projectId/settings/team-info'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthGuardRoute: typeof AuthGuardRouteWithChildren
  AboutRoute: typeof AboutRoute
  AdminRoute: typeof AdminRouteWithChildren
  PlaygroundRoute: typeof PlaygroundRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/playground': {
      id: '/playground'
      path: '/playground'
      fullPath: '/playground'
      preLoaderRoute: typeof PlaygroundRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_authGuard': {
      id: '/_authGuard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthGuardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin/clock': {
      id: '/admin/clock'
      path: '/clock'
      fullPath: '/admin/clock'
      preLoaderRoute: typeof AdminClockRouteImport
      parentRoute: typeof AdminRoute
    }
    '/_authGuard/overview': {
      id: '/_authGuard/overview'
      path: '/overview'
      fullPath: '/overview'
      preLoaderRoute: typeof AuthGuardOverviewRouteImport
      parentRoute: typeof AuthGuardRoute
    }
    '/_authGuard/onboarding': {
      id: '/_authGuard/onboarding'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof AuthGuardOnboardingRouteImport
      parentRoute: typeof AuthGuardRoute
    }
    '/_authGuard/project/$projectId': {
      id: '/_authGuard/project/$projectId'
      path: '/project/$projectId'
      fullPath: '/project/$projectId'
      preLoaderRoute: typeof AuthGuardProjectProjectIdRouteImport
      parentRoute: typeof AuthGuardRoute
    }
    '/_authGuard/project/$projectId/': {
      id: '/_authGuard/project/$projectId/'
      path: '/'
      fullPath: '/project/$projectId/'
      preLoaderRoute: typeof AuthGuardProjectProjectIdIndexRouteImport
      parentRoute: typeof AuthGuardProjectProjectIdRoute
    }
    '/_authGuard/project/$projectId/team-settings': {
      id: '/_authGuard/project/$projectId/team-settings'
      path: '/team-settings'
      fullPath: '/project/$projectId/team-settings'
      preLoaderRoute: typeof AuthGuardProjectProjectIdTeamSettingsRouteImport
      parentRoute: typeof AuthGuardProjectProjectIdRoute
    }
    '/_authGuard/project/$projectId/tasks': {
      id: '/_authGuard/project/$projectId/tasks'
      path: '/tasks'
      fullPath: '/project/$projectId/tasks'
      preLoaderRoute: typeof AuthGuardProjectProjectIdTasksRouteImport
      parentRoute: typeof AuthGuardProjectProjectIdRoute
    }
    '/_authGuard/project/$projectId/dashboard': {
      id: '/_authGuard/project/$projectId/dashboard'
      path: '/dashboard'
      fullPath: '/project/$projectId/dashboard'
      preLoaderRoute: typeof AuthGuardProjectProjectIdDashboardRouteImport
      parentRoute: typeof AuthGuardProjectProjectIdRoute
    }
    '/_authGuard/project/$projectId/settings/team-info': {
      id: '/_authGuard/project/$projectId/settings/team-info'
      path: '/settings/team-info'
      fullPath: '/project/$projectId/settings/team-info'
      preLoaderRoute: typeof AuthGuardProjectProjectIdSettingsTeamInfoRouteImport
      parentRoute: typeof AuthGuardProjectProjectIdRoute
    }
    '/_authGuard/project/$projectId/settings/task-settings': {
      id: '/_authGuard/project/$projectId/settings/task-settings'
      path: '/settings/task-settings'
      fullPath: '/project/$projectId/settings/task-settings'
      preLoaderRoute: typeof AuthGuardProjectProjectIdSettingsTaskSettingsRouteImport
      parentRoute: typeof AuthGuardProjectProjectIdRoute
    }
    '/_authGuard/project/$projectId/settings/member-management': {
      id: '/_authGuard/project/$projectId/settings/member-management'
      path: '/settings/member-management'
      fullPath: '/project/$projectId/settings/member-management'
      preLoaderRoute: typeof AuthGuardProjectProjectIdSettingsMemberManagementRouteImport
      parentRoute: typeof AuthGuardProjectProjectIdRoute
    }
  }
}

interface AuthGuardProjectProjectIdRouteChildren {
  AuthGuardProjectProjectIdDashboardRoute: typeof AuthGuardProjectProjectIdDashboardRoute
  AuthGuardProjectProjectIdTasksRoute: typeof AuthGuardProjectProjectIdTasksRoute
  AuthGuardProjectProjectIdTeamSettingsRoute: typeof AuthGuardProjectProjectIdTeamSettingsRoute
  AuthGuardProjectProjectIdIndexRoute: typeof AuthGuardProjectProjectIdIndexRoute
  AuthGuardProjectProjectIdSettingsMemberManagementRoute: typeof AuthGuardProjectProjectIdSettingsMemberManagementRoute
  AuthGuardProjectProjectIdSettingsTaskSettingsRoute: typeof AuthGuardProjectProjectIdSettingsTaskSettingsRoute
  AuthGuardProjectProjectIdSettingsTeamInfoRoute: typeof AuthGuardProjectProjectIdSettingsTeamInfoRoute
}

const AuthGuardProjectProjectIdRouteChildren: AuthGuardProjectProjectIdRouteChildren =
  {
    AuthGuardProjectProjectIdDashboardRoute:
      AuthGuardProjectProjectIdDashboardRoute,
    AuthGuardProjectProjectIdTasksRoute: AuthGuardProjectProjectIdTasksRoute,
    AuthGuardProjectProjectIdTeamSettingsRoute:
      AuthGuardProjectProjectIdTeamSettingsRoute,
    AuthGuardProjectProjectIdIndexRoute: AuthGuardProjectProjectIdIndexRoute,
    AuthGuardProjectProjectIdSettingsMemberManagementRoute:
      AuthGuardProjectProjectIdSettingsMemberManagementRoute,
    AuthGuardProjectProjectIdSettingsTaskSettingsRoute:
      AuthGuardProjectProjectIdSettingsTaskSettingsRoute,
    AuthGuardProjectProjectIdSettingsTeamInfoRoute:
      AuthGuardProjectProjectIdSettingsTeamInfoRoute,
  }

const AuthGuardProjectProjectIdRouteWithChildren =
  AuthGuardProjectProjectIdRoute._addFileChildren(
    AuthGuardProjectProjectIdRouteChildren,
  )

interface AuthGuardRouteChildren {
  AuthGuardOnboardingRoute: typeof AuthGuardOnboardingRoute
  AuthGuardOverviewRoute: typeof AuthGuardOverviewRoute
  AuthGuardProjectProjectIdRoute: typeof AuthGuardProjectProjectIdRouteWithChildren
}

const AuthGuardRouteChildren: AuthGuardRouteChildren = {
  AuthGuardOnboardingRoute: AuthGuardOnboardingRoute,
  AuthGuardOverviewRoute: AuthGuardOverviewRoute,
  AuthGuardProjectProjectIdRoute: AuthGuardProjectProjectIdRouteWithChildren,
}

const AuthGuardRouteWithChildren = AuthGuardRoute._addFileChildren(
  AuthGuardRouteChildren,
)

interface AdminRouteChildren {
  AdminClockRoute: typeof AdminClockRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminClockRoute: AdminClockRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthGuardRoute: AuthGuardRouteWithChildren,
  AboutRoute: AboutRoute,
  AdminRoute: AdminRouteWithChildren,
  PlaygroundRoute: PlaygroundRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
