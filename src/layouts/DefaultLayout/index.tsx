import { Outlet } from 'react-router-dom'
import { Card } from '../../components/Card'
import { Links } from '../../components/Links'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}