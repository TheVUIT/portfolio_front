/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import article1 from '../assets/images/blog/article-1.jpg'
import article2 from '../assets/images/blog/article-2.jpg'
import article3 from '../assets/images/blog/article-3.jpg'


function Blog() {
    return (
        <div className="container mx-auto flex flex-wrap py-6">
            {/* Posts Section */}
            <section className="w-full md:w-2/3 flex flex-col items-center  px-3">
                <article className="flex flex-col rounded-2xl shadow my-4">
                    {/* Article Image */}
                    <a href="#" className="hover:opacity-75">
                        <img src={article1} alt="Post" />
                    </a>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-blue-600 text-sm font-bold uppercase pb-4">Technology</a>
                        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                        <p className="text-sm pb-3">
                            By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                        </p>
                        <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                        <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <article className="flex flex-col shadow my-4">
                    {/* Article Image */}
                    <a href="#" className="hover:opacity-75">
                        <img src={article2} alt="Post" />
                    </a>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-blue-600 text-sm font-bold uppercase pb-4">Automotive, Finance</a>
                        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                        <p className="text-sm pb-3">
                            By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on January 12th, 2020
                        </p>
                        <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                        <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <article className="flex flex-col shadow my-4">
                    {/* Article Image */}
                    <a href="#" className="hover:opacity-75">
                        <img src={article3} alt="Post" />
                    </a>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-blue-600 text-sm font-bold uppercase pb-4">Sports</a>
                        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                        <p className="text-sm pb-3">
                            By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
                        </p>
                        <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                        <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                {/* Pagination */}
                <div className="flex items-center py-8">
                    <a href="#" className="h-10 w-10 bg-blue-600 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                    <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                    <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
                </div>
            </section>

            {/* Sidebar Section */}
            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5">About Us</p>
                    <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                    <a href="#" className="w-full bg-blue-600 text-white font-bold text-sm uppercase rounded hover:bg-blue-500 flex items-center justify-center px-2 py-3 mt-4">
                        Get to know us
                    </a>
                </div>

                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5">Instagram</p>
                    <div className="grid grid-cols-3 gap-3">
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" alt="post" />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" alt="post" />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3" alt="post" />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4" alt="post" />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5" alt="post" />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6" alt="post" />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7" alt="post" />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8" alt="post" />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9" alt="post" />
                    </div>
                    <a href="#" className="w-full bg-blue-600 text-white font-bold text-sm uppercase rounded hover:bg-blue-500 flex items-center justify-center px-2 py-3 mt-6">
                        <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
                    </a>
                </div>
            </aside>
        </div>
    );
}

export default Blog