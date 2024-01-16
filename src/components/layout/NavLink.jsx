import React from "react"
import { Link } from 'gatsby' // 引入 Gatsby 的 Link 组件

export function NavLink({ href, children }) {
  return (
    // 使用 Gatsby 的 Link 组件
    <Link to={href} className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 no-underline hover:bg-slate-100 hover:text-slate-900">
      {children}
    </Link>
  )
}
