export const Nav = () => {
    return(

        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div class="relative flex items-center justify-between">
    <a href="/" aria-label="HackIIF" title="HackIIF" class="inline-flex items-center">
      
      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">HackIIF</span>
    </a>
    <ul class="flex items-center hidden space-x-8 lg:flex">
      <li><a href="/about" aria-label="Our product" title="About us" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">About</a></li>
      <li><a href="/register" aria-label="Our product" title="Register" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Register</a></li>
      <li><a href="/gallery" aria-label="Product pricing" title="gallery" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Gallery</a></li>
      <li><a href="/contact" aria-label="About us" title="contact us" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Contact Us</a></li>
    
    </ul>
    
    <div class="lg:hidden">
      <button aria-label="Open Menu" title="Open Menu" class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50">
        
      </button>
      
      <div class="absolute top-0 left-0 w-full">
        <div class="p-5 bg-white border rounded shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <a href="/" aria-label="HackIIF" title="HackIIF" class="inline-flex items-center">
                <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                  <rect x="3" y="1" width="7" height="12"></rect>
                  <rect x="3" y="17" width="7" height="6"></rect>
                  <rect x="14" y="1" width="7" height="6"></rect>
                  <rect x="14" y="11" width="7" height="12"></rect>
                </svg>
                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">HackIIF</span>
              </a>
            </div>
            <div>
              <button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <nav>
            <ul class="space-y-4">
              <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Product</a></li>
              <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Features</a></li>
              <li><a href="/" aria-label="Product pricing" title="Product pricing" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Pricing</a></li>
              <li><a href="/" aria-label="About us" title="About us" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">About us</a></li>
              <li>
                <a
                  href="/"
                  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

);
};