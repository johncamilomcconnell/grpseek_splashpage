export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-0 m-0 bg-[#FFFFFF]">
      <div className="z-15 w-full max-w-7xl items-center justify-between font-quicksand text-sm lg:flex bg-[#FFFFFF]" >
        <div className="navbar pt-5 bg-[#FFFFFF]">
  <div className="flex-1">
    
  <a href='#'>
  <div className="flex flex-row justify-start justify-items-start content-center items-center">
  <div className='flex-row'><img src='/grpseek_logo_lg.png' className="h-12 p-0 m-0"></img></div>
  <div><h1 className="text-4xl font-semibold pl-2 text-gray-900">gRPSeek</h1></div>
  </div>
  </a>
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
    <a href="https://medium.com/@grpseek/grpseek-90dc8cbac8bf">
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
      <div className="hero py-24 bg-[#FFFFFF]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/gRPSeek_video2.gif" className="max-w-2xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-6xl font-bold text-gray-900">See the Unseen</h1>
      <p className="py-6 text-xl text-black">We simplify the understanding and analysis of gRPC-based applications by providing comprehensive visualizations of metrics and proto file structures</p>
      <a href="https://github.com/oslabs-beta/gRPSeek">
      <button className="btn btn-primary bg-[#345f5f] rounded-lg">Start Seeking</button>
      </a>
      
    </div>
  </div>
</div>

<div>
<section className="bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-white">
      <div className="max-w-screen-md mb-8 lg:mb-16 bg-white">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 bg-white">Designed for gRPC developers like you</h2>
          <p className="text-gray-500 sm:text-xl">Here at gRPSeek we want to help developers and companies elevate their application development, improve productivity, and deliver exceptional user experiences.</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#345f5f" className="w-32 h-50">
  <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
</svg>
              </div>
              <h3 className="mb-2 text-xl text-gray-900 font-bold bg-white">Metrics</h3>
              <p className="text-gray-500">Access total gRPC requests, system and user CPU usage, total latency duration in seconds</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#345f5f" className="w-32 h-32">
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 bg-white">Graphs</h3>
              <p className="text-gray-500">Harness the power of gRPSeek by visualizing gRPC load and latency tests with a click of a button</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-white lg:h-12 lg:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#345f5f" className="w-32 h-32">
  <path fillRule="evenodd" d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
</svg>                  
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Proto Mapping</h3>
              <p className="text-gray-500">Upload your proto files to visualize the complex relationship between services and messages</p>
          </div>
      </div>
  </div>
</section>
</div>

<section className="bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center bg-white lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 bg-white max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Team</h2>
      </div> 
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-900 dark:text-gray-400">
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
