import { useThreeScene } from '../lib/useThreeScene'
import { LaptopSpinner, LaptopContainer } from './laptop-loader'

const Laptop = () => {
  const { refContainer, loading, error } = useThreeScene()

  if (error) return null

  return (
    <LaptopContainer ref={refContainer}>
      {loading && <LaptopSpinner />}
    </LaptopContainer>
  )
}

export default Laptop
