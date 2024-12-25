import React from 'react'
import SpotlightPreview from '../components/custom/about_components/Section1'
import Section2 from '../components/custom/about_components/Section2'
import Section3 from '../components/custom/about_components/Section3'
import { AnimatedCardDemo } from '../components/custom/about_components/Section4'

export default function page() {
  return (
    <div className=''>
      <SpotlightPreview />
      <Section2 />
      <Section3 />
      <AnimatedCardDemo />
    </div>
  )
}
