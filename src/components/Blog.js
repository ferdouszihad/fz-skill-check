import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5 mb-3">
      <h2 class="py-3 m-2 rounded-2 bg-dark text-light text-center">
        Our Blogs
      </h2>
      <div className="blogs-container">
        <article class="my-4 mb-5 border border-dark p-3 rounded-bottom">
          <h2>Explain the Purpose of using react router</h2>
          <hr />
          <p>
            React Router, and dynamic, client-side routing, allows us to build a
            single-page web application with navigation without the page
            refreshing as the user navigates. <br />
            React Router uses component structure to call components, which
            display the appropriate information. By preventing a page refresh,
            and using Router or Link, which is explained in more depth below,
            the flash of a white screen or blank page is prevented. This is one
            increasingly common way of having a more seamless user experience.
            React router also allows the user to utilize browser functionality
            like the back button and the refresh page while maintaining the
            correct view of the application.
          </p>
        </article>
        <article class="my-4 mb-5 border border-dark p-3 rounded-2">
          <h2>How Context API Work</h2>
          <hr />
          <p>
            The Context API is a component structure provided by the React
            framework, which enables us to share specific forms of data across
            all levels of the application. It’s aimed at solving the problem of
            prop drilling.
          </p>
          <p>
            Context API provides properties to their children. and the children
            can use these property easily by using <b>useContext()</b> and The
            Context is provided with context.provider .The Provider component
            accepts a value prop to be passed to consuming components that are
            descendants of this Provider. One Provider can be connected to many
            consumers. Providers can be nested to override values deeper within
            the tree.
          </p>
        </article>
        <article class="my-4 mb-5 border border-dark p-3 rounded-2">
          <h2>What is UseRef()</h2>
          <hr />
          <p>
            useRef() is a built-in React hook that accepts one argument as the
            initial value and returns a reference. A reference is an object
            having a special property current.
          </p>
          <p>
            Javascript is mainly used for any client side activity for the web
            application, for example refreshing the page in a specific interval,
            possible attribute validation or provide any dynamic changes in web
            app pages without refreshing that particular web page.
            <br />
            <br />
            UseRef used to
            <ul>
              <li>Accessing DOM elements</li>
              <li>focusing an input</li>
              <li>Updating references restriction</li>
            </ul>
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
