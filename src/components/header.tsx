"use client";

const Header = ({ name, title }: { name: string; title: string }) => {
  return (
    <>
      {/* navbar  */}

      <div className="dl-fixed-sidebar dl-sidebar-left">
        <div className="dl-header-container">
          <div className="logo">
            <h1 className="flex flex-col">
              <span className="text-2xl uppercase">{name}</span>
              <span className="text-center text-sm text-slate-50">{title}</span>
            </h1>
          </div>

          <div className="dl-burger-menu">
            <div className="dl-line-menu dl-line-half dl-first-line"></div>
            <div className="dl-line-menu"></div>
            <div className="dl-line-menu dl-line-half dl-last-line"></div>
          </div>
          <nav className="dl-menu-fixed">
            <ul>
              <li>
                <a className=" no-underline" href="#home" data-scroll-nav="0">
                  Home
                </a>
              </li>
              <li>
                <a className="no-underline" href="#about" data-scroll-nav="1">
                  About Me
                </a>
              </li>
              <li>
                <a className="no-underline" href="#resume" data-scroll-nav="2">
                  Resume
                </a>
              </li>
              <li>
                <a className="no-underline" href="#skills" data-scroll-nav="3">
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="no-underline"
                  href="#portfolios"
                  data-scroll-nav="4"
                >
                  Portfolios
                </a>
              </li>
              <li>
                <a className="no-underline" href="#reviews" data-scroll-nav="5">
                  Reviews
                </a>
              </li>
              <li>
                <a className="no-underline" href="#contact" data-scroll-nav="6">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
