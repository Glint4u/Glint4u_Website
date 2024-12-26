import React from 'react'
import { BackgroundBoxesDemo } from '../components/custom/service_components/Section1'
import { WorldMapDemo } from '../components/custom/service_components/Section2'
import { LayoutGridDemo } from '../components/custom/service_components/Section3'
import { Logos } from '../components/custom/service_components/Section4'
import { CardHoverEffectDemo } from '../components/custom/service_components/Section5'
import { Section6 } from '../components/custom/service_components/Section6'
import {InfiniteMovingCardsDemo} from '../components/custom/home_components/Page7'

export default function page() {
  return (
    <div>
      <BackgroundBoxesDemo />
      <WorldMapDemo />
      <LayoutGridDemo />
      <Logos />
      <CardHoverEffectDemo />
      <Section6 />
      <InfiniteMovingCardsDemo />
    </div>
  )
}
