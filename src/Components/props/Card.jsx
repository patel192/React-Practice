import React from 'react';

export const Card = (props) => {
  return (
    <div className="
      bg-white 
      rounded-2xl 
      shadow-xl 
      overflow-hidden 
      flex 
      flex-col 
      h-full 
      transform 
      transition-all 
      duration-300 
      hover:scale-[1.02] 
      hover:shadow-2xl
      relative 
    ">
      {/* Image Area - Responsive with aspect ratio */}
      <div className="
        relative 
        w-full 
        aspect-w-16 
        aspect-h-9 
        overflow-hidden
      ">
        <img
          src={props.url}
          alt={`Image of ${props.name || 'car'}`}
          className="
            w-full 
            h-full 
            object-cover 
            transform 
            transition-transform 
            duration-300 
            scale-100 
            hover:scale-105
          "
        />
        
        {/* Optional: "New Arrival" badge */}
        <div className="
          absolute 
          top-4 
          left-4 
          bg-indigo-600 
          text-white 
          text-xs 
          font-semibold 
          px-3 
          py-1 
          rounded-full 
          shadow-md
        ">
          New Arrival
        </div>

        {/* Gradient Overlay for Bottom of Image (for text legibility) */}
        <div className="
          absolute 
          bottom-0 
          left-0 
          w-full 
          h-1/2 
          bg-gradient-to-t 
          from-black 
          to-transparent 
          opacity-60
        "></div>
        
        {/* Car Name overlay on image (optional, can be moved to content) */}
        <div className="
          absolute 
          bottom-4 
          left-6 
          right-6
          text-white 
          font-bold 
          text-xl 
          drop-shadow-lg 
        ">
          {props.name}
        </div>
      </div>

      {/* Content Area */}
      <div className="
        p-6 
        flex 
        flex-col 
        flex-grow 
        justify-between 
      ">
        {/* Car Name (main heading) */}
        <h5 className="
          text-2xl 
          font-extrabold 
          text-gray-900 
          mb-3 
          leading-tight 
        ">
          {props.name}
        </h5>
        
        {/* About the car - Truncated with "Read more" */}
        <p className="
          text-gray-700 
          text-base 
          leading-relaxed 
          mb-4 
          flex-grow 
        ">
          {props.about && props.about.length > 100
            ? `${props.about.substring(0, 100)}... `
            : props.about}
          {props.about && props.about.length > 100 && (
            <span className="
              text-indigo-600 
              hover:text-indigo-800 
              font-semibold 
              cursor-pointer 
              ml-1 
              inline-block
            ">
              Read more
            </span>
          )}
        </p>

        {/* Call to Action Buttons / Interaction Area */}
        <div className="
          pt-4 
          mt-auto 
          border-t 
          border-gray-100 
          flex 
          items-center 
          justify-between 
        ">
          <button className="
            bg-indigo-600 
            hover:bg-indigo-700 
            text-white 
            font-bold 
            py-2 
            px-5 
            rounded-full 
            transition-colors 
            duration-300 
            shadow-md 
            hover:shadow-lg 
            focus:outline-none 
            focus:ring-2 
            focus:ring-indigo-500 
            focus:ring-opacity-75
          ">
            View Details
          </button>
          
          <button className="
            text-gray-400 
            hover:text-red-500 
            focus:outline-none 
            focus:text-red-500 
            transition-colors 
            duration-300
            p-2 
          " title="Add to Favorites">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};