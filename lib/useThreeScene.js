import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from './model'

const MODEL_PATH = '/mac.glb'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export function useThreeScene() {
  const refContainer = useRef()
  const refRenderer = useRef()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (!container) return

    const scW = container.clientWidth
    const scH = container.clientHeight

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(scW, scH)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)
    refRenderer.current = renderer

    const scene = new THREE.Scene()
    const target = new THREE.Vector3(-0.1, 1.2, 0)
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )

    const scale = scH * 0.001 + 4
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
    scene.add(ambientLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.target = target
    controls.enabled = false

    let req = null
    let frame = 0

    const animate = () => {
      req = requestAnimationFrame(animate)
      frame = frame <= 100 ? frame + 1 : frame

      if (frame <= 100) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
        camera.position.y = 10
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    loadGLTFModel(scene, MODEL_PATH, { receiveShadow: false, castShadow: false })
      .then(() => {
        animate()
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load 3D model:', err)
        setError(err)
        setLoading(false)
      })

    return () => {
      cancelAnimationFrame(req)
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return { refContainer, loading, error }
}
