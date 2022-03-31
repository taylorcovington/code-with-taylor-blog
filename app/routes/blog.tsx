import styles from 'highlight.js/styles/atom-one-dark.css'
import { LinksFunction, Outlet } from 'remix'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function Blog() {
  return <Outlet />
}