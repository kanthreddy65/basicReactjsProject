import React from "react";





class Footer extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        return (
            <React.Fragment>
                
               
                <section className="flex bg-dark text-white p-3 text-center" role="main">
                    <div className="column">
  <h1>Fixed footer, scroll down.</h1>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A rerum blanditiis soluta </p>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi </p>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi voluptates suscipit nesciunt nisi illo  </p>
  
  <h2>Keep scrolling..</h2>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum aspernatur quibusdam ad provident molestiae adipisci num</p>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ratione blanditiis ver</p>
  </div>
</section>

<footer className="fixed_footer bg-light text-center">
  <div className="content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem.</p>
  </div>
</footer>



            </React.Fragment>
        );
    }
}

export default Footer;