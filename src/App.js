import { useRef,useState } from 'react'

export default function VideoPlayer() {
  const [playing, setPLaying] = useState(false)
  const ref = useRef(null)

  // console.log(ref.current)
  const handlePlay = () => {
    ref.current.play()
    setPLaying(true)
  }
  const handlePause = () => {
    ref.current.pause()
    setPLaying(false)
  }
  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 className='text-center font-bold text-3xl'>
        Video Oynatıcı
      </h1>
      <video
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        ref={ref} 
      />
      <div className='flex justify-between'>
        <button className='text-orange-500 font-semibold'
        onClick={handlePause}
        disabled={!playing}
        >Duraklat</button>
        <div>{playing ? "oynatilyor": "duraklatıldı"}</div>
        <button className='text-indigo-500 font-semibold'
        onClick={handlePlay}
        disabled={playing}
        >Oynat</button>
      </div>
    </div>
  )
}
