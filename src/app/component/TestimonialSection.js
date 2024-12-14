// 'use client'
// import Image from 'next/image'
// import React, { useState, useEffect, useRef, forwardRef } from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// // Import your images (adjust paths as needed)
// import sachin_mishra from '../../../public/home/Sachin_mishra.png'
// import Linkedin from '../../../public/home/Linkedin.png'
// import Instagram from '../../../public/home/Instagram.png'

// // Import your custom fonts (assuming you're using Next.js with custom fonts)
// import { italic, f1 } from '@/app/fonts'

// const testimonials = [
//   {
//     name: 'Sachin Mishra',
//     role: 'Owner @ Burgerbistro',
//     image: sachin_mishra,
//     linkedin: Linkedin,
//     instagram: Instagram,
//     text: 'Glint Has Been An Absolute Game-Changer For Us! Its Intuitive Interface, Robust Analytics, And Seamless Collaboration Features Have Elevated The Way We Approach Projects And Team Management.'
//   },
//   // Add more testimonials as needed
// ]

// export default function TestimonialSection() {
//   const [mounted, setMounted] = useState(false)
//   const testimonialHeaderRef = useRef(null)
//   const testimonialRefs = useRef([])

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   useGSAP(() => {
//     if (!mounted) return

//     gsap.registerPlugin(ScrollTrigger)

//     // Animate header
//     gsap.fromTo(
//       testimonialHeaderRef.current,
//       { y: 200, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         scrollTrigger: {
//           trigger: testimonialHeaderRef.current,
//           start: 'top 90%',
//           end: 'top 0%',
//           markers: false,
//         },
//       }
//     )

//     // Animate testimonial cards
//     testimonialRefs.current.forEach((ref) => {
//       gsap.fromTo(
//         ref,
//         { y: 200, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.5,
//           stagger: 0.3,
//           scrollTrigger: {
//             trigger: ref,
//             start: 'top 80%',
//             end: 'top 0%',
//             markers: false,
//           },
//         }
//       )
//     })
//   }, [mounted])

//   if (!mounted) return null

//   return (
//     <section className="container mx-auto px-4 py-16">
//       <h2 
//         ref={testimonialHeaderRef} 
//         className="text-3xl font-bold text-center mb-8 text-white"
//       >
//         What Our Clients Say
//       </h2>
//       <div className="grid md:grid-cols-2 gap-8">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard
//             key={testimonial.name}
//             ref={(el) => {
//               if (el) testimonialRefs.current[index] = el
//             }}
//             {...testimonial}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// const TestimonialCard = forwardRef(function TestimonialCard(props, ref) {
//   const { 
//     name, 
//     role, 
//     image, 
//     text, 
//     linkedin, 
//     instagram 
//   } = props

//   return (
//     <div 
//       ref={ref} 
//       className="bg-gradient-to-br from-[#F2FF5C]/20 to-black border border-[#F2FF5C]/40 text-white rounded-2xl p-6 shadow-md lg:py-9 lg:px-10 flex flex-col"
//     >
//       <div className="flex items-center gap-4 mb-4">
//         <Image
//           src={image}
//           alt={name}
//           className="w-16 h-16 rounded-full object-cover"
//           width={64}
//           height={64}
//         />
//         <div>
//           <h2 className={`text-xl md:text-2xl ${italic.className}`}>
//             {name}
//           </h2>
//           <p className={`text-sm ${f1.className}`}>
//             {role}
//           </p>
//         </div>
//         <div className="ml-auto flex gap-2">
//           <Image 
//             src={linkedin} 
//             alt="LinkedIn" 
//             className="w-6 h-6 cursor-pointer"
//             width={24}
//             height={24}
//           />
//           <Image 
//             src={instagram} 
//             alt="Instagram" 
//             className="w-6 h-6 cursor-pointer"
//             width={24}
//             height={24}
//           />
//         </div>
//       </div>
//       <p 
//         className={`text-[#F2FF5C] text-lg lg:text-xl leading-relaxed text-justify ${f1.className}`}
//       >
//         "{text}"
//       </p>
//     </div>
//   )
// })