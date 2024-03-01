

export const PageHeader = () => {
return (
    <header className="pb-6 bg-white lg:pb-0 bg-owc-vibrant-leaf-green">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

            <nav className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <a href="/" title=""
                       className="flex font-sans text-5xl antialiased font-semibold leading-tight tracking-normal">
                        Obstwiese
                    </a>
                </div>


                <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                    <a href="/" title=""
                       className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Dashboard </a>

                    <a href="#" title=""
                       className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                    <a href="#" title=""
                       className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                    <a href="#" title=""
                       className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                </div>
                <a href="#" title=""
                   className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                   role="button"> Get started now </a>
            </nav>
        </div>
    </header>)


}