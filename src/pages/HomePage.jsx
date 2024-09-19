import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";

const HomePage = () => {
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();

  console.log(state?.blogs);

  const user = state?.blogs ?? auth?.blogs;

  return (
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-7 gap-4">
        {/* <!-- Blog Contents --> */}
        <div class="space-y-3 md:col-span-5">
          {/* <!-- Blog Card Start --> */}
          {}
          {/* <!-- Blog Card End --> */}
        </div>

        {/* <!-- Sidebar --> */}
        <div class="md:col-span-2 h-full w-full space-y-5">
          <div class="sidebar-card">
            <h3 class="text-slate-300 text-xl lg:text-2xl font-semibold">
              Most Popular 👍️
            </h3>

            <ul class="space-y-5 my-5">
              <li>
                <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p class="text-slate-600 text-sm">
                  by
                  <a href="./profile.html">Saad Hasan</a>
                  <span>·</span> 100 Likes
                </p>
              </li>

              <li>
                <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p class="text-slate-600 text-sm">
                  by
                  <a href="./profile.html">Saad Hasan</a>
                  <span>·</span> 100 Likes
                </p>
              </li>

              <li>
                <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p class="text-slate-600 text-sm">
                  by
                  <a href="./profile.html">Saad Hasan</a>
                  <span>·</span> 100 Likes
                </p>
              </li>

              <li>
                <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p class="text-slate-600 text-sm">
                  by
                  <a href="./profile.html">Saad Hasan</a>
                  <span>·</span> 100 Likes
                </p>
              </li>
            </ul>
          </div>

          <div class="sidebar-card">
            <h3 class="text-slate-300 text-xl lg:text-2xl font-semibold">
              Your Favourites ❤️
            </h3>

            <ul class="space-y-5 my-5">
              <li>
                <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p class="text-slate-600 text-sm">
                  #tailwindcss, #server, #ubuntu
                </p>
              </li>

              <li>
                <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p class="text-slate-600 text-sm">
                  #tailwindcss, #server, #ubuntu
                </p>
              </li>

              <li>
                <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p class="text-slate-600 text-sm">
                  #tailwindcss, #server, #ubuntu
                </p>
              </li>

              <li>
                <h3 class="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  How to Auto Deploy a Next.js App on Ubuntu from GitHub
                </h3>
                <p class="text-slate-600 text-sm">
                  #tailwindcss, #server, #ubuntu
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
