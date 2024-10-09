"use client"

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ThreeJsCube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(175, 175)
    mountRef.current.appendChild(renderer.domElement)

    // Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x000000,
      shininess: 100
    })
    const cube = new THREE.Mesh(geometry, material)
    cube.scale.set(1.5, 1.5, 1.5) // Enlarge the cube
    scene.add(cube)

    // Edge geometry for the cube borders
    const edgeGeometry = new THREE.EdgesGeometry(geometry)
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xE6F3FF })
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial)
    edges.scale.set(1 ,1 ,1) // Scale the edges to match the cube
    cube.add(edges)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5)
    mainLight.position.set(0, 0, 5)
    scene.add(mainLight)

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3)
    fillLight.position.set(-5, 5, 0)
    scene.add(fillLight)

    camera.position.z = 2.5 // Move the camera closer to make the cube appear larger

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = false

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      
      if (!isHovering) {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
      } else {
        controls.update()
      }
      
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      const width = 175
      const height = 175
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [isHovering])

  return (
    <div className="w-[175px] h-[175px] relative">
      <div 
        ref={mountRef} 
        className="w-full h-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </div>
  )
}

export default ThreeJsCube