import React, { useLayoutEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { RestaurantPage } from './pages/RestaurantPage'
import { CategoryPage } from './pages/CategoryPage'
import { AboutPage } from './pages/AboutPage'
import { ProfilePage } from './pages/ProfilePage'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'

export const AppRoutes = () => {
  const location = useLocation()
  // Scroll to top when a path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Switch>
      <Route
        path="/categories"
        render={(routeProps) => <CategoryPage {...routeProps} />}
      ></Route>
      <Route exact path="/restaurants/:id">
        <RestaurantPage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/profile">
        <ProfilePage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  )
}
