import React from 'react'
import UpperNavigation from './sub-components/UpperNavigation'
import LowerNavigation from './sub-components/LowerNavigation'

export default function Navigation() {
  return (
    <div>
      {/* navigation upper part */}
      <UpperNavigation />
      {/* ! navigation upper part */}
      {/* navigation lower part */}
      <LowerNavigation />
      {/* ! navigation lower part */}
    </div>
  )
}
