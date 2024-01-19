

const VideoSection = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          <p className="text-4xl font-semibold leading-7 text-indigo-600">History</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Info About Ram Mandir History</h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">If you are interested to know the History of Ram Mandir you can watch this video.It will give you all the details (facts) with no biased opinion.You will get to know about all the events that has happened in the past, court verdicts of High Court and Supreme Court. Do give it a watch and increase your knowledge about the topic.</p>
        </div>
      </div>
    </div>
    <div className="-mt-12 p-4 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
    <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/0WG2Y-pYPI8?si=vclb0BkbGLHXi309" 
    title="YouTube video player"
    frameborder="40% "
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
    </div>
    
  </div>
</div>
    </>
  )
}

export default VideoSection
