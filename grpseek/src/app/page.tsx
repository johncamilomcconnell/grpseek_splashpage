export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-0 m-0 bg-[#FFFFFF]">
      <div className="z-15 w-full max-w-7xl items-center justify-between font-quicksand text-sm lg:flex bg-[#FFFFFF]" >
        <div className="navbar p-5 bg-[#FFFFFF]">
  <div className="flex-1">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#01563b" className="w-9 h-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
<a href='http://localhost:3002/' className="btn btn-ghost normal-case text-4xl p-1 bg-[#FFFFFF] text-black">gRPSeek</a>
  </div>
  <div className="flex-none">
    <div className="p-0.5">
    <a href="https://github.com/oslabs-beta/gRPSeek">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-sm">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        </div>
      </label>
      </a>
    </div>
    <div className="p-0.5">
    <a href="https://www.linkedin.com/company/grpseek-app/">
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
      <div className="hero min-h-screen bg-[#FFFFFF]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://kubehawk.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaddCluster.22a3dc0f.gif&w=2048&q=75" className="max-w-2xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-black">See the Unseen</h1>
      <p className="py-6 text-black">We simplify the understanding and analysis of gRPC-based applications by providing comprehensive visualizations of metrics and proto file structures</p>
      <button className="btn btn-primary bg-[#345f5f] rounded-lg">Start Seeking</button>
    </div>
  </div>
</div>


<div>
<div className="hero h-60 bg-white sm:flex-col md:flex-row lg:flex-row">
  <div className="hero-content flex-col sm:flex-row md:flex-row lg:flex-row">
    <div className="px-5 pb-4">
    <img src="/metrics.png" className="h-20 w-20 rounded-lg"/>
</div>
    <div className="p-10">
      <h1 className="text-5xl font-bold text-black">Metrics</h1>
      <p className="py-6 pr-7 text-black text-lg">Access RPC message counters, error percentage, average stream size, slow query percentage</p>
    </div>
  </div>
</div>
<div className="hero h-60 bg-white sm:flex-col md:flex-row lg:flex-row">
  <div className="hero-content flex-col sm:flex-row md:flex-row lg:flex-row">
    <div className="px-5 pb-4">
    <img src="/graphs.png" className="h-20 w-20 rounded-lg"/>
</div>
    <div className="p-10">
      <h1 className="text-5xl font-bold text-black">Graphs</h1>
      <p className="py-6 pr-7 text-black text-lg">Harness the power of gRPSeek by visualizing gRPC load and latency tests with a click of a button</p>
    </div>
  </div>
</div>
<div className="hero h-60 bg-white sm:flex-col md:flex-row lg:flex-row">
  <div className="hero-content flex-col sm:flex-row md:flex-row lg:flex-row">
    <div className="px-5 pb-4">
    <img src="/proto.png" className="h-20 w-20 rounded-lg"/>
</div>
    <div className="p-10">
      <h1 className="text-5xl font-bold text-black">Proto Mapping</h1>
      <p className="py-6 pr-7 text-black text-lg">Upload your proto files to visualize the complex relationship between services and messages</p>
    </div>
  </div>
</div>


</div>

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
      </div> 
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="Kenneth.png" alt="Kenneth Nguyen Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kenneth Nguyen
              </h3>
              <p>Software Engineer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  
                  <li>
                      <a href="https://www.linkedin.com/in/kenknguyen/" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><svg viewBox="0 0 28.87 28.87" id="linkedin"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#0b86ca" rx="6.48" ry="6.48"></rect><path fill="#fff" d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"></path></g></g></svg></svg>
                      </a>
                  </li>
                  <li>
                      <a href="https://github.com/kennysghub" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/Patryk.png" alt="Patryk Ploszaj Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Patryk Ploszaj
              </h3>
              <p>Software Engineer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  
                  <li>
                      <a href="https://www.linkedin.com/in/patryk-ploszaj07/" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><svg viewBox="0 0 28.87 28.87" id="linkedin"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#0b86ca" rx="6.48" ry="6.48"></rect><path fill="#fff" d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"></path></g></g></svg></svg>
                      </a>
                  </li>
                  <li>
                      <a href="https://github.com/pploszaj" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/Miri.png" alt="Miri Son Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Miri Son
              </h3>
              <p>Software Engineer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  
                  <li>
                      <a href="https://www.linkedin.com/in/miri-son/" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><svg viewBox="0 0 28.87 28.87" id="linkedin"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#0b86ca" rx="6.48" ry="6.48"></rect><path fill="#fff" d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"></path></g></g></svg></svg>
                      </a>
                  </li>
                  <li>
                      <a href="https://github.com/msoncsswe" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/John.png" alt="John McConnell Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  John McConnell
              </h3>
              <p>Software Engineer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  
                  <li>
                      <a href="https://www.linkedin.com/in/john-camilo-mcconnell/" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><svg viewBox="0 0 28.87 28.87" id="linkedin"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#0b86ca" rx="6.48" ry="6.48"></rect><path fill="#fff" d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"></path></g></g></svg></svg>
                      </a>
                  </li>
                  <li>
                      <a href="https://github.com/johncamilomcconnell" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
          
      </div>  
  </div>
</section>
<footer className="footer items-center p-4 bg-neutral text-neutral-content ">
  <div className="items-center grid-flow-col">
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>© 2023 gRPSeek - All right reserved</p>
  </div> 
</footer>
    </main>
  )
}
