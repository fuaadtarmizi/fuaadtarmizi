import MouseEffect from "../component/MouseEffect"
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Nurazrina Redzuan ';  
  }, 
  []); 
  return (
    <main className="scroll-smooth">  
    <body className="bg-amber-950 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div id="__next">
      <MouseEffect/>
      <div className="mx-auto max-w-screen-xl min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      
      <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
      <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
        <a className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl" href="https://nurazrinaredzuan.vercel.app/" >Nurazrina Redzuan</a>  
        <h2 className=" mt-3 lg:text-2xl font-medium tracking-tight text-slate-200 sm:text-xl">Financial Management</h2>
        <p className="mt-4 max-w-xs text-lg leading-normal bg-opacity-5 text-slate-500">I'm a Financial Management based in Damansara, Selangor. </p>
        
        <nav className=" hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                </a>
                </li>
                <li>
                  <a className="group flex items-center py-3 " href="#experience">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                </a>
            </li>
            </ul>
          </nav>
          </div>
      <section className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <div className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="azrinanur99@gmail.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Email</span>
              <svg width="28" height="28" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
            </a>
        </div>
        <div className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://www.instagram.com/azrinardzn/" target="_blank" rel="noreferrer">
              <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                </svg>
            </a>
          </div>
          <div className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://twitter.com/azrinardzn/" target="_blank" rel="noreferrer">
              <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path id="white_background" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path>
                </svg>
            </a>
          </div>
          <div className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/nurazrina-redzuan-913b7a23b/"  rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
             </a>
          </div>   
      </section>
      </header>
      < div id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-amber-950 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>
              <div>
              <p className="mb-4 text-base">Hello! My name is Nurazrina Redzuan, I am writing to you to express my interest in the Director of Finance position. I have done my Diploma in Financial Mathematics, plus two years of experience in the finance industry.</p>
                <p className="mb-4 text-base">During the time, I have honed my skills in budgeting, forecasting and financial analysis. I have a deep understanding of financial goals and strategies, as well as creating and implementing new financial processes and procedures.</p>           
                <p className="text-base">Im an organized and details-oriented professional with the ability to work independently and collaboratively to meet deadlines. I am also an excellent communicator and have an impressive track record of successful financial management.</p>
              </div>
          </section>
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-amber-950 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-base font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            
            <div>
              <ol className="group/list">
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">2022 — Present</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://pustakarawangmaju.com/" target="_blank" rel="noreferrer" aria-label="Lead Engineer at Upstatement">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="text-base">Sales Assistant<w className="p-1"></w> | <w className="p-1"></w>Pustaka Rawang Maju 
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                          </svg>
                          </span>
                          </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-base leading-normal">
                        <h1>- Managed over than 20+ invoices and transactions per month that using cash register.</h1><h1 className="text-transparent">asd</h1>
                        <h1>- Scanned goods and ensured the pricing is accurate; collected the payments accurately in cash and credit.</h1><h1 className="text-transparent">asd</h1>
                        <h1>- Ensure high levels of customers satisfaction through excellent sales service by 95% in a high-paced enviroment.</h1><h1 className="text-transparent">asd</h1>
                        <h1>- Maintained outstanding store condition and visual stocked store to ease customers to choose their needs and wants.</h1><h1 className="text-transparent">asd</h1>
                        <h1>- Recommended and displayed valueble items with reasonable price according to customers needs and preferences and handled merchandise return and exchanges, 95% effectively that others.</h1></p>
                    <div>
                      </div>
                      </div>
                      </div>
                      </li>
                      <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">2021 — 2022</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.rhbgroup.com/index.html" target="_blank" rel="noreferrer" aria-label="Lead Engineer at Upstatement">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="text-base">Customer Care Consultant <w className="p-1"></w> | <w className="p-1"></w>RHB Group Berhad 
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                          </svg>
                          </span>
                          </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-base leading-normal">
                        <h1>- Improved customers’ banking experience with the bank by ensuring that the customers are attended to promptly and all their challenges are resolved without delay..</h1><h1 className="text-transparent">asd</h1>
                        <h1>- Involved in performing some financial related and marketing transactions, informed and suggested new banking products to customers. .</h1><h1 className="text-transparent">asd</h1>
                        <h1>- Provided information to customers on their account status and account balances; referred complex issues to the management..</h1><h1 className="text-transparent">asd</h1>
                        <h1>- Captured new accounts, maintained and managed existing accounts, 95% effectively than other associate; issued a renewal and replacement of credit cards.  </h1><h1 className="text-transparent">asd</h1>
                        <h1>- Participated in marketing and awareness campaigns in the bank to create an enlarged customer base.</h1></p>
                    <div>
                      </div>
                      </div>
                      </div>
                      </li>
                      <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">2021 — 2022</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.rhbgroup.com/index.html" target="_blank" rel="noreferrer" aria-label="Lead Engineer at Upstatement">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="text-base">Assistant Administrative (Internship)<w className="p-1"></w> | <w className="p-1"></w>MEG Millionaire Empire Group    
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                          </svg>
                          </span>
                          </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-base leading-normal">
                        <h1>- Handled a summary report of investment, filled in a primary form and letter of investment and takaful to submit at HQ.  </h1><h1 className="text-transparent">asd</h1>
                        <h1>- Handled over than 50+ requests, feedback and queries by managements and client professionally.</h1><h1 className="text-transparent">asd</h1>
                        <h1>- Produced a high quality report, presentations, and brief; and assisted in company events, exhibitions & activities when required. </h1><h1 className="text-transparent">asd</h1>
                        <h1>- Assisted the management in managing the group of companies and in business related activities</h1><h1 className="text-transparent">asd</h1></p>
                    <div>
                      </div>
                      </div>
                      </div>
                      </li>



                      </ol>
                      </div>
          </section>




      </div>
 
    </div>
    </div>
    
    </div>  
  </body>
  </main>
  );
}


export default Home;