// import { PureComponent } from "react";
// import { withRouter } from "react-router-dom";

// class ScrollToTop extends PureComponent {
//   componentDidMount = () => window.scrollTo(0, 0);

//   componentDidUpdate = prevProps => {
//     if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
//   };

//   render = () => this.props.children;
// }

// export default withRouter(ScrollToTop);

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
          top: 0
      })
    }, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}