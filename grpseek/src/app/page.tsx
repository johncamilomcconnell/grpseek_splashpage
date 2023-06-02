
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-0 m-0 bg-[#FFFFFF]">
      <div className="z-15 w-full max-w-7xl items-center justify-between font-quicksand text-sm lg:flex bg-[#FFFFFF]" >
        <div className="navbar p-5 bg-[#FFFFFF]">
  <div className="flex-1">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" className="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
<a href='http://localhost:3002/' className="btn btn-ghost normal-case text-4xl p-1 bg-[#FFFFFF]">gRPSeek</a>
  </div>
  <div className="flex-none">
    <div className="p-0.5">
    <a href="https://github.com/">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-sm">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        </div>
      </label>
      </a>
    </div>
    <div className="p-0.5">
    <a href="https://www.linkedin.com/">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-sm">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" />
        </div>
      </label>
      </a>
    </div>
    <div className="p-0.5">
    <a href="https://www.medium.com/">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-sm">
          <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Medium_svg5-512.png" />
        </div>
      </label>
      </a>
    </div>
  </div>
</div>
      </div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://kubehawk.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaddCluster.22a3dc0f.gif&w=2048&q=75" className="max-w-2xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">See the Unseen</h1>
      <p className="py-6">We simplify the understanding and analysis of gRPC-based applications by providing comprehensive visualizations of metrics and proto file structures</p>
      <button className="btn btn-primary">Start Seeking</button>
    </div>
  </div>
</div>
<div className="hero h-65 bg-black">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTBhZGU5MzY1YTkxZjVkZmZhODY1N2UxZTVlMTY1MGZiMGMyYTRhMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xTiTnjEFmivkL0cfDi/giphy.gif" className="max-w-xl rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold text-white">Metrics</h1>
      <p className="py-6 pr-5 text-white">Visualize gRPC latency tests, RPC message counters, error rate/percentage,<br></br> average stream size, slow query percentage, request inbound rate, etc.</p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
<div className="hero h-65 bg-[#FAF9F6]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://64.media.tumblr.com/aa2914cf662aa58b9c713386a23d5006/tumblr_ns4yczyZpm1qzcuu3o1_1280.gifv" className="max-w-xl rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold text-black">Proto Mapping</h1>
      <p className="py-6 pr-5 text-black">Visualize gRPC latency tests, RPC message counters, error rate/percentage,<br></br> average stream size, slow query percentage, request inbound rate, etc.</p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
<footer className="footer items-center p-4 bg-neutral text-neutral-content ">
  <div className="items-center grid-flow-col">
    <svg width="34" height="34" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>© 2023 gRPSeek - All right reserved</p>
  </div> 
</footer>
    </main>
  )
}
