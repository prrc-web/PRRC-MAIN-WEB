import React from 'react';

const AdminProfile = ({
  name,
  title,
  imageUrl,
  phone,
  email,
  office,
  resumeLink,
  description,
}) => {
  const openPDF = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="flex justify-center my-8 md:my-10">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mt-32">
        {/* Profile Card */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0 md:mr-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={name}
            />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-4">{name}</h5>
              <div className="flex items-center mb-3">
                <i className="fa fa-phone mr-2 text-gray-600"></i>
                <span className="text-gray-700">P: {phone}</span>
              </div>
              <div className="flex items-center mb-3">
                <i className="fas fa-envelope mr-2 text-gray-600"></i>
                <span className="text-gray-700">E: {email}</span>
              </div>
              <div className="flex items-center mb-6">
                <i className="fas fa-building mr-2 text-gray-600"></i>
                <span className="text-gray-700">O: {office}</span>
              </div>

              {resumeLink && (
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  onClick={() => openPDF(resumeLink)}>
                  Resume
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="w-full md:w-7/12">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">{name}</h4>
              <div className="text-gray-600 mb-6">{title}</div>
              <div className="text-gray-700 leading-relaxed">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
