import React from "react";

const MapInfoAdmin = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full md:w-2/12 lg:w-2/12 xl:w-2/12 xl:ml-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDQ3kd7yOhrnyuSOwDZThfTzgqSyKq6OgU&amp;q=Kelly+Building,+Olive+Dr,+Socorro,+NM+87801"
              allowFullScreen
            ></iframe>
            <div className="p-6"></div>
          </div>
        </div>

        <div className="w-full md:w-4/12 lg:w-4/12 xl:w-4/12 xl:ml-16">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2">
                The Petroleum Recovery Research Center
              </h5>
              <h6 className="text-gray-600 mb-4">
                A Division of New Mexico Tech
              </h6>
              <div className="text-gray-700">
                <div>801 Leroy Place Socorro, NM 87801</div>

                <div className="flex items-center mt-4">
                  <i className="fas fa-phone mr-2"></i>
                  <span>P: (575) 835-5142 OR (575) 835-5812</span>
                </div>
                <div className="flex items-center mt-2">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>E: chyanne.carrillo@nmt.edu</span>
                </div>
                <div className="flex items-center mt-2 mb-4">
                  <i className="fas fa-clock mr-2"></i>
                  <span>H: Monday - Friday: 8:00 AM to 5:00 PM</span>
                </div>

                <div className="mt-4">
                  Our main office is located in the Kelly Building on the New
                  Mexico Tech campus in Socorro, New Mexico. To find us, simply
                  take the normal route you would to get to the campus (located
                  at 801 Leroy Place) and make your way to the West side of the
                  campus. The Kelly Building is near the golf course, across the
                  street from Workman Center, and south of the New Mexico Tech
                  Children's Center near Macey Center.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapInfoAdmin;