export default function Section3() {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      const email = event.target.email.value;
      console.log("Subscribed email:", email);
    };

    
  
    return (
      <>
        <div className="newsletter-container">
          <h1>Our Newsletter</h1>
          <form onSubmit={handleSubmit} method="post">
            <input type="email" name="email" placeholder="Enter your email" required />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </>
    );
  }