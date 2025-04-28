import React from "react";

const Description = () => {
  return (
    <div className="mt-16">
      {/* tab navigation for description and reviews */}
      <div className="flex text-center font-medium md:w-[30%]">
        {/* description tab */}
        <div className="flex-1 border border-b-0 px-4 py-3">Description</div>

        {/* reviews tab */}
        <div className="flex-1 border border-b-0 px-4 py-3 bg-gray-50">
          Reviews (122)
        </div>
      </div>

      {/* product description content */}
      <div className="border p-6 pb-8 md:p-8 md:pb-10 leading-7">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, ducimus
          temporibus excepturi vel eos hic odit, atque vitae quisquam labore
          deserunt laudantium quis reprehenderit, incidunt voluptatum doloribus
          assumenda nam tempore? Facere dolorem natus voluptatibus, repellat
          totam sit eaque facilis, distinctio porro amet iste. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Non cumque earum velit nisi
          atque exercitationem neque corrupti vitae debitis molestiae, veritatis
          repellendus numquam magnam voluptatem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque
          earum velit nisi atque exercitationem neque corrupti vitae debitis
          molestiae, veritatis repellendus numquam magnam voluptatem.
        </p>
      </div>
    </div>
  );
};

export default Description;
