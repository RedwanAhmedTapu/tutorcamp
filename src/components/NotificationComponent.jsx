import React, { useState, useEffect } from 'react';

const Notification = ({ statusCode, message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (statusCode && message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [statusCode, message]);

  const renderContent = () => {
    switch (statusCode) {
      case 200:
        return (
          <div className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 0h20v20H0z" fill="none"/>
              <path d="M9 12h2v2H9v-2zm1-8C5.589 4 2 7.589 2 12s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM9 10h2v2H9v-2zm0-4h2v2H9V6z"/>
            </svg>
            <p>{message}</p>
          </div>
        );
      case 400:
        return (
          <div className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 0h20v20H0z" fill="none"/>
              <path d="M9 12h2v2H9v-2zm1-8C5.589 4 2 7.589 2 12s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM9 10h2v2H9v-2zm0-4h2v2H9V6z"/>
            </svg>
            <p>{message}</p>
          </div>
        );
      default:
        return (
          <div className="flex items-center bg-yellow-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 0h20v20H0z" fill="none"/>
              <path d="M9 12h2v2H9v-2zm1-8C5.589 4 2 7.589 2 12s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM9 10h2v2H9v-2zm0-4h2v2H9V6z"/>
            </svg>
            <p>{message}</p>
          </div>
        );
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
      {renderContent()}
    </div>
  );
};

const Modal = ({ statusCode, message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${statusCode === 200 ? 'bg-green-100' : 'bg-red-100'} sm:mx-0 sm:h-10 sm:w-10`}>
              {statusCode === 200 ? (
                <svg className="h-6 w-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6 text-red-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {statusCode === 200 ? 'Success' : 'Error'}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const NotificationComponent = ({ statusCode, message }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (statusCode && message) {
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [statusCode, message]);

  return (
    <>
      <Notification statusCode={statusCode} message={message} />
      {showModal && <Modal statusCode={statusCode} message={message} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default NotificationComponent;
