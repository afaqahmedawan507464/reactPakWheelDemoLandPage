import React from 'react'

export default function MobileDropDown({ name, submenu = [],cities = [], models = [] }) {
    const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 rounded-md text-sm font-medium px-3 mt-1"
      >
        {name}
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white rounded-md shadow-lg py-1 asd px-3 menusBorders">
          <div className={`{${submenu  ==='' ? 'hidden' : "block flex justify-center items-start flex-col py-3"}`}>
            {submenu.map((item, index) => (
              <a
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                key={index}
              >
                <div className="flex justify-center items-center w-100">
                  <div className={`${item.icon ? 'block' : 'hidden'}`}>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <div className="flex flex-col justify-start items-start">
                      <div>
                        {item.text}
                      </div>
                      <div className={`${item.paragraph ? 'block menuListPageLeftSide--menuParagraph' : 'hidden'}`}>
                        {item.paragraph}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            
          </div>

          <div className={`{${cities  ==='' ? 'hidden' : "block flex justify-center items-start flex-col py-3"}`}>
            {cities.map((item, index) => (
              <a
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                key={index}
              >
                <div className="flex justify-center items-center w-100">
                  <div className={`${item.icon ? 'block' : 'hidden'}`}>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <div className="flex flex-col justify-start items-start">
                      <div>
                        {item.text}
                      </div>
                      <div className={`${item.paragraph ? 'block menuListPageLeftSide--menuParagraph' : 'hidden'}`}>
                        {item.paragraph}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            
          </div>

          <div className={`{${models  ==='' ? 'hidden' : "block flex justify-center items-start flex-col py-3"}`}>
            {models.map((item, index) => (
              <a
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                key={index}
              >
                <div className="flex justify-center items-center w-100">
                  <div className={`${item.icon ? 'block' : 'hidden'}`}>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <div className="flex flex-col justify-start items-start">
                      <div>
                        {item.text}
                      </div>
                      <div className={`${item.paragraph ? 'block menuListPageLeftSide--menuParagraph' : 'hidden'}`}>
                        {item.paragraph}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            
          </div>
        </div>
      )}
    </div>
    </div>
  )
}
