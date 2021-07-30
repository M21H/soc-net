import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import { NotFound } from '../pages'
import { AppStateType } from '../redux/store'
import { LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from '../utils/const'
import { authRoutes, publicRoutes } from './routes'

export const AppRoutes: React.FC = () => {
  const { isAuth } = useSelector(({ auth }: AppStateType) => auth)

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Redirect exact from={MAIN_ROUTE} to={PROFILE_ROUTE} />
        {isAuth &&
          authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}

        {publicRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
        <Redirect to={LOGIN_ROUTE} />
        <Route path='*' component={NotFound} />
      </Switch>
    </React.Suspense>
  )
}
